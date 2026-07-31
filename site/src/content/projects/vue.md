---
name: Vue.js
tagline: 渐进式 JavaScript 框架，以易用与灵活著称
category: 前端框架
foundation: 独立
language: TypeScript
born: 2014
stars: 210k+
depth: sprout
repo: https://github.com/vuejs/core
website: https://vuejs.org
tags: [前端, 响应式, 尤雨溪]
updated: 2026-07-25
---

## 一句话定位

Vue.js 是尤雨溪创建的渐进式前端框架，融合了 Angular 的模板语法与 React 的组件化思想，以「渐进增强」和低学习曲线赢得了全球尤其是中文社区的广泛采用。

## 诞生背景

2014 年，尤雨溪在 Google 使用 AngularJS 时，希望提取其中他喜欢的部分做一个更轻量的框架。Vue 从个人项目成长为与 React 并列的主流框架，且是少数不依赖大公司的独立开源框架。

## 核心架构

- **响应式系统**：Vue 3 基于 ES6 Proxy 实现依赖追踪与自动更新
- **虚拟 DOM + 编译优化**：模板编译期做静态提升、Patch Flag 等优化
- **组合式 API（Composition API）**：Vue 3 引入，提升逻辑复用与类型推导
- **单文件组件（SFC）**：`.vue` 文件将模板/逻辑/样式聚合

## 关键设计决策

1. **渐进式采用**：可以只用一个 `<script>` 标签引入，也可构建完整 SPA —— 降低入门门槛。
2. **响应式即核心**：数据变更自动驱动视图，开发者无需手动操作 DOM。
3. **编译时优化**：模板是「可分析的」，编译器能做 React（纯运行时）难以做到的优化。

## 生态位置

前端三大框架之一（React/Vue/Angular）。生态：Vue Router、Pinia（状态管理）、Nuxt（元框架）、Vite（同作者的构建工具）。

## 快速上手

```bash
npm create vue@latest
```

## 我的评价

Vue 的成功是「产品思维」的胜利 —— 尤雨溪始终关注开发者体验（DX），在 React 的函数式纯粹与工程复杂度之间找到了平衡点。同时它证明了个人主导的独立开源项目，也能在巨头林立的领域占据一席之地。响应式系统的实现（Vue 3 的 reactivity 模块）是极佳的源码学习对象。
