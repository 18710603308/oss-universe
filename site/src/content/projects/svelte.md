---
name: Svelte
tagline: 编译时前端框架，把框架"消失"在构建阶段
category: 前端框架
language: TypeScript
born: 2016
era: 云计算
stars: 80k+
depth: seed
repo: https://github.com/sveltejs/svelte
website: https://svelte.dev
tags: [前端, 编译时, 无虚拟DOM]
updated: 2026-07-04
---

## 一句话定位

Svelte 是 Rich Harris 创造的前端框架，最大特点是「编译时框架」——它在构建阶段把组件编译成高效的原生 JS，运行时几乎没有框架开销，也没有虚拟 DOM。

## 诞生背景

2016 年发布。React/Vue 的虚拟 DOM 在运行时做 diff 有性能和体积成本。Rich Harris 提出一个激进想法：既然编译期就知道数据如何变化，为什么不在编译时生成精确的更新代码，把框架"编译掉"？

## 核心架构

- **编译时框架**：`.svelte` 组件被编译为直接操作 DOM 的命令式代码
- **无虚拟 DOM**：编译期确定更新路径，运行时无需 diff
- **响应式赋值**：用简单的赋值语句 `count += 1` 即触发更新
- **SvelteKit**：官方全栈元框架

## 关键设计决策

1. **编译而非运行时**：把工作从运行时转移到编译时，产物体积小、运行快。
2. **更少的样板代码**：响应式基于赋值，无需 useState/ref 等 API，代码简洁。
3. **渐进增强**：适合从小组件到全栈应用。

## 生态位置

编译式前端框架的代表，多次在开发者满意度调查中名列前茅。元框架 SvelteKit。竞品：React/Vue（运行时）、SolidJS/Qwik（同为新范式）。

## 我的评价

Svelte 挑战了一个"理所当然"的前提——框架必须在运行时存在。它把繁重的工作提前到编译期，本质上和 Vite（编译时优化）、Rust（编译期安全）是同一种智慧：**能在编译期做的事，就不要留到运行时**。这种"把成本前移"的思路，是性能优化的一条根本原则。
