---
name: Vite
tagline: 下一代前端构建工具，极速开发体验的代名词
category: 构建工具
language: TypeScript
born: 2020
era: 云原生
stars: 69k+
depth: sprout
repo: https://github.com/vitejs/vite
website: https://vite.dev
tags: [构建工具, ESM, 前端]
updated: 2026-07-10
---

## 一句话定位

Vite 是尤雨溪创造的下一代前端构建工具，开发时利用浏览器原生 ES Module 实现毫秒级冷启动和热更新，生产时用 Rollup 打包，彻底改善了前端开发体验。

## 诞生背景

2020 年发布。Webpack 等打包器在开发时需要打包整个应用才能启动，大型项目冷启动动辄数十秒。Vite 抓住浏览器已原生支持 ES Module 的时机，提出"开发时无需打包"。

## 核心架构

- **开发服务器**：基于原生 ESM，浏览器按需请求模块，无需预打包
- **依赖预构建**：用 esbuild（Go 编写）预处理依赖，极快
- **HMR**：模块热替换只更新变动的模块，与应用大小无关
- **生产构建**：用 Rollup 打包优化

## 关键设计决策

1. **利用原生 ESM**：开发时把"打包"交给浏览器，冷启动从"打包整个应用"变为"按需加载"。
2. **esbuild 预构建**：用 Go 编写的 esbuild 处理依赖，比 JS 工具快 10-100 倍。
3. **开发/生产分离**：开发用 ESM 求快，生产用 Rollup 求优，各取所长。

## 生态位置

新一代构建工具的标杆，已成为 Vue、React、Svelte 等框架的默认脚手架。本站也基于 Astro（底层用 Vite）。竞品：Webpack（上一代）、Turbopack、Rspack。

## 我的评价

Vite 是"抓住技术拐点"的典范——它敏锐地意识到"浏览器原生支持 ESM"这一底层变化，把开发时打包这件"理所当然"的事直接取消了。最好的优化不是让某件事变快，而是让它变得没有必要。Vite 对开发体验的改善，本身就是尤雨溪产品思维的又一次胜利。
