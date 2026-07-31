---
name: Rollup
tagline: ESM 打包器，库打包与 Tree-shaking 先锋
category: 构建工具
language: JavaScript
born: 2015
era: 云计算
stars: 25k+
depth: seed
repo: https://github.com/rollup/rollup
website: https://rollupjs.org
tags: [构建工具, ESM, Tree-shaking, 打包]
updated: 2026-05-06
---

## 一句话定位

Rollup 是聚焦 ES Module 的 JavaScript 打包器，率先把 Tree-shaking（死代码剔除）做到极致，能生成干净、精简的产物，是打包 JS 库的首选工具，也是 Vite 生产构建底层所依赖的打包引擎。

## 诞生背景

2015 年由 Rich Harris（也是 Svelte 作者）创建。当时 Webpack 主打应用打包，产物中夹带较多运行时代码，不适合发布"干净"的库。Rollup 拥抱 ES Module 的静态结构，实现精准的 Tree-shaking，专为库打包优化。

## 核心架构

- **ESM 优先**：基于 ES Module 的静态可分析结构
- **Tree-shaking**：静态分析剔除未使用的代码，产物极精简
- **多格式输出**：ESM、CJS、UMD、IIFE 等一次生成
- **插件体系**：简洁的插件 API（Vite 插件即兼容 Rollup）
- **产物干净**：几乎无多余运行时代码

## 关键设计决策

1. **拥抱 ESM 静态分析**：利用 ES Module 的静态特性做精准 Tree-shaking，这是它相对早期 Webpack 的核心优势。
2. **专注库打包**：产物干净、支持多格式，成为发布 JS 库的标准工具。
3. **简洁插件模型**：清晰的插件 API，被 Vite 直接采纳为插件生态基础。

## 生态位置

JS 库打包的事实标准，也是 Vite 生产构建的底层打包器。与 Webpack（应用打包、生态大）、esbuild（极速、Vite 开发期用）分工协作。Rollup 的插件生态被 Vite 继承，二者关系紧密。

## 我的评价

Rollup 的历史意义在于它把 Tree-shaking 从概念变成了标配——它证明了拥抱 ES Module 的静态结构能带来多干净的产物。它和 Webpack 是"库 vs 应用"的分工，而它成为 Vite 的底层打包器，则让它的影响力延续到了下一个时代。有趣的是它和 Svelte 同出 Rich Harris 之手——一个人对"消除不必要开销"的执着，同时改变了打包和框架两个领域。
