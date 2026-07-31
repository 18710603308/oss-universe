---
name: CrewAI
tagline: 面向角色协作的多智能体框架
category: AI/ML
language: Python
born: 2023
era: AI原生
stars: 22k+
depth: seed
repo: https://github.com/crewAIInc/crewAI
website: https://www.crewai.com
tags: [AI Agent, 多智能体, 角色协作, LLM]
updated: 2026-04-04
---

## 一句话定位

CrewAI 是面向"多智能体协作"的框架，把复杂任务交给一支各司其职的 AI 智能体团队（Crew）——每个 Agent 有角色、目标和工具，像真实团队一样分工协作、互相委派，共同完成单个 Agent 难以胜任的任务。

## 诞生背景

2023 年发布。单个 LLM Agent 处理复杂任务时容易顾此失彼。CrewAI 借鉴人类团队协作的思路：与其让一个"全能 Agent"硬扛，不如组建一支"专业分工的 Agent 团队"，每个成员专注自己的角色，通过协作解决复杂问题。

## 核心架构

- **Agent（智能体）**：有角色、目标、背景故事和专属工具
- **Task（任务）**：分配给特定 Agent 的具体工作
- **Crew（团队）**：一组协作的 Agent
- **流程编排**：顺序执行或层级化（有"管理者"Agent 协调）
- **角色扮演提示**：用角色设定引导 LLM 的行为

## 关键设计决策

1. **拟人化分工协作**：模仿真实团队，用"角色 + 分工 + 委派"组织多个 Agent。
2. **角色驱动**：给每个 Agent 明确的角色和目标，聚焦其专长，提升产出质量。
3. **易用优先**：相比底层编排框架，提供更直观的"组队"高层抽象。

## 生态位置

多智能体（Multi-Agent）框架的代表。同类：AutoGen（微软，更偏对话式协作）、LangGraph（更底层的图编排）、MetaGPT（软件公司模拟）。在 AI Agent 从"单体"走向"多体协作"的趋势中，CrewAI 以直观的"组队"心智模型受到欢迎。

## 我的评价

CrewAI 体现了 AI Agent 演进的一个重要方向——**从"单个全能 Agent"到"多个专业 Agent 协作"**。这个思路很符合直觉：正如人类用分工协作解决复杂问题，AI 也可以。它和 AutoGen、MetaGPT 一起探索"AI 团队"这个新范式。它延续了本站反复出现的主题：*模仿人类组织复杂工作的成熟方式（分工、角色、协作），往往是驾驭新技术复杂度的有效路径*。
