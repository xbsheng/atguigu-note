# 尚硅谷 LangChain 1.2 教程（2026 版）

> LangChain 学习一套通：从入门到 Agent / 中间件 / 记忆 / RAG 综合项目实战  
> 讲师：尚硅谷 · 宋红康

## 在线视频（推荐）

**无需百度网盘会员，B 站直接在线观看：**

🎬 [2026 版 LangChain 教程 · Agent 智能体 · RAG 项目实战](https://www.bilibili.com/video/BV1rv7A6oEeP)

---

## 仓库结构

```text
langchain/
├── README.md                 # 本说明（含分 P 在线目录）
├── 课件/                     # Markdown 课件（可在线阅读）
│   ├── 01-LangChain概述.md
│   ├── 02-模型的创建与调用.md
│   ├── ...
│   ├── 10-RAG.md
│   └── assets/               # 章节共用图片资源
└── 代码/
    └── langchain1.2_tutorial/  # Jupyter Notebook 实战代码
        ├── chapter02_model/
        ├── chapter03_langsmith/
        ├── ...
        ├── chapter10-RAG/
        ├── requirements.txt
        └── requirements_full.txt
```

---

## 学习路线 & 资料对照

| 章节                            | 课件                                                            | 代码                                                                                     | 视频分 P    |
| ------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| 第 01 章 · LangChain 概述       | [课件](./课件/01-LangChain概述.md)             | [chapter01_summary](./代码/langchain1.2_tutorial/chapter01_summary/)                     | P1 – P10    |
| 第 02 章 · 模型的创建与调用     | [课件](./课件/02-模型的创建与调用.md)       | [chapter02_model](./代码/langchain1.2_tutorial/chapter02_model/)                         | P11 – P22   |
| 第 03 章 · LangSmith 的使用     | [课件](./课件/03-LangSmith的使用.md)         | [chapter03_langsmith](./代码/langchain1.2_tutorial/chapter03_langsmith/)                 | P23 – P24   |
| 第 04 章 · Message 与提示词模板 | [课件](./课件/04-Message与提示词模板.md) | [chapter04_messages_prompt](./代码/langchain1.2_tutorial/chapter04_messages_prompt/)     | P25 – P32   |
| 第 05 章 · Tools                | [课件](./课件/05-Tools.md)                             | [chapter05-tools](./代码/langchain1.2_tutorial/chapter05-tools/)                         | P33 – P40   |
| 第 06 章 · 结构化输出           | [课件](./课件/06-结构化输出.md)                   | [chapter06-structured_output](./代码/langchain1.2_tutorial/chapter06-structured_output/) | P41 – P50   |
| 第 07 章 · 智能体               | [课件](./课件/07-智能体.md)                           | [chapter07-Agents](./代码/langchain1.2_tutorial/chapter07-Agents/)                       | P51 – P63   |
| 第 08 章 · 中间件               | [课件](./课件/08-中间件.md)                           | [chapter08-Middleware](./代码/langchain1.2_tutorial/chapter08-Middleware/)               | P64 – P85   |
| 第 09 章 · 上下文与记忆         | [课件](./课件/09-上下文与记忆.md)               | [chapter09-memory](./代码/langchain1.2_tutorial/chapter09-memory/)                       | P86 – P101  |
| 第 10 章 · RAG                  | [课件](./课件/10-RAG.md)                                 | [chapter10-RAG](./代码/langchain1.2_tutorial/chapter10-RAG/)                             | P102 – P120 |
| 第 11 章 · MCP 与 Skills（补充） | [课件](./课件/11-MCP与Skills.md)                         | —                                                                                        | —           |

---

## 完整视频目录（点击即可跳转对应分 P）

> 链接格式：`https://www.bilibili.com/video/BV1rv7A6oEeP?p=N`，打开后直接定位到第 N 集。

### 第 01 章 · LangChain 概述（P1 – P10）

| P   | 标题                               | 时长  | 在线观看                                                   |
| --- | ---------------------------------- | ----- | ---------------------------------------------------------- |
| 1   | 01-课程介绍                        | 04:09 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=1)  |
| 2   | 02-为什么需要 LangChain            | 10:50 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=2)  |
| 3   | 03-大模型相关岗位介绍              | 04:17 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=3)  |
| 4   | 04-LangChain 是什么                | 07:15 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=4)  |
| 5   | 05-LangChain 的主要模块和 API 文档 | 04:17 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=5)  |
| 6   | 06-LangChain 家族四大支柱          | 04:43 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=6)  |
| 7   | 07-conda 的安装及虚拟环境的配置    | 16:51 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=7)  |
| 8   | 08-大模型应用场景 1：Agent 开发    | 09:48 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=8)  |
| 9   | 09-大模型的应用场景 2：Agent 开发  | 05:55 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=9)  |
| 10  | 10-大模型开发的 4 个递进场景       | 04:04 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=10) |

