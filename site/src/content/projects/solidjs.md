---
name: SolidJS
tagline: 精细响应式的前端框架，无虚拟 DOM 的极致性能
category: 前端框架
language: TypeScript
born: 2020
era: 云原生
stars: 33k+
depth: seed
repo: https://github.com/solidjs/solid
website: https://www.solidjs.com
tags: [前端, 响应式, 无虚拟DOM, 细粒度]
updated: 2026-05-30
---

## 一句话定位

SolidJS 是一个高性能前端框架，语法酷似 React（JSX + Hooks 风格），但底层采用"细粒度响应式"而非虚拟 DOM——组件只运行一次，之后精确更新变化的 DOM 节点，兼得 React 的开发体验与顶级性能。

## 诞生背景

2020 年由 Ryan Carniato 发布。React 每次状态变化都重新执行组件函数并 diff 虚拟 DOM，有性能开销。Solid 借鉴 Knockout/MobX 的响应式思想：用信号（Signal）精确追踪依赖，只更新真正变化的部分。

## 核心架构

- **信号（Signal）**：细粒度响应式原语，精确追踪读写依赖
- **组件只运行一次**：组件函数仅初始化时执行，之后靠响应式更新
- **无虚拟 DOM**：编译 + 响应式直接更新真实 DOM 节点
- **JSX + Hooks 风格**：开发体验贴近 React，迁移成本低
- **SolidStart**：官方元框架

## 关键设计决策

1. **细粒度响应式**：用 Signal 精确追踪依赖，只更新变化节点，避免虚拟 DOM diff 的开销。
2. **组件运行一次**：颠覆 React"每次渲染重跑函数"的模型，性能与心智更清晰。
3. **贴近 React 语法**：降低 React 开发者的迁移门槛。

## 生态位置

高性能响应式框架的代表。与 Svelte（编译时）、Qwik（可恢复性）同属"后虚拟 DOM"新范式。语法像 React 但性能更优。竞品：React（生态大）、Vue（响应式相近）。

## 我的评价

SolidJS 是"响应式复兴"的旗手——它证明了 Vue 早已采用的"细粒度响应式"，配上 React 的 JSX 语法，能兼得体验与性能。它和 Svelte、Qwik 共同宣告：虚拟 DOM 并非前端的唯一答案。前端框架正在经历一场"如何以最小代价更新 UI"的深层反思，Solid 给出了极具说服力的一种答案。
