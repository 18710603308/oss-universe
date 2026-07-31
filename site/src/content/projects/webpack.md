---
name: Webpack
tagline: 模块打包器之王，定义了现代前端构建
category: 构建工具
language: JavaScript
born: 2014
era: 云计算
stars: 65k+
depth: seed
repo: https://github.com/webpack/webpack
website: https://webpack.js.org
tags: [构建工具, 打包, 模块化, 前端]
updated: 2026-05-11
---

## 一句话定位

Webpack 是一度统治前端的模块打包器，它把 JS、CSS、图片等各种资源都视为"模块"并构建成依赖图，打包成浏览器可用的产物，其"一切皆模块 + Loader/Plugin"的理念定义了整整一个时代的前端工程化。

## 诞生背景

2014 年发布。当时前端资源零散、依赖管理混乱，浏览器不支持模块化。Webpack 提出把所有资源纳入统一的依赖图管理，配合 Loader（转换）和 Plugin（扩展）机制，成为前端工程化的基础设施。

## 核心架构

- **依赖图（Dependency Graph）**：从入口出发递归分析所有依赖
- **一切皆模块**：JS/CSS/图片/字体都能作为模块被处理
- **Loader**：转换非 JS 资源（如 babel-loader、css-loader）
- **Plugin**：在构建生命周期扩展功能
- **代码分割 + Tree-shaking**：按需加载、剔除死代码

## 关键设计决策

1. **一切皆模块**：把所有前端资源统一纳入依赖图，这一抽象定义了现代前端构建。
2. **Loader/Plugin 生态**：高度可扩展，几乎能处理任何资源与需求。
3. **代码分割**：支持按路由/按需拆包，优化加载性能。

## 生态位置

前端工程化时代的奠基者与曾经的绝对霸主（React/Vue 脚手架都曾用它）。因配置复杂、开发时构建慢，正被 Vite（开发用 ESM + esbuild）、Turbopack、Rspack（Rust 兼容 Webpack）等新一代工具取代。

## 我的评价

Webpack 是前端工程化的"旧王"——它用"一切皆模块 + 依赖图"的抽象定义了一个时代，让复杂前端应用的构建成为可能。但它的配置复杂和开发时慢，也催生了 Vite 这批"更快更简单"的挑战者。它的兴衰是技术演进的经典缩影：**开创者定义范式，后来者在其奠定的基础上追求更好的体验**。理解 Webpack，才能真正理解 Vite 好在哪。