### 第 02 章 · 模型的创建与调用（P11 – P22）

| P   | 标题                                                 | 时长  | 在线观看                                                   |
| --- | ---------------------------------------------------- | ----- | ---------------------------------------------------------- |
| 11  | 11-模型调用前的准备工作                              | 11:05 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=11) |
| 12  | 12-调用 DeepSeek 官网的 DeepSeek 模型                | 16:59 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=12) |
| 13  | 13-调用智谱和阿里云百炼平台的大模型                  | 11:00 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=13) |
| 14  | 14-ChatOpenAI 兼容用法                               | 08:36 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=14) |
| 15  | 15-使用 OpenRouter 和 CloseAI 中转平台调用模型       | 18:14 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=15) |
| 16  | 16-LangChain 1.x 中 init_chat_model 方式             | 17:10 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=16) |
| 17  | 17-模型初始化常用的参数                              | 12:33 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=17) |
| 18  | 18-Ollama 的安装与本地模型的调用                     | 13:56 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=18) |
| 19  | 19-测试 invoke 传递三种不同的参数类型                | 22:08 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=19) |
| 20  | 20-invoke 的返回值的详细说明                         | 08:42 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=20) |
| 21  | 21-流式调用、批量调用与异步调用                      | 18:41 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=21) |
| 22  | 22-profile 属性 / model_kwargs / extra_body / config | 26:51 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=22) |

### 第 03 章 · LangSmith 的使用（P23 – P24）

| P   | 标题                          | 时长  | 在线观看                                                   |
| --- | ----------------------------- | ----- | ---------------------------------------------------------- |
| 23  | 23-LangSmith 的介绍与基本使用 | 08:48 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=23) |
| 24  | 24-LangSmith 的主要功能介绍   | 03:31 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=24) |

### 第 04 章 · Message 与提示词模板（P25 – P32）

| P   | 标题                                                 | 时长  | 在线观看                                                   |
| --- | ---------------------------------------------------- | ----- | ---------------------------------------------------------- |
| 25  | 25-认识消息与消息的两种格式                          | 11:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=25) |
| 26  | 26-4 种消息对象中字段的说明                          | 13:29 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=26) |
| 27  | 27-对话历史的管理和优化                              | 11:36 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=27) |
| 28  | 28-案例：多轮对话聊天机器人                          | 11:46 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=28) |
| 29  | 29-content 和 content_blocks 的使用                  | 13:47 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=29) |
| 30  | 30-ChatPromptTemplate 的两种实例化方式和三种调用方式 | 19:16 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=30) |
| 31  | 31-ChatPromptTemplate 初始化的 6 种参数类型          | 14:20 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=31) |
| 32  | 32-部分变量预填充 / 消息占位符等的使用               | 16:21 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=32) |

### 第 05 章 · Tools（P33 – P40）

| P   | 标题                                              | 时长  | 在线观看                                                   |
| --- | ------------------------------------------------- | ----- | ---------------------------------------------------------- |
| 33  | 33-工具的调用方式与整体执行流程分析               | 19:56 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=33) |
| 34  | 34-不使用 @tool 方式定义工具                      | 19:12 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=34) |
| 35  | 35-使用 @tool 装饰器定义工具：description 和 name | 12:26 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=35) |
| 36  | 36-使用 @tool 装饰器定义工具：args_schema         | 11:07 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=36) |
| 37  | 37-案例 1 和 2：使用 args_schema 和 docstring     | 19:13 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=37) |
| 38  | 38-案例 3-4：多工具的调用                         | 10:09 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=38) |
| 39  | 39-tool_choice 参数的使用                         | 08:47 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=39) |
| 40  | 40-工具使用的实践经验总结                         | 04:52 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=40) |

### 第 06 章 · 结构化输出（P41 – P50）

| P   | 标题                                             | 时长  | 在线观看                                                   |
| --- | ------------------------------------------------ | ----- | ---------------------------------------------------------- |
| 41  | 41-结构化输出的理解                              | 04:20 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=41) |
| 42  | 42-Pydantic 的基本使用                           | 11:11 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=42) |
| 43  | 43-Pydantic 高级特性：可选字段、默认值、枚举类型 | 15:50 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=43) |
| 44  | 44-Pydantic 高级特性：列表提取、嵌套、限制条件   | 20:52 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=44) |
| 45  | 45-Pydantic 模式的工作流程图解                   | 03:04 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=45) |
| 46  | 46-TypedDict 格式的使用                          | 13:55 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=46) |
| 47  | 47-JSON Schema 格式的使用                        | 06:10 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=47) |
| 48  | 48-@dataclass 格式的使用                         | 02:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=48) |
| 49  | 49-四种不同模式的类型校验情况                    | 08:13 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=49) |
| 50  | 50-两种获取结构化结果的方式                      | 09:57 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=50) |

