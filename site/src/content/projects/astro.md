---
name: Astro
tagline: 内容优先的现代 Web 框架，本站的构建基石
category: 前端框架
language: TypeScript
born: 2021
era: 云原生
stars: 47k+
depth: sprout
repo: https://github.com/withastro/astro
website: https://astro.build
tags: [前端, 内容优先, Islands, SSG]
updated: 2026-06-04
---

## 一句话定位

Astro 是内容优先的现代 Web 框架，以"默认零 JS"和独创的"群岛架构（Islands）"著称，专为内容型网站（博客、文档、营销站）优化首屏性能，也是本学习网站「开源宇宙」的构建框架。

## 诞生背景

2021 年发布。React/Vue 等 SPA 框架在内容型网站上"杀鸡用牛刀"——大量 JS 拖慢首屏，而内容站本质是静态的。Astro 提出：默认输出纯 HTML，只在真正需要交互的局部"群岛"才加载 JS。

## 核心架构

- **群岛架构（Islands）**：页面默认静态 HTML，交互组件是零散的"岛"，各自独立加载
- **默认零 JS**：不需要交互就不发送 JS，首屏极快
- **UI 框架无关**：可混用 React、Vue、Svelte 等组件
- **Content Collections**：类型安全的内容管理（本站用它管理项目卡片）
- **底层用 Vite**：享受极速开发体验

## 关键设计决策

1. **群岛架构**：把"整页 hydration"改为"局部 hydration"，只为交互部分付 JS 代价。
2. **默认零 JS**：与 SPA 相反，默认不发 JS，内容站性能极佳。
3. **框架无关**：不绑定单一 UI 库，可自由混用，务实开放。

## 生态位置

内容优先 Web 框架的代表。竞品：Next.js（应用型全能）、Nuxt（Vue）、Hugo（纯静态）、Gatsby（式微）。Astro 在文档站、博客、内容站领域优势明显。本站即用 Astro + Content Collections + ECharts 构建。

## 我的评价

Astro 的"群岛架构"是对 SPA 时代"全页 JS"惯性的一次精准纠偏——它意识到大量网站本质是内容而非应用，于是把"默认零 JS、按需 hydration"作为出发点。这与 Svelte（编译时）、Qwik（可恢复性）一样，都在反思"前端是否发送了过多 JS"。作为亲手用它搭建本站的框架，我尤其认同它"为正确的场景选择正确的默认值"的务实哲学。
