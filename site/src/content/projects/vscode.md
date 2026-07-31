---
name: VS Code
tagline: 统治市场的开源编辑器，重新定义了代码编辑体验
category: 编辑器
foundation: Microsoft
language: TypeScript
born: 2015
era: 云计算
stars: 165k+
depth: sprout
repo: https://github.com/microsoft/vscode
website: https://code.visualstudio.com
tags: [编辑器, Electron, LSP]
updated: 2026-07-10
---

## 一句话定位

Visual Studio Code 是微软开源的跨平台代码编辑器，以轻量、快速、海量扩展和优秀的开发体验，在短短几年内成为全球开发者最主流的编辑器。

## 诞生背景

2015 年发布。当时编辑器市场分裂：Sublime/Atom 轻量但功能有限，传统 IDE 强大但笨重。VS Code 用 Electron 实现跨平台，用扩展市场平衡轻量与功能，找到了完美的中间点。

## 核心架构

- **Electron**：用 Web 技术（TypeScript）构建跨平台桌面应用
- **扩展系统**：功能通过扩展按需加载，核心保持轻量
- **LSP（语言服务器协议）**：微软提出的开放协议，让语言支持与编辑器解耦
- **多进程架构**：扩展运行在独立进程，避免拖慢主界面

## 关键设计决策

1. **LSP 协议**：这是 VS Code 最深远的贡献——一个语言只需实现一次 LSP，就能被所有支持 LSP 的编辑器使用，彻底改变了工具生态。
2. **扩展驱动**：核心极简，能力靠扩展，兼顾轻量与强大。
3. **Web 技术栈**：用前端技术构建，降低贡献门槛，扩展生态繁荣。

## 生态位置

编辑器市场的绝对主导者。衍生：VSCodium（去商标版）、Cursor（AI 编辑器）、code-server（Web 版）、GitHub Codespaces（云端）。竞品：JetBrains 系、Neovim、Zed。

## 我的评价

VS Code 最伟大的遗产不是编辑器本身，而是 **LSP 协议**——它把"编辑器 × 语言"的 M×N 复杂度降为 M+N，是一次教科书级的"用协议解耦"设计。这启示我：真正有影响力的贡献，往往是定义一个让整个生态受益的标准，而非仅仅做好一个产品。
