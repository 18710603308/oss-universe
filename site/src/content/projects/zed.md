---
name: Zed
tagline: Rust 打造的高性能协作编辑器，GPU 加速渲染
category: 编辑器
language: Rust
born: 2023
era: AI原生
stars: 50k+
depth: seed
repo: https://github.com/zed-industries/zed
website: https://zed.dev
tags: [编辑器, Rust, GPU, 协作, AI]
updated: 2026-06-13
---

## 一句话定位

Zed 是由 Atom 和 Tree-sitter 原班团队用 Rust 打造的高性能代码编辑器，以 GPU 加速渲染、多人实时协作和深度 AI 集成为特色，志在成为下一代编辑器。

## 诞生背景

2023 年发布。Atom 团队（被 GitHub 收购后 Atom 停维）反思：Electron 编辑器（含 VS Code）受限于 Web 技术栈的性能。他们决定用 Rust 从零打造一个原生、极速的编辑器。

## 核心架构

- **Rust + GPU 渲染**：自研 GPUI 框架，用 GPU 绘制界面，输入延迟极低
- **原生而非 Electron**：抛弃 Web 技术栈，追求极致性能
- **实时协作**：多人同时编辑（类似 Google Docs 的代码版）
- **Tree-sitter + LSP**：精准语法与语言智能
- **AI 集成**：内置 AI 助手与 Agent 能力

## 关键设计决策

1. **原生 + GPU**：为解决 Electron 编辑器的性能瓶颈，用 Rust 和 GPU 渲染从根本上重做。
2. **协作内建**：把多人实时协作作为一等特性，而非插件。
3. **AI 原生**：从设计之初就深度整合 AI，契合 AI 编程时代。

## 生态位置

新一代编辑器的代表，AI 时代的挑战者。竞品：VS Code（生态霸主）、Neovim（终端）、Cursor（VS Code 系 AI 编辑器）、JetBrains。Zed 以性能 + 协作 + AI 原生差异化。

## 我的评价

Zed 是"同一批人对自己前作的反思与超越"——Atom 团队亲历了 Electron 的性能之痛，于是用 Rust 和 GPU 重新回答"编辑器该如何构建"。它与 VS Code（Electron）的路线之争，正是"生态成熟度 vs 原生性能"的经典权衡。在 AI 编程重塑开发方式的当下，编辑器这个最古老的战场又燃起了新的战火，值得持续关注。
