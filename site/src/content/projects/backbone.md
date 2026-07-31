---
name: Backbone.js
tagline: 最早的前端 MVC 库，SPA 的先行者
category: 前端框架
foundation: 独立
language: JavaScript
born: 2010
era: Web2.0
stars: 28k+
depth: seed
repo: https://github.com/jashkenas/backbone
website: https://backbonejs.org
tags: [前端, MVC, 轻量, 历史]
updated: 2026-05-13
---

## 一句话定位

Backbone.js 是 2010 年由 Jeremy Ashkenas（CoffeeScript 作者）创造的轻量前端库，为 JavaScript 应用引入了 Model、View、Collection、Router 等结构，是最早把"MVC 结构"带入前端、推动单页应用（SPA）兴起的先行者之一。

## 诞生背景

2010 年，Web 应用日益复杂，但前端代码常是一团纠缠的 jQuery 回调。Backbone 提出用 MVC 结构组织代码——把数据（Model）、视图（View）、路由（Router）分离，为混乱的前端带来了第一缕秩序。

## 核心架构

- **Model / Collection**：数据模型与集合，含变更事件
- **View**：绑定 DOM 与数据，手动渲染
- **Router**：前端路由，支持 SPA 的 URL 管理
- **事件系统**：基于事件的松耦合通信
- **极简依赖**：仅依赖 Underscore.js，轻量

## 关键设计决策

1. **提供结构而非框架**：只给 MVC 骨架，不强制模板/绑定方式，灵活但需手写较多。
2. **事件驱动**：Model 变化触发事件，View 监听更新，松耦合。
3. **极简轻量**：核心很小，把控制权更多交给开发者。

## 生态位置

第一代前端结构化方案的代表。与同期的 AngularJS（更"框架"、双向绑定）形成对比：Backbone 更轻、更"库"。随着 React/Vue 等声明式框架崛起而退场，但它开创的"前端 MVC/SPA"思路影响深远。

## 我的评价

Backbone 是前端"从混乱走向结构"的第一步——在没有框架的年代，它用 MVC 为前端代码带来了秩序。它与 AngularJS 代表了第一代的两条路（轻量库 vs 全能框架），也共同证明了"前端需要架构"。虽然它已退居历史，但正是这批先行者的探索，才有了今天成熟的前端框架生态。
