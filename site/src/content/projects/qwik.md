---
name: Qwik
tagline: 可恢复性框架，追求极致首屏的下一代前端
category: 前端框架
language: TypeScript
born: 2022
era: AI原生
stars: 21k+
depth: seed
repo: https://github.com/QwikDev/qwik
website: https://qwik.dev
tags: [前端, 可恢复性, 首屏, 新范式]
updated: 2026-05-12
---

## 一句话定位

Qwik 是由 Angular 之父 Misko Hevery 创造的前端框架，提出独创的"可恢复性（Resumability）"概念，让应用在服务端渲染后无需在客户端重新执行（hydration），实现无论应用多大都近乎瞬时的首屏交互。

## 诞生背景

2022 年发布。现代 SSR 框架都有 hydration 开销——服务端渲染 HTML 后，客户端还要重新下载并执行 JS 来"激活"页面，应用越大越慢。Qwik 的洞察：能不能让客户端直接"恢复"服务端的状态，跳过重新执行？

## 核心架构

- **可恢复性（Resumability）**：序列化服务端状态到 HTML，客户端"恢复"而非"重放"
- **细粒度懒加载**：JS 按需、按交互延迟加载（可延迟到用户点击才加载对应代码）
- **无 hydration**：跳过传统 SSR 的整页 hydration 开销
- **JSX 语法**：开发体验贴近 React
- **QwikCity**：配套元框架

## 关键设计决策

1. **可恢复性替代 hydration**：把状态序列化进 HTML，客户端恢复即可交互，首屏成本与应用大小解耦。
2. **极致懒加载**：JS 拆到极细粒度、按交互加载，初始只下载几乎为零的 JS。
3. **性能优先的激进设计**：为极致首屏体验，重新设计了整个执行模型。

## 生态位置

"后 hydration 时代"最激进的探索者。与 Svelte（编译时）、SolidJS（细粒度响应式）、Astro（群岛/默认零 JS）同属"如何减少前端 JS 负担"的新范式浪潮。仍较新，但理念影响力大。

## 我的评价

Qwik 把"减少前端 JS 开销"这场运动推到了极致——它不满足于优化 hydration，而是用"可恢复性"从根本上取消了 hydration。它和 Svelte、Solid、Astro 一起，代表了前端对"我们是不是发送和执行了太多 JS"的集体深刻反思。它是否成为主流尚待观察，但这种"敢于重新质疑最底层假设"的探索精神，正是技术进步的源头。
