---
name: Vitest
tagline: Vite 原生的极速单元测试框架
category: 测试
language: TypeScript
born: 2021
era: 云原生
stars: 14k+
depth: seed
repo: https://github.com/vitest-dev/vitest
website: https://vitest.dev
tags: [单元测试, Vite, 快速, 前端]
updated: 2026-05-17
---

## 一句话定位

Vitest 是基于 Vite 构建的现代单元测试框架，复用 Vite 的转换管线实现极速运行，API 兼容 Jest，配置零负担，是 Vite 生态（Vue、Astro、SvelteKit 等）项目的首选测试工具。

## 诞生背景

2021 年随 Vite 生态兴起。Jest 有自己独立的转换流程，在 Vite 项目中需要额外配置且速度受限。Vitest 直接复用项目已有的 Vite 配置与转换器，做到"零配置 + 极速 + 与 Jest 兼容"。

## 核心架构

- **复用 Vite 管线**：测试与开发共享同一套转换/解析配置，天然一致
- **Jest 兼容 API**：`describe/it/expect`、快照、mock 与 Jest 一致，迁移无痛
- **极速 + HMR**：基于 Vite 的按需转换与热更新，watch 模式飞快
- **原生 ESM/TS**：无需额外配置即可测 TS 与 ESM
- **浏览器模式**：可在真实浏览器环境跑组件测试

## 关键设计决策

1. **复用 Vite 配置**：测试与构建共用一套配置，消除 Jest 在 Vite 项目里的配置摩擦。
2. **兼容 Jest API**：不另造轮子，让 Jest 用户零成本迁移。
3. **速度优先**：借 Vite 的按需转换，把测试反馈循环压到极致。

## 生态位置

Vite 生态的默认单元测试框架，正快速蚕食 Jest 在现代前端项目中的份额。与 Jest（老牌、Webpack 时代标准）形成"新老交替"。E2E 层面则由 Playwright/Cypress 负责。

## 我的评价

Vitest 的成功逻辑很清晰——它不重新发明测试，而是"复用项目已有的 Vite 基础设施"来消除 Jest 的配置摩擦和速度短板。这体现了一个生态规律：**当底层工具（Vite）成为新标准，围绕它"复用其能力"的上层工具往往能顺势取代旧方案**。它与 Jest 的交替，正是 Webpack→Vite 时代变迁在测试领域的投影。