### 第 07 章 · 智能体（P51 – P63）

| P   | 标题                                                | 时长  | 在线观看                                                   |
| --- | --------------------------------------------------- | ----- | ---------------------------------------------------------- |
| 51  | 51-Agent 的概述                                     | 07:41 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=51) |
| 52  | 52-Agent 实例化中模型的两种传入方式                 | 07:32 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=52) |
| 53  | 53-Agent 通过 invoke() 方式调用                     | 07:14 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=53) |
| 54  | 54-Agent 绑定工具并调用                             | 18:14 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=54) |
| 55  | 55-工具调用流程分析 / 常见问题分析                  | 11:42 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=55) |
| 56  | 56-设置 agent 的 name 和 system_prompt              | 11:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=56) |
| 57  | 57-agent 结构化输出的 4 种策略                      | 14:42 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=57) |
| 58  | 58-ToolStrategy 的 schema 设置结构化输出 - Pydantic | 15:43 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=58) |
| 59  | 59-ToolStrategy 的 schema 设置结构化输出 - 其它方式 | 12:13 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=59) |
| 60  | 60-ToolStrategy 的 tool_message_content 参数使用    | 03:38 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=60) |
| 61  | 61-Agent 的高级用法：错误处理机制                   | 17:42 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=61) |
| 62  | 62-设置 Agent 的流式输出策略                        | 19:22 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=62) |
| 63  | 63-Agent 的实战：多功能智能助手                     | 16:55 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=63) |

### 第 08 章 · 中间件（P64 – P85）

| P   | 标题                                           | 时长  | 在线观看                                                   |
| --- | ---------------------------------------------- | ----- | ---------------------------------------------------------- |
| 64  | 64-为什么需要中间件 / 中间件的分类             | 16:06 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=64) |
| 65  | 65-SummarizationMiddleware 中间件的使用        | 15:14 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=65) |
| 66  | 66-HumanInTheLoopMiddleware 中间件的使用       | 24:12 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=66) |
| 67  | 67-PIIMiddleware 中间件的使用                  | 13:58 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=67) |
| 68  | 68-TodoListMiddleware 中间件的使用             | 14:49 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=68) |
| 69  | 69-ModelCallLimitMiddleware 中间件的使用       | 11:02 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=69) |
| 70  | 70-ToolCallLimitMiddleware 中间件的使用        | 06:34 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=70) |
| 71  | 71-ModelFallbackMiddleware 中间件的使用        | 02:05 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=71) |
| 72  | 72-LLMToolSelectorMiddleware 中间件的使用      | 05:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=72) |
| 73  | 73-ToolRetryMiddleware 中间件的使用            | 08:50 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=73) |
| 74  | 74-ModelRetryMiddleware 中间件的使用           | 02:33 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=74) |
| 75  | 75-LLMToolEmulator 中间件的使用                | 01:51 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=75) |
| 76  | 76-ContextEditingMiddleware 中间件的使用       | 05:45 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=76) |
| 77  | 77-FilesystemFileSearchMiddleware 中间件的使用 | 02:50 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=77) |
| 78  | 78-多个中间件组合及执行顺序                    | 03:18 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=78) |
| 79  | 79-hook 函数的理解                             | 05:00 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=79) |
| 80  | 80-基于装饰器定义 Node-style 的钩子函数        | 08:35 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=80) |
| 81  | 81-基于类定义 Node-style 的钩子函数            | 07:48 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=81) |
| 82  | 82-装饰器参数 can_jump_to 的使用               | 12:47 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=82) |
| 83  | 83-wrap_model_call 的实现和使用场景            | 13:09 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=83) |
| 84  | 84-wrap_tool_call 的实现和使用场景             | 10:40 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=84) |
| 85  | 85-装饰器和类方式的选择 / hook 函数执行顺序    | 09:03 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=85) |

### 第 09 章 · 上下文与记忆（P86 – P101）

