---
name: Flowise
tagline: 可视化搭建 LLM 应用与 AI 智能体
category: AI/ML
language: TypeScript
born: 2023
era: AI原生
stars: 33k+
depth: seed
repo: https://github.com/FlowiseAI/Flowise
website: https://flowiseai.com
tags: [AI Agent, 低代码, 可视化, LLM]
updated: 2026-04-08
---

## 一句话定位

Flowise 是开源的可视化 LLM 应用构建工具，用拖拽节点、连线的方式编排大模型、提示词、知识库、工具和智能体，无需写代码就能搭建 RAG 问答、聊天机器人、AI Agent 等应用，是 LLM 应用开发的低代码代表。

## 诞生背景

2023 年随 LLM 应用热潮出现。用 LangChain 等代码框架搭 LLM 应用需要编程能力，门槛不低。Flowise 把这些能力做成可视化节点，让产品经理、业务人员也能拖拽搭建 AI 应用，大幅降低了 LLM 应用的开发门槛。

## 核心架构

- **可视化流编排**：拖拽 LLM、Prompt、检索、工具等节点连成流
- **基于 LangChain/LlamaIndex**：底层复用成熟的 LLM 编排框架
- **RAG 支持**：可视化接入向量库，搭检索增强问答
- **Agent 与工具**：拖拽式构建能调用工具的智能体
- **API 化部署**：搭好的流可一键暴露为 API 嵌入应用

## 关键设计决策

1. **可视化降门槛**：把 LLM 编排从写代码变成拖拽连线，让非程序员也能造 AI 应用。
2. **站在成熟框架上**：底层用 LangChain 等，不重造编排逻辑，专注可视化层。
3. **可嵌入**：搭好即可 API 化，方便集成进现有产品。

## 生态位置

可视化 LLM 应用构建的代表。与 Dify（更完整的 LLMOps 平台，中国团队）、Langflow（同类可视化）竞争。与 LangGraph（代码编排、可控性强）形成"可视化 vs 代码"的分工。适合快速原型、业务人员搭建、中小型 AI 应用。

## 我的评价

Flowise 与 LangGraph 恰好是 AI 应用开发的两极——LangGraph 面向工程师，用代码换取极致可控；Flowise 面向更广人群，用可视化换取低门槛。它延续了 Node-RED、Excalidraw 一脉的"降低创造门槛"精神，只不过对象换成了最火的 LLM。它印证了每次技术浪潮的共同规律：**先有面向专家的代码框架，随后必然出现可视化/低代码工具，把这份能力交给更多人**——这是技术普及的必经之路。
