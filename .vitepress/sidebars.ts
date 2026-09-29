import type { DefaultTheme } from 'vitepress'

export const langchainSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'LangChain 课件',
    items: [
      { text: '01 · LangChain 概述', link: '/langchain/课件/01-LangChain概述' },
      { text: '02 · 模型的创建与调用', link: '/langchain/课件/02-模型的创建与调用' },
      { text: '03 · LangSmith 的使用', link: '/langchain/课件/03-LangSmith的使用' },
      { text: '04 · Message 与提示词模板', link: '/langchain/课件/04-Message与提示词模板' },
      { text: '05 · Tools', link: '/langchain/课件/05-Tools' },
      { text: '06 · 结构化输出', link: '/langchain/课件/06-结构化输出' },
      { text: '07 · 智能体', link: '/langchain/课件/07-智能体' },
      { text: '08 · 中间件', link: '/langchain/课件/08-中间件' },
      { text: '09 · 上下文与记忆', link: '/langchain/课件/09-上下文与记忆' },
      { text: '10 · RAG', link: '/langchain/课件/10-RAG' },
      { text: '11 · MCP 与 Skills', link: '/langchain/课件/11-MCP与Skills' },
    ],
  },
  {
    text: '相关链接',
    items: [
      { text: 'Notebook 在线阅读', link: '/langchain/notebooks' },
      { text: '视频分 P 目录', link: '/langchain/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1rv7A6oEeP' },
    ],
  },
]

export const langgraphSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'LangGraph 课件',
    items: [
      { text: '00 · 环境配置', link: '/langgraph/课件/00-环境配置' },
      { text: '01 · LangGraph 基础入门', link: '/langgraph/课件/01-LangGraph基础入门' },
      { text: '02 · 控制流与节点执行', link: '/langgraph/课件/02-LangGraph控制流与节点执行' },
      { text: '03 · 持久化与记忆管理', link: '/langgraph/课件/03-LangGraph持久化与记忆管理' },
      { text: '04 · 中断与工具与部署', link: '/langgraph/课件/04-LangGraph中断与工具与部署' },
      { text: '05 · 高级特性', link: '/langgraph/课件/05-LangGraph高级特性' },
    ],
  },
  {
    text: '相关链接',
    items: [
      { text: 'Notebook 在线阅读', link: '/langgraph/notebooks' },
      { text: '视频分 P 目录', link: '/langgraph/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1z3NY66EY1' },
    ],
  },
]

export const vibeSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'AI Coding 课件',
    items: [
      { text: '00 · 课程介绍与环境准备', link: '/vibe_coding/课件/00-课程介绍与环境准备' },
      { text: '01 · AI 编程基础理论', link: '/vibe_coding/课件/01-AI编程基础理论' },
      { text: '02 · AI 编程工具生态', link: '/vibe_coding/课件/02-AI编程工具生态' },
      { text: '03 · Claude Code 深度使用', link: '/vibe_coding/课件/03-ClaudeCode深度使用与进阶技巧' },
      { text: '04 · AI 技能系统（Skills）', link: '/vibe_coding/课件/04-AI技能系统Skills' },
      { text: '05 · 完整项目案例实操', link: '/vibe_coding/课件/05-完整项目案例实操' },
      { text: '06 · 项目实战（独立完成）', link: '/vibe_coding/课件/06-项目实战独立完成' },
      { text: '07 · Codex Desktop', link: '/vibe_coding/课件/07-CodexDesktop' },
      { text: '08 · 附录', link: '/vibe_coding/课件/08-附录' },
    ],
  },
  {
    text: '相关链接',
    items: [
      { text: '视频分 P 目录', link: '/vibe_coding/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1RPET6tEp2' },
    ],
  },
]

export const pythonSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Python 课件',
    items: [
      { text: '01 · 必备基础知识', link: '/python/课件/01-必备基础知识' },
      { text: '02 · 初识 Python', link: '/python/课件/02-初识Python' },
      { text: '03 · Python 核心基础', link: '/python/课件/03-Python核心基础' },
      { text: '04 · 流程控制语句', link: '/python/课件/04-流程控制语句' },
      { text: '05 · 函数入门', link: '/python/课件/05-函数入门' },
      { text: '06 · 数据容器', link: '/python/课件/06-数据容器' },
      { text: '07 · 面向对象', link: '/python/课件/07-面向对象' },
      { text: '08 · 函数进阶', link: '/python/课件/08-函数进阶' },
      { text: '09 · 错误与异常', link: '/python/课件/09-错误与异常' },
      { text: '10 · 模块与包', link: '/python/课件/10-模块与包' },
      { text: '11 · 迭代器 vs 生成器', link: '/python/课件/11-迭代器vs生成器' },
      { text: '12 · 文件操作', link: '/python/课件/12-文件操作' },
      { text: '13 · 进程与线程', link: '/python/课件/13-进程与线程' },
      { text: '14 · 协程', link: '/python/课件/14-协程' },
    ],
  },
  {
    text: '相关链接',
    items: [
      { text: '视频分 P 目录', link: '/python/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1tDsgzxECr' },
    ],
  },
]
