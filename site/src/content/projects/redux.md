---
name: Redux
tagline: 可预测的状态容器，前端状态管理的里程碑
category: 状态管理
language: TypeScript
born: 2015
era: 云计算
stars: 61k+
depth: seed
repo: https://github.com/reduxjs/redux
website: https://redux.js.org
tags: [状态管理, 单向数据流, Flux, React]
updated: 2026-05-24
---

## 一句话定位

Redux 是 JavaScript 应用的可预测状态容器，用"单一状态树 + 纯函数 reducer + 单向数据流"管理复杂应用的状态，一度是 React 生态的标配状态管理方案，深刻影响了前端状态管理的思维方式。

## 诞生背景

2015 年由 Dan Abramov 创建，融合了 Flux 架构与函数式编程思想。当时 React 应用的状态散落在各组件，数据流混乱难以调试。Redux 提出把状态集中到单一 store，所有变更通过可追溯的 action 进行。

## 核心架构

- **单一 Store**：整个应用状态存在一棵状态树里
- **Action**：描述"发生了什么"的普通对象
- **Reducer**：纯函数 `(state, action) => newState`，不可变更新
- **单向数据流**：dispatch(action) → reducer → 新 state → 更新视图
- **时间旅行调试**：状态可回放，因为变更完全可追溯

## 关键设计决策

1. **状态集中 + 单向流**：把分散的状态收敛为单一可预测的数据流，让复杂应用可调试。
2. **纯函数 reducer**：用不可变更新和纯函数，使状态变化可预测、可测试、可回放。
3. **约束换可维护性**：刻意的样板代码约束，换取大型应用的可控性（后来 Redux Toolkit 简化了样板）。

## 生态位置

前端状态管理的里程碑。因样板繁琐，在中小应用中逐渐被更轻量的方案取代：Zustand、Jotai（React）、Pinia（Vue）、以及 React 内置的 Context/useReducer。Redux Toolkit 是其现代化简化版。

## 我的评价

Redux 的历史意义超越了它本身——它把"单向数据流""不可变状态""时间旅行调试"等思想普及给了整整一代前端开发者。即便如今它因繁琐而退居二线，这些**思想已内化为前端的通用认知**。它诠释了：一个工具最大的遗产，有时不是代码，而是它教会整个社区的思维方式（正如 jQuery 之于 DOM）。
