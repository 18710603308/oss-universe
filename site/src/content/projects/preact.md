---
name: Preact
tagline: 3KB 的 React 替代品，极致轻量的同 API 框架
category: 前端框架
language: JavaScript
born: 2015
era: 云计算
stars: 37k+
depth: seed
repo: https://github.com/preactjs/preact
website: https://preactjs.com
tags: [前端, 轻量, React兼容, 虚拟DOM]
updated: 2026-05-30
---

## 一句话定位

Preact 是一个仅约 3KB 的轻量级前端框架，提供与 React 几乎一致的 API，通过 preact/compat 兼容层可无缝替换 React，在对包体积敏感的场景（如嵌入式组件、性能极致的站点）大放异彩。

## 诞生背景

2015 年由 Jason Miller 创建。React 功能强大但运行时体积偏大（数十 KB），对于加载性能极敏感或只需核心功能的场景显得沉重。Preact 用极简实现复刻 React 核心 API，把体积压到极致。

## 核心架构

- **极小体积**：核心约 3KB（gzip），远小于 React
- **React 兼容**：通过 preact/compat 可直接替换 React
- **虚拟 DOM**：保留虚拟 DOM 但实现更精简
- **原生浏览器特性**：更贴近浏览器 API，减少抽象层
- **Signals**：官方也提供细粒度响应式方案

## 关键设计决策

1. **极致轻量**：用最小实现复刻 React 核心，体积是最大卖点。
2. **API 兼容**：保持与 React 一致的接口，让迁移几乎零成本。
3. **务实取舍**：只做核心，舍弃 React 的部分边缘特性以换取小巧。

## 生态位置

React 的轻量替代方案。适合对首屏加载极敏感的场景（营销页、嵌入式 widget、小程序）。与 React 生态高度兼容。竞品/相关：React（功能全）、SolidJS（更高性能）。

## 我的评价

Preact 是"用最小代价复刻核心价值"的典范——它没有另创 API，而是精准复刻 React 最有价值的核心，把体积做到极致，服务于对性能敏感的细分场景。它体现了一种朴素的工程智慧：**很多时候用户需要的不是"更多功能"，而是"同样的能力 + 更小的代价"**。找准这个缝隙，就有立足之地。
