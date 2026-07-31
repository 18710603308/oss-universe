---
name: AutoGen
tagline: 微软的多智能体对话协作框架
category: AI/ML
foundation: Microsoft
language: Python
born: 2023
era: AI原生
stars: 33k+
depth: seed
repo: https://github.com/microsoft/autogen
website: https://microsoft.github.io/autogen
tags: [AI Agent, 多智能体, 对话协作, LLM]
updated: 2026-04-04
---

## 一句话定位

AutoGen 是微软开源的多智能体框架，核心理念是"通过多个可对话的 Agent 相互交流来完成任务"——不同角色的 Agent（如助手、评审、执行者、用户代理）通过对话协商、审阅、迭代，把复杂问题在"AI 之间的讨论"中逐步解决。

## 诞生背景

2023 年由微软研究院发布。研究发现，让多个 LLM Agent 以对话形式协作（一个提方案、一个挑毛病、一个执行），往往比单个 Agent 独自推理效果更好。AutoGen 把这种"可对话智能体"模式框架化。

## 核心架构

- **可对话 Agent（ConversableAgent）**：能收发消息、参与多轮对话
- **多 Agent 会话**：多个 Agent 组成群聊，协商解决问题
- **人类可介入**：UserProxyAgent 可代表人类参与或审批
- **代码执行**：Agent 可生成并执行代码，看结果再迭代
- **可定制协作模式**：两两对话、群聊、层级等灵活编排

## 关键设计决策

1. **对话即协作**：把 Agent 协作建模为"多轮对话"，用讨论/审阅/反馈提升结果质量。
2. **人在环中**：内建人类代理，让人可在关键处介入，兼顾自动与可控。
3. **代码执行闭环**：Agent 能写代码、跑代码、看结果、再改进，形成自我纠错循环。

## 生态位置

多智能体框架的代表（微软出品，学术影响力大）。与 CrewAI（角色分工、易用）、LangGraph（图编排、可控）路线不同，AutoGen 更强调"对话式协作"和研究灵活性。三者共同构成 AI Agent 多体协作的主流探索。

## 我的评价

AutoGen 的核心洞察颇具启发——**让多个 AI"互相讨论"，常比单个 AI"独自苦想"更可靠**。一个 Agent 提方案、另一个挑错、再执行验证，这种"对话式相互纠错"模拟了人类协作中最有价值的部分。它和 CrewAI 从不同角度（对话 vs 角色分工）探索同一个前沿问题：如何让 AI 像团队一样协作。这个方向被普遍看好，是通往更强 AI 应用的重要路径。
