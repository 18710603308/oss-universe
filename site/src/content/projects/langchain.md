---
name: LangChain
tagline: LLM 应用开发框架，串联模型、数据与工具
category: AI/ML
language: Python
born: 2022
stars: 95k+
depth: seed
repo: https://github.com/langchain-ai/langchain
website: https://www.langchain.com
tags: [LLM, Agent, RAG, 应用框架]
updated: 2026-07-20
---

## 一句话定位

LangChain 是构建 LLM 应用的开发框架，通过「链（Chain）」和「代理（Agent）」抽象，把大模型与外部数据、工具、记忆连接起来，简化 RAG、Agent 等复杂应用的开发。

## 诞生背景

2022 年底 ChatGPT 引爆 LLM 应用热潮。开发者发现单纯调用 API 不够，需要检索知识库（RAG）、调用工具、维护对话记忆。LangChain 应运而生，成为最早的 LLM 应用「胶水层」。

## 核心架构

- **Model I/O**：统一封装不同 LLM 提供商的接口
- **Chain**：把多个调用串成流水线
- **Agent**：让 LLM 自主决定调用哪些工具
- **Memory**：维护对话状态
- **Retrieval**：接入向量数据库实现 RAG

## 关键设计决策

1. **可组合的抽象**：把 LLM 应用拆成可拼装的模块（提示、模型、解析器、检索器）。
2. **供应商中立**：一套代码可切换 OpenAI、Anthropic、本地模型。
3. **LCEL 表达式语言**：用管道操作符 `|` 声明式地组合组件。

## 生态位置

LLM 应用开发的早期标准框架。竞品/互补：LlamaIndex（侧重检索）、CrewAI（多 Agent）、Dify（低代码平台）。

## 我的评价

LangChain 抓住了 LLM 应用「编排层」的空白，但也因抽象过多、迭代过快而饱受争议。它的价值与争议都源于同一点：在一个尚未定型的领域抢先建立抽象。这提醒我——早期框架的抽象往往是"临时脚手架"，理解其解决的问题比迷信其 API 更重要。