| P   | 标题                                           | 时长  | 在线观看                                                    |
| --- | ---------------------------------------------- | ----- | ----------------------------------------------------------- |
| 86  | 86-记忆的概念和记忆的分类                      | 14:46 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=86)  |
| 87  | 87-短期记忆之基于内存的持久化器的实现          | 13:48 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=87)  |
| 88  | 88-基于内存存储的工作原理和常见问题            | 06:52 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=88)  |
| 89  | 89-腾讯云部署 Linux 服务器                     | 07:16 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=89)  |
| 90  | 90-PostgreSQL 数据库的安装                     | 04:51 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=90)  |
| 91  | 91-远程服务器连接额外操作                      | 06:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=91)  |
| 92  | 92-短期记忆之 PostgreSQL 实现持久化存储        | 07:56 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=92)  |
| 93  | 93-对比两种方式的不同                          | 07:07 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=93)  |
| 94  | 94-消息裁剪的治理策略                          | 12:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=94)  |
| 95  | 95-消息删除、摘要的治理策略                    | 13:33 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=95)  |
| 96  | 96-长期记忆的介绍和存储架构                    | 07:52 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=96)  |
| 97  | 97-put() 和 get() 操作的演示                   | 11:00 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=97)  |
| 98  | 98-search() 操作的演示                         | 13:47 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=98)  |
| 99  | 99-在工具中访问长期记忆（基于 InMemoryStore）  | 14:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=99)  |
| 100 | 100-在工具中访问长期记忆（基于 PostgresStore） | 03:50 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=100) |
| 101 | 101-在中间件中访问长期记忆                     | 05:06 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=101) |

### 第 10 章 · RAG（P102 – P120）

| P   | 标题                                                          | 时长  | 在线观看                                                    |
| --- | ------------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| 102 | 102-RAG 模块的必要性                                          | 09:01 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=102) |
| 103 | 103-RAG 工作流程和环境准备                                    | 08:52 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=103) |
| 104 | 104-TextLoader 和 CSVLoader 的使用                            | 06:20 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=104) |
| 105 | 105-JSONLoader 加载 JSON 文件                                 | 09:40 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=105) |
| 106 | 106-PyPDFLoader 和 MinerU 加载 pdf 文件                       | 06:16 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=106) |
| 107 | 107-其它格式文件的加载器                                      | 06:02 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=107) |
| 108 | 108-切分策略及 TextSplitter 中的三个核心方法                  | 13:34 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=108) |
| 109 | 109-CharacterTextSplitter 的使用                              | 07:19 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=109) |
| 110 | 110-RecursiveCharacterTextSplitter 的使用                     | 10:57 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=110) |
| 111 | 111-其它多种 TextSplitter 的使用演示                          | 08:34 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=111) |
| 112 | 112-嵌入模型的初始化及文档向量化举例                          | 13:02 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=112) |
| 113 | 113-向量数据库介绍 / docker 的安装和设置                      | 08:31 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=113) |
| 114 | 114-Milvus 的安装和数据模型说明                               | 06:49 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=114) |
| 115 | 115-Milvus 数据库的 DDL 操作                                  | 09:57 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=115) |
| 116 | 116-Milvus 数据库的 DML 和 DQL 操作                           | 17:42 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=116) |
| 117 | 117-项目 Assistant 客服知识库之全局配置 / 初始化 Milvus       | 09:05 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=117) |
| 118 | 118-项目 Assistant 客服知识库之文档切分 / 向量化并写入 Milvus | 17:28 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=118) |
| 119 | 119-项目 Assistant 客服知识库之初始化 Agent / 检索函数        | 05:27 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=119) |
| 120 | 120-项目 Assistant 客服知识库之生产与回答生成                 | 09:51 | [▶ 观看](https://www.bilibili.com/video/BV1rv7A6oEeP?p=120) |

---

## 快速开始（本地跑代码）

```bash
cd langchain/代码/langchain1.2_tutorial

# 建议使用 conda / venv 创建独立环境后安装依赖
pip install -r requirements.txt
# 或完整依赖：
# pip install -r requirements_full.txt

# 用 Jupyter / VS Code / Cursor 打开对应章节的 .ipynb 即可跟练
```

---

## 使用建议

1. **看视频**：点上方 B 站链接在线观看，按分 P 跳转，不需要下载，也不需要百度网盘会员。
2. **看课件**：打开 `课件/` 下对应章节的 Markdown，配合视频笔记复习。
3. **练代码**：打开 `代码/langchain1.2_tutorial/` 下对应 `chapter*` 目录中的 Notebook 动手实践。
4. **做项目**：第 10 章 RAG + Assistant 客服知识库可作为综合实战收尾。

---

## 版权说明

课程版权归 [尚硅谷](http://www.atguigu.com/) 所有。本仓库整理课件与代码目录，仅供学习交流使用。
