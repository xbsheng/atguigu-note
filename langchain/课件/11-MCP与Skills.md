# 第11章：MCP 与 Skills

讲师：尚硅谷-宋红康

官网：尚硅谷（<http://www.atguigu.com/>）

> 说明：本章为官方资料补充整理，B 站视频（P1 – P120）未覆盖，暂无对应分 P。

> Refs: 
>
> 1. https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-zh.md
> 2. https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro
>
> 1. https://glama.ai/
> 2. https://smithery.ai/
> 3. https://cursor.directory/
> 4. https://mcp.so/
> 5. https://bailian.console.aliyun.com/cn-beijing?utm_content=se_1021228063&gclid=EAIaIQobChMI4v23ybGVlgMVDcQ8Ah3DQy3HEAAYASAAEgIE8vD_BwE#/home

## **大模型的局限与核心挑战**

大模型本质是文字生成器，缺乏记忆、视觉及操作外部世界的能力。要使其真正有用，需解决两个层面的问题：

- **连接问题**：让模型能读取文件、查询数据库、调用API或发送邮件，即“摸到”外部世界
- **方法论问题**：让模型按照特定流程、标准和规范执行任务，而非随机调用工具

MCP旨在解决连接问题，Skills旨在解决方法论问题，二者处于不同层面。

## **MCP：解决工具连接的标准化协议**

Modal context protocol 

![image-20260810205930777](assets/11-image-20260810205930777.png)

![image-20260810210053422](assets/11-image-20260810210053422.png)

### **Function Calling的痛点**

definition

Function Calling 是大语言模型的一项能力。在调用 API 时，你可以同时传入一批自定义函数的名称、描述及参数定义（Schema）。

大模型会根据用户的提问，判断是否需要调用这些函数：

1. **意图识别与参数提取**：如果需要，模型**不会直接回答文本**，而是返回一个结构化的**调用请求**（包含要调用的函数名及解析出的参数）。
2. **本地执行**：你的代码接收到请求后，在本地/服务端执行该函数并获取结果。
3. **结果回传与最终生成**：代码将函数执行结果作为新的消息回传给模型，模型结合原始问题和执行结果，生成最终的自然语言回答。

![image-20260810132543755](assets/11-image-20260810132543755.png)

![image-20260810141004443](assets/11-image-20260810141004443.png)

在MCP出现前，开发者依赖Function Calling实现工具调用，但存在显著缺陷：

- **格式绑定厂商**：OpenAI、Anthropic、Google等各家JSON格式不一，更换模型需重写工具定义
- **上下文消耗巨大**：每次请求需携带全量工具定义，50个工具描述可能占用 **1-2万** token
- **代码高度耦合**：工具定义与执行逻辑嵌入应用代码，导致N个工具对接M个应用时产生 **N×M** 份集成代码

### **MCP的核心架构与价值**

MCP通过标准化协议将 **N×M** 的集成复杂度降为 **N+M**：

- **独立服务化**：工具被封装为独立的MCP Server，自行声明能力并处理执行逻辑
- **动态发现机制**：MCP Client可向Server查询可用工具清单，实现工具与应用的解耦
- **面向AI的理解层**：区别于传统API供代码调用，MCP提供AI可自主理解、判断和构造参数的标准描述 

### **技术实现细节**

MCP架构包含三个角色：

![image-20260810133214998](assets/11-image-20260810133214998.png)

- **Host**：AI应用主体（如Cursor、Claude Desktop）
- **Client**：负责通信的组件，与Server一对一绑定，隔离数据
- **Server**：提供能力的服务，暴露三种原语：
  - **Tools**：可执行函数（如查库、发消息）
  - **Resources**：只读数据源（如文件内容、Schema）
  - **Prompts**：可复用提示词模板

通信支持 **STDIO**（本地低延迟）和 **Streamable HTTP**（远程服务）。截至2026年中，公开MCP Server超 **1万个**，SDK月下载量超 **9700万**，已成为由Linux基金会治理的行业标准。

## 应用场景

![image-20260810140607228](assets/11-image-20260810140607228.png)

## MCP 通信机制

根据 MCP 的规范，当前支持两种通信机制（传输方式）： 

