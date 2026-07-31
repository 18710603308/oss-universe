---
name: Electron
tagline: 用 Web 技术构建跨平台桌面应用，VS Code 的底座
category: 桌面应用
foundation: OpenJS
language: JavaScript/C++
born: 2013
era: 云计算
stars: 114k+
depth: seed
repo: https://github.com/electron/electron
website: https://www.electronjs.org
tags: [桌面应用, 跨平台, Chromium, Node]
updated: 2026-06-08
---

## 一句话定位

Electron 是 GitHub 开源的桌面应用框架，把 Chromium 渲染引擎和 Node.js 运行时打包在一起，让开发者用 HTML/CSS/JS 构建跨平台（Windows/macOS/Linux）桌面应用，是 VS Code、Slack、Discord 等众多知名软件的底座。

## 诞生背景

2013 年为构建 Atom 编辑器而诞生（原名 Atom Shell）。当时开发跨平台桌面应用要为每个系统写原生代码，成本高。Electron 让庞大的 Web 开发者群体能用熟悉的技术直接做桌面软件。

## 核心架构

- **Chromium + Node.js**：渲染进程用 Chromium 显示 UI，主进程用 Node 访问系统
- **主进程 / 渲染进程**：多进程架构，主进程管窗口与系统，渲染进程跑页面
- **原生 API 桥接**：通过 IPC 让 Web 页面调用文件、菜单、通知等系统能力
- **一次开发多端打包**：同一份代码打包到三大桌面平台

## 关键设计决策

1. **打包浏览器 + Node**：牺牲体积和内存，换取"Web 技术直接做桌面"的开发效率。
2. **复用 Web 生态**：让海量前端开发者零门槛进入桌面开发。
3. **多进程隔离**：借鉴浏览器架构，UI 与系统访问分进程，兼顾安全与稳定。

## 生态位置

跨平台桌面应用的主流方案。代表作：VS Code、Slack、Discord、Figma 桌面版。争议：内存占用大（每个应用自带一个浏览器）。挑战者：Tauri（用系统 WebView + Rust，更轻）。

## 我的评价

Electron 是一个充满争议却极其成功的权衡——它用"每个应用自带一个浏览器"的资源代价，换来了"Web 技术即可做桌面应用"的巨大开发效率，从而让桌面软件的开发民主化。它被诟病臃肿，但 VS Code 等杰作证明：只要产品价值足够，用户愿意为体验买单。它也催生了 Tauri 这样"要效率也要轻量"的反思之作。
