---
name: React
tagline: Facebook 的 UI 库，掀起前端组件化革命
category: 前端框架
foundation: Meta（独立）
language: JavaScript
born: 2013
era: 云计算
stars: 230k+
depth: sprout
repo: https://github.com/facebook/react
website: https://react.dev
tags: [前端, 组件化, 虚拟DOM]
updated: 2026-07-16
---

## 一句话定位

React 是 Facebook 开源的用于构建用户界面的 JavaScript 库，以「组件化」「虚拟 DOM」和「单向数据流」重塑了前端开发范式，是当今最主流的前端技术。

## 诞生背景

2013 年开源。Facebook 面对复杂 UI 状态管理的困境，提出了一个激进想法：用「声明式 + 组件」的方式描述 UI，让数据变化时自动重新渲染，把开发者从手动 DOM 操作中解放出来。

## 核心架构

- **组件（Component）**：UI 的基本单元，可组合
- **虚拟 DOM**：内存中的 UI 描述，diff 后最小化真实 DOM 操作
- **JSX**：在 JS 中写类 HTML 语法
- **Hooks**：函数组件中管理状态与副作用（2019 引入，革命性）
- **Fiber**：可中断的协调引擎，支撑并发渲染

## 关键设计决策

1. **声明式 UI**：`UI = f(state)`，你描述"应该是什么样"，React 负责如何更新。
2. **单向数据流**：数据从父到子单向流动，可预测、易调试。
3. **Hooks 范式**：用函数 + Hooks 替代 class，重塑了逻辑复用的方式。

## 生态位置

前端框架之王，生态最庞大。元框架 Next.js、Remix 基于它；React Native 将其带到移动端。竞品：Vue、Angular、Svelte。

## 我的评价

React 最深远的贡献是把「声明式」思想带入主流前端——`UI = f(state)` 这个心智模型，彻底改变了一代开发者思考界面的方式。它影响力甚至超出前端，Flutter、SwiftUI 都可见其思想的影子。理解 React，本质是理解「声明式编程」这一范式的威力。