1. stdio(Standard Input/Output，标准输入/输出）：主要用在本地服务上，操作你本地的软件或者本地的文 件。比如 Blender 这种就只能用 Stdio 因为他没有在线服务。 ==MCP默认通信方式== 
2. SSE(Server-Sent Events)：主要用在远程通信服务上，这个服务本身就有在线 的 API，比如访问你的谷歌邮件，天气情况等。

### stdio

优点：

1. 这种方式适用于客户端和服务器在同一台机器上运行的场景，简单。 
2. stdio模式无需外部网络依赖，通信速度快，适合快速响应的本地应用。 
3. 可靠性高，且易于调试 

缺点：

1. Stdio 的配置比较复杂，我们需要做些准备工作，你需要提前安装需要的命令行工具。 
2. stdio模式为单进程通信，无法并行处理多个客户端请求，同时由于进程资源开销较大，不适合在本地运行大量服务。（限制了其在更复杂分布式场景中的使用）

### sse

场景：

1. SSE方式适用于客户端和服务器位于不同物理位置的场景。 

2. 适用于实时数据更新、消息推送、轻量级监控和实时日志流等场景 

3. 对于分布式或远程部署的场景，基于 HTTP 和 SSE 的传输方式则更为合适。 

优点：

1. 配置方式非常简单，基本上就一个链接就行，直接复制他的链接填上就行

### 使用前的准备工作

#### stdio (one of them)

**`uvx` 环境** / for python

若已配置Python环境，可使用以下命令安装： `pip install uv`

```
uv --version
uvx --help
```

**`npx` 环境** / for typescript

Nodejs : Node.js下载的官网：https://nodejs.org/zh-cn

## MCP的C/S架构

![image-20260810211945162](assets/11-image-20260810211945162.png)

MCP 遵循客户端-服务器架构（client-server），其中包含以下几个核心概念：

1. MCP 主机(MCP Hosts) 
2. MCP 客户端( MCP Clients ) 
3. MCP 服务器( MCP Servers ) 
4. 本地资源( Local Resources ) 
5. 远程资源( Remote Resources ) 

![image-20260810210925085](assets/11-image-20260810210925085.png)

### MCP HOST

![image-20260810211429376](assets/11-image-20260810211429376.png)

作为运行 MCP 的主应用程序，例如 Claude Desktop、Cursor、Cline 或 AI 工具。 为用户提供与LLM交互的接口，同时集成 MCP Client 以连接 MCP Server。

### MCP CLIENT

![image-20260810211443794](assets/11-image-20260810211443794.png)

MCP client 充当 LLM 和 MCP server 之间的桥梁，嵌入在主机程序中，主要负责： 

1. 接收来自LLM的请求； 
2. 将请求转发到相应的 MCP server 
3. 将 MCP server 的结果返回给 LLM

### MCP SERVER

每个 MCP 服务器都提供了一组特定的工具，负责从本地数据或远程服务中检索信息。 是 MCP 架构中的关键组件。

与传统的远程 API 服务器不同，MCP 服务器既可以作为**本地应用程序**（stdio方式）在用户设备上运行，也可部署至**远程服务器**（sse 方式）。 

比如你让助手：

1. “帮我查航班信息” → 它调用航班查询 API 

2. “算一下 37% 折扣后多少钱” → 它运行计算器函数 

作用：让 LLM 不仅能“说”，还能“做”（执行代码、查询数据等）。

![image-20260810211522832](assets/11-image-20260810211522832.png)

本质是运行在电脑上的一个nodejs或python程序。可以理解为客户端用命令行调用了电脑上的nodejs或python程序。 

1. 使用 TypeScript 编写的 MCP server 可以通过 npx 命令来运行 
2. 使用 Python 编写的 MCP server 可以通过 uvx 命令来运行。

## MCP工作流程

API 主要有两个

1. tools/list：列出 Server 支持的所有工具 
2. tools/call：Client 请求 Server 去执行某个工具， 并将结果返回

![image-20260810212057467](assets/11-image-20260810212057467.png)

![image-20260810212143353](assets/11-image-20260810212143353.png)

## **Skills：提示词的工程化管理体系**

![image-20260810133329101](assets/11-image-20260810133329101.png)

### **传统提示词的局限性**

- **无状态性**：对话结束后偏好、规范等上下文归零，需重复输入
- **管理混乱**：System Prompt绑定单次对话，Custom Instructions全局生效无法场景化，Projects仅存储资料而非方法
- **缺乏执行力**：纯文本无法嵌入脚本进行确定性检查或自动化验证

### **Skills的结构与渐进式披露**

Skills是将“做事方法”打包为文件夹的工程化方案，核心包含 `skill.md` 及脚本、参考文档等资源。其采用**渐进式披露**机制以优化上下文：

- **第一层（元数据）**：启动时仅加载名称与简短描述（大概100个词左右），成本极低
- **第二层（指令正文）**：AI判断任务相关时才加载完整Markdown指令
- **第三层（资源文件）**：执行中按需读取References或运行Scripts

![image-20260810133446460](assets/11-image-20260810133446460.png)

### **从提示词到基础设施的跃迁**

Skills并非简单的提示词集合，而是引入了版本控制、自动触发、脚本验证及分层加载机制。它将原本依赖人工记忆和手动粘贴的提示词，转化为类似Git管理代码般的标准化基础设施，实现“教一次就会”的持久化效果。

## **MCP与Skills的协同关系**

Anthropic将二者比喻为五金店货架与懂行店员的关系：

- **MCP是货架**：提供木胶、夹具等工具和数据连接能力，解决“有什么可用”的问题
- **Skills是店员**：提供维修流程、操作标准和质量要求，解决“该怎么用”的问题

在竞品分析场景中，MCP负责连接Google Drive、GitHub获取数据，Skills负责定义分析框架、输出模板及质量标准。二者构成上下层关系，最强工作流需同时具备连接能力与方法论指导。

## **底层逻辑：知识的标准化与工程化**

MCP与Skills的共同核心价值在于**标准化思维**与**知识工程化**：

- **MCP**：统一AI与外部工具的接口标准，类似USB-C或REST API，消除碎片化集成
- **Skills**：将人脑中的SOP转化为机器可读、可版本化的文件包，类似将口头经验固化为操作手册

这一转变使AI从需手把手教的实习生，进化为可持续执行复杂任务的系统，实现了隐性知识的显性化、可复用化与可传播化。

MCP通过标准化协议彻底解耦了工具与应用，将集成复杂度从指数级降为线性，确立了AI工具互操作的事实行业标准，极大降低了生态开发门槛。

Skills将非结构化的提示词升级为具备版本控制与自动触发能力的工程化资产，解决了大模型上下文管理与知识复用的核心痛点，是实现AI代理持久化的关键。

二者结合体现了AI开发从“功能实现”向“知识基建”的范式转移，未来核心竞争力在于如何将隐性业务逻辑转化为可被AI自主加载执行的标准化Skill模块。


## 附：如何在本地使用 MCP Inspector 调试自己开发的 MCP Server

**MCP Inspector** 是 Anthropic 官方提供的可视化调试工具。它会在本地启动一个 Web 页面，让你可以在**不连接任何大模型 API** 的情况下，直接查看你的 MCP Server 暴露了哪些工具、查看它们的参数 Schema，并手动输入参数触发执行，极大降低了开发调试成本。

### 1. 启动调试工具

MCP Inspector 使用 Node.js 构建，可以通过 `npx` 直接免安装运行。

在你的 MCP 项目目录下，根据你的传输协议（`stdio` 或 `SSE`）运行对应命令：

#### 场景 A：调试本地 `stdio` 模式的 MCP Server（最常见）

用 Inspector 去拉起你的脚本/可执行文件。

- **Python 项目：**

  Bash

  ```
  npx @modelcontextprotocol/inspector python your_server.py
  ```

  *(如果使用了 `uv` 等虚拟环境管理工具，可以写成：`npx @modelcontextprotocol/inspector uv run your_server.py`)*

- **Node.js / TypeScript 项目：**

  Bash

  ```
  npx @modelcontextprotocol/inspector node dist/index.js
  ```

#### 场景 B：调试本地或远程 `SSE` 模式的 MCP Server

如果你的服务已经独立启动（如运行在 `http://localhost:8000/sse`），直接加参数连接：

```bash
npx @modelcontextprotocol/inspector http://localhost:8000/sse
```

### 2. 使用 Inspector 界面进行调试

执行上述命令后，终端会打印出本地调试页面的 URL（通常为 `http://localhost:5173`），并在浏览器中自动打开界面。

**1.连接服务 (Connect):**

页面加载后，确认传输类型（Stdio / SSE）及配置参数，点击 **Connect** 按钮。Inspector 会尝试与你的 MCP Server 建立通信连接。

**2.查看工具与 Schema (List Tools):**

连接成功后，切换到 **Tools** 标签页。右侧列表会列出你的服务通过 `@mcp.tool()` 暴露的所有函数。点开任意函数，可以实时检查模型看到的 **Docstring（函数描述）** 和 **JSON Schema（参数类型要求）**。

**3.手动测试执行 (Run Tool):**

在工具表单中手动填入测试参数（例如 `user_id: "123"`），点击 **Run Tool** 按钮。

**4.检查响应与日志 (Inspect Response & Logs):**

在下方控制台查看工具返回的原始 JSON 数据、错误信息（如有）以及底层的 `JSON-RPC` 请求/响应报文。

### 3. 高级调试技巧

- **测试 Resources 与 Prompts：** 如果你的 MCP Server 除了 Tools 外还提供了上下文资源（`resources`）或预设提示词（`prompts`），可以在顶部对应的标签页中进行独立测试和数据预览。
- **热重载配合：** 开发 Python 时，可以在命令中引入热重载工具（如 `nodemon` 或 `watchdog`），保存代码后无需重新启动 Inspector 即可直接重新 Connect 测试新修改的逻辑。



-----

```
[ 用户 / 前端 ]
       │
       ▼
┌────────────────────────────────────────────────────────┐
│                      Agent Core                        │
│   (LLM 思考 / ReAct 提示词 / 上下文管理 / 状态机)          │
└──────────────────────────┬─────────────────────────────┘
                           │ 调度工具
                           ▼
┌────────────────────────────────────────────────────────┐
│                     MCP Client Layer                   │
│   (连接池 / Tool 转换 / JSON-RPC 编解码 / 错误降级)       │
└──────────────┬──────────────────────────┬──────────────┘
               │ stdio通信                │ SSE通信
               ▼                          ▼
       [ 本地 MCP Server ]       [ 远程/第三方 MCP Server ]
```

```
[ 1. Agent 思考 ]
Agent 将【用户目标 + 历史上下文 + 动态拿到的 MCP 工具列表】传给 LLM。
LLM 返回决策：是直接回答，还是需要调用工具？
       │
       ├─► 如果直接回答 ──► 结束循环，返回给用户
       │
       └─► 如果要求调用工具 (Function Call)
             │
             ▼
[ 2. MCP 路由与执行 ]
Agent 解析出 LLM 想要调用的函数名 (tool_name) 和参数 (args)。
Agent 路由到对应的 MCP Client 节点，通过 stdio/SSE 发送 JSON-RPC 调用请求。
MCP Server 在后台执行任务，返回结果（或报错信息）。
             │
             ▼
[ 3. 上下文更新与迭代 ]
Agent 将 MCP 返回的运行结果追加到上下文（Role: tool / system）。
带着新数据再次调用 LLM，进入下一轮思考...（直到完成任务）
```

```
my-ai-agent-project/
├── app/
│   ├── __init__.py
│   ├── main.py                  # FastAPI / Web 服务入口（提供 WebSocket 或 HTTP API）
│   │
│   ├── agent/                   # 【核心大脑】Agent 逻辑与 ReAct 思考循环
│   │   ├── __init__.py
│   │   ├── core.py              # Agent 核心类：控制思考循环 (While Loop)
│   │   ├── prompt.py            # System Prompt 模板与上下文管理
│   │   └── memory.py            # 对话历史与长短期记忆管理
│   │
│   ├── mcp_client/              # 【核心手脚】MCP 客户端与工具适配层
│   │   ├── __init__.py
│   │   ├── manager.py           # MCP 连接管理器：读取配置，建立与管理多个 Server 的连接
│   │   ├── transports.py        # 建立 stdio / SSE 具体的传输长连接
│   │   └── adapter.py           # 工具适配器：把 MCP 返回的 Tool Schema 转换成 LLM 要求的格式
│   │
│   ├── security/                # 【安全闸口】人机协同与权限控制
│   │   ├── __init__.py
│   │   ├── guardrail.py         # 高危工具拦截逻辑（判断是自动执行还是等待批准）
│   │   └── approval.py          # 挂起 Agent 并向前端推送审批请求的机制
│   │
│   └── llm/                     # 【模型对接】大模型统一调用封装
│       ├── __init__.py
│       └── provider.py          # 统一调用 Gemini / Claude / DeepSeek 等 API
│
├── config/                      # 【配置中心】
│   ├── __init__.py
│   ├── settings.py              # 系统环境变量（API Keys, 日志级别等）
│   └── mcp_servers.json         # 注册的 MCP 服务配置文件
│
├── requirements.txt             # 项目依赖（mcp[cli], fastapi, langchain/llamaindex 等）
└── Dockerfile                   # 项目部署 Dockerfile
```

#### 1. `config/mcp_servers.json` (MCP 插件配置文件)

这是 Agent 的“工具列表配置文件”，Agent 启动时会自动读取并挂载这些 MCP 服务：

```json
{
  "mcpServers": {
    "local-db": {
      "transport": "stdio",
      "command": "python",
      "args": ["../mcp-servers/db_server.py"]
    },
    "gitlab-service": {
      "transport": "sse",
      "url": "https://mcp-gateway.company.internal/gitlab/sse",
      "headers": { "Authorization": "Bearer ENV_TOKEN" }
    }
  }
}
```

#### 2. `app/mcp_client/manager.py` (MCP 连接管理器)

负责根据配置文件建立与管理所有 MCP 连接，实现**动态服务发现**：

```python
class MCPClientManager:
    def __init__(self, config_path: str):
        self.config_path = config_path
        self.active_clients = {}  # 存储已连上的 MCP Client 实例

    async def initialize_all_servers(self):
        """读取配置，通过 stdio 或 SSE 连接所有 MCP Server 并初始化"""
        pass

    async def fetch_all_tools(self) -> list:
        """调用每个连接的 tools/list 接口，汇总所有可用的 MCP 工具"""
        all_tools = []
        for client in self.active_clients.values():
            tools = await client.list_tools()
            all_tools.extend(tools)
        return all_tools

    async def execute_tool(self, tool_name: str, arguments: dict):
        """根据工具名路由到对应的 MCP Server 并执行"""
        pass
```

#### 3. `app/mcp_client/adapter.py` (工具 Schema 转换)

将 MCP 协议返回的通用 JSON Schema 转换为当前大模型（如 Gemini / Claude）接受的结构：

```python
def convert_mcp_to_llm_tool(mcp_tool) -> dict:
    """将 MCP 工具定义转换为 OpenAI/Gemini 认可的 Function Declaration 格式"""
    return {
        "name": mcp_tool.name,
        "description": mcp_tool.description,
        "parameters": mcp_tool.inputSchema
    }
```

#### 4. `app/agent/core.py` (Agent 思考与执行主闭环)

这里是真正的 AI Agent 调度中枢：

```python
class AIAgentCore:
    def __init__(self, mcp_manager: MCPClientManager, llm_provider):
        self.mcp = mcp_manager
        self.llm = llm_provider

    async def run(self, user_prompt: str):
        # 1. 获取所有 MCP 工具并转换格式
        mcp_tools = await self.mcp.fetch_all_tools()
        llm_tools = [convert_mcp_to_llm_tool(t) for t in mcp_tools]
        
        messages = [{"role": "user", "content": user_prompt}]
        
        # 2. 进入 ReAct 闭环
        while True:
            # 带着工具定义请求 LLM
            response = await self.llm.generate(messages=messages, tools=llm_tools)
            
            # 如果 LLM 决定直接输出文字，结束闭环
            if not response.tool_calls:
                return response.content
            
            # 3. 解析 LLM 的 Tool Call 意图并交给 MCP 执行
            for tool_call in response.tool_calls:
                # 【安全检查】如果属于高危动作，挂起等待用户确认
                if is_high_risk(tool_call.name):
                    await request_human_approval(tool_call)

                # 通过 MCP Manager 执行工具
                result = await self.mcp.execute_tool(tool_call.name, tool_call.args)
                
                # 将 MCP 结果填回上下文，供下一轮思考使用
                messages.append({"role": "tool", "name": tool_call.name, "content": str(result)})
```

### 

**怎么优雅地用 `MCP Client SDK` 挂载各种 MCP 工具。**

**怎么把工具描述精准地喂给 LLM。**

**怎么把控 Agent 调工具时的安全边界与异常处理。**