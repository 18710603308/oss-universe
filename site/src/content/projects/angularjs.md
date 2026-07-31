---
name: AngularJS
tagline: 第一代前端框架，双向绑定的开创者
category: 前端框架
foundation: Google
language: JavaScript
born: 2010
era: Web2.0
stars: 59k+
depth: seed
repo: https://github.com/angular/angular.js
website: https://angularjs.org
tags: [前端, 双向绑定, MVC, 历史]
updated: 2026-05-13
---

## 一句话定位

AngularJS（Angular 1.x）是 Google 于 2010 年发布的第一代前端框架，用双向数据绑定、依赖注入和指令系统，把"用声明式方式构建动态 Web 应用"的理念带入主流，开启了前端框架时代。

## 诞生背景

2010 年发布。当时前端还停留在 jQuery 手动操作 DOM 的时代，构建复杂单页应用（SPA）繁琐。AngularJS 提出"HTML 增强"——用指令扩展 HTML、用双向绑定自动同步数据与视图，极大提升了开发效率。

## 核心架构

- **双向数据绑定**：Model 与 View 自动同步（脏检查机制）
- **依赖注入（DI）**：把后端的 DI 思想引入前端
- **指令（Directive）**：用自定义 HTML 属性/标签扩展能力
- **MVC/MVVM**：分离数据、视图与逻辑
- **模块系统**：组织大型应用

## 关键设计决策

1. **双向绑定**：数据变视图变、视图变数据变，省去手动 DOM 同步——这是它风靡的核心。
2. **HTML 增强**：用指令让 HTML 具备动态能力，而非用 JS 生成 HTML。
3. **依赖注入**：把服务端的工程化理念（DI、可测试）带到前端。

## 生态位置

第一代前端框架的代表与启蒙者。其双向绑定和脏检查在大型应用中的性能问题，促使 Google 在 2016 年用 TypeScript 完全重写为不兼容的 Angular 2+。它启发了 Vue（尤雨溪曾用它）等后来者。

## 我的评价

AngularJS 是前端框架时代的"开山鼻祖"——它第一次让主流开发者体验到"声明式 + 数据驱动"的威力，把前端从手动操作 DOM 中解放。它的双向绑定虽因性能被后来者（React 的单向流）反思，但它开启的"数据驱动视图"范式，至今仍是所有现代框架的共同基石。它的历史价值，远大于它的技术遗留。
