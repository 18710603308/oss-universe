---
name: esbuild
tagline: 用 Go 编写的极速 JS 打包器，快出一个数量级
category: 构建工具
language: Go
born: 2020
era: 云原生
stars: 38k+
depth: seed
repo: https://github.com/evanw/esbuild
website: https://esbuild.github.io
tags: [构建工具, 打包, Go, 极速]
updated: 2026-06-21
---

## 一句话定位

esbuild 是 Evan Wallace（Figma CTO）用 Go 编写的 JavaScript/TypeScript 打包与压缩工具，比 Webpack 等传统 JS 工具快 10-100 倍，重新定义了前端构建的速度基准。

## 诞生背景

2020 年发布。前端构建工具（Webpack/Rollup）都用 JavaScript 编写，受限于 JS 的单线程和运行时开销，大型项目构建慢。esbuild 大胆选择用 Go 编写，并极致优化并行与内存，速度碾压同类。

## 核心架构

- **Go 编写**：编译型语言 + 原生并行，天生比 JS 工具快
- **并行算法**：充分利用多核，各阶段并行
- **零中间表示开销**：避免不必要的数据转换
- **内置能力**：打包、转译（TS/JSX）、压缩、Tree-shaking 一体

## 关键设计决策

1. **换语言换性能**：跳出"JS 工具必须用 JS 写"的惯性，用 Go 从根本上突破性能天花板。
2. **并行优先**：从算法设计就考虑多核并行，而非事后优化。
3. **做底层引擎**：不追求大而全的插件生态，而是作为高速引擎被 Vite 等上层工具集成。

## 生态位置

现代前端构建的高速引擎。Vite 用它做开发时依赖预构建。同类"换语言提速"的还有 SWC（Rust 写的编译器）、Turbopack（Rust）、Rspack（Rust）。竞品：Webpack（传统 JS）。

## 我的评价

esbuild 掀起了前端工具链的"换语言重写"浪潮——它证明了"JS 工具必须用 JS 写"只是一种思维惯性，用 Go/Rust 这样的编译型语言能带来数量级的性能飞跃。它与 SWC、Turbopack、Rspack 一起，标志着前端基础设施正在经历一场"系统级语言重写"的革命。这是 Vite 极速体验背后的功臣之一。
