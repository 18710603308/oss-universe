---
name: LangGraph
tagline: 可控的 AI 智能体编排框架，用图定义工作流
category: AI/ML
language: Python
born: 2024
era: AI原生
stars: 8k+
depth: seed
repo: https://github.com/langchain-ai/langgraph
website: https://www.langchain.com/langgraph
tags: [AI Agent, 编排, 状态图, LLM]
updated: 2026-04-09
---

## 一句话定位

LangGraph 是 LangChain 团队推出的 AI 智能体编排框架，用"状态图（State Graph）"显式定义 Agent 的工作流——节点是步骤、边是流转、状态在节点间传递，让原本难以控制的自主 Agent 变得可控、可循环、可人工介入，是构建生产级 Agent 的主流选择。

## 诞生背景

2024 年发布。AutoGPT 展示了 Agent 的潜力，但其"完全自主循环"太难控制、易跑偏、难调试，无法用于生产。LangGraph 的洞察：把 Agent 的逻辑显式建模成一张状态图，用图的确定性结构约束 LLM 的不确定性。

## 核心架构

- **状态图（StateGraph）**：把工作流建模为节点 + 边 + 共享状态
- **循环与分支**：支持有环图（Agent 可循环反思），条件路由
- **持久化与检查点**：可保存/恢复状态，支持长时任务
- **Human-in-the-loop**：可在关键节点暂停等人工审核
- **与 LangChain 集成**：复用 LangChain 的工具、模型、记忆

## 关键设计决策

1. **用图约束自主性**：把 Agent 逻辑显式化为状态图，用确定性结构驾驭 LLM 的不确定性。
2. **支持循环 + 人工介入**：既能让 Agent 反思迭代，又能在关键点插入人工审核，兼顾自主与可控。
3. **状态可持久化**：检查点机制让长时、可恢复的 Agent 任务成为可能。

## 生态位置

生产级 AI Agent 编排的主流框架。它是对 AutoGPT"过度自主"的工程化修正。竞品/同类：AutoGen、CrewAI（多智能体）、LlamaIndex Workflows。与 Dify/Flowise（可视化 Agent）形成"代码编排 vs 可视化编排"的分工。

## 我的评价

LangGraph 代表了 AI Agent 从"炫酷 demo"走向"生产可用"的关键一步——它认识到 Agent 落地的核心矛盾是**LLM 的不确定性 vs 生产的可控性需求**，并给出了漂亮的答案：用显式的图结构去约束和引导 LLM。它对 AutoGPT 的"修正"很有代表性：**先驱者证明方向、点燃想象，工程化的后继者则解决"如何真正可靠地用起来"**。这正是技术从爆发到成熟的必经之路。
