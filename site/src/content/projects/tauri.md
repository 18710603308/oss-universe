---
name: Tauri
tagline: 用 Rust 构建的轻量桌面应用框架，Electron 的挑战者
category: 桌面应用
language: Rust
born: 2019
era: 云原生
stars: 90k+
depth: seed
repo: https://github.com/tauri-apps/tauri
website: https://tauri.app
tags: [桌面应用, Rust, WebView, 轻量]
updated: 2026-06-08
---

## 一句话定位

Tauri 是用 Rust 编写的桌面应用框架，前端仍用 Web 技术，但后端用 Rust 且复用操作系统自带的 WebView（而非打包整个 Chromium），因此产物体积小、内存占用低、更安全，是 Electron 的轻量挑战者。

## 诞生背景

2019 年发布。Electron 让 Web 技术能做桌面应用，但代价是每个应用捆绑一个完整浏览器，体积动辄上百 MB、内存占用高。Tauri 的洞察：既然操作系统已自带 WebView，为何不复用它？

## 核心架构

- **系统 WebView**：复用 OS 自带的 WebView（WKWebView/WebView2 等），不打包 Chromium
- **Rust 后端**：核心与系统交互用 Rust，安全且高效
- **前端无关**：任意 Web 框架（React/Vue/Svelte）写界面
- **极小体积**：应用可小至几 MB（对比 Electron 上百 MB）
- **安全模型**：细粒度的权限与 API 白名单

## 关键设计决策

1. **复用系统 WebView**：不捆绑浏览器，体积与内存大幅下降——这是与 Electron 的根本分野。
2. **Rust 后端**：用 Rust 换取安全与性能，替代 Electron 的 Node 主进程。
3. **安全优先**：默认最小权限，收窄攻击面。

## 生态位置

新一代轻量桌面框架，Electron 的主要挑战者。取舍：体积/内存优于 Electron，但因依赖各系统 WebView，跨平台渲染一致性略逊。契合"Rust 重写"浪潮（同 esbuild、ripgrep、Zed）。

## 我的评价

Tauri 对 Electron 的挑战，本质是又一次"复用 vs 打包"的权衡再平衡——Electron 打包浏览器求一致性，Tauri 复用系统 WebView 求轻量。它和 Zed、Bun 一样，都是 Rust 生态对"既有方案资源开销过大"的回应。这类"用系统语言重写、追求轻量"的项目，正代表着当下基础软件的一股鲜明潮流。
