---
name: Chromium
tagline: 驱动大半浏览器的开源引擎，现代 Web 的底座
category: 浏览器
foundation: Google
language: C++
born: 2008
era: Web2.0
stars: 21k+
depth: seed
repo: https://github.com/chromium/chromium
website: https://www.chromium.org
tags: [浏览器, 引擎, Blink, Web]
updated: 2026-05-14
---

## 一句话定位

Chromium 是 Google 主导的开源浏览器项目，是 Chrome 的开源基础，其 Blink 渲染引擎和 V8 JS 引擎驱动着 Chrome、Edge、Brave、Opera 等大半市场份额的浏览器，也是 Electron、CEF 等桌面框架的底层。

## 诞生背景

2008 年随 Chrome 发布而开源。当时浏览器由 IE 主导、创新停滞。Chromium 以多进程架构、快速的 V8 引擎和频繁迭代，重新点燃了浏览器竞争，并把 Web 平台能力推向前所未有的高度。

## 核心架构

- **Blink 渲染引擎**：解析 HTML/CSS 并排版渲染页面
- **V8 引擎**：高性能 JavaScript/WASM 执行（Node.js 也用它）
- **多进程架构**：每个标签页/站点独立进程，一个崩溃不影响其他，安全隔离
- **沙箱**：渲染进程在沙箱中运行，限制攻击面
- **持续推进 Web 标准**：不断实现新的 Web API

## 关键设计决策

1. **多进程 + 沙箱**：用进程隔离换取稳定性与安全性，这一架构成了现代浏览器的标准。
2. **开源引擎**：开放 Chromium 让厂商（微软 Edge 等）基于它构建，形成事实标准（也引发"引擎垄断"担忧）。
3. **快速迭代 + 推进标准**：高频发布，激进实现新 Web 能力，推动 Web 平台演进。

## 生态位置

现代 Web 的底层引擎。基于它的浏览器：Chrome、Edge、Brave、Opera、Vivaldi 等；桌面框架：Electron（VS Code 等）、CEF。竞品引擎：WebKit（Safari）、Gecko（Firefox）。它的主导地位也带来"引擎多样性"的隐忧。

## 我的评价

Chromium 是一把双刃剑——它推动 Web 平台飞速进化、成为无数应用（浏览器、Electron 桌面软件）的底座，功不可没；但它近乎垄断的地位也让人担忧"Web 标准由单一引擎实际定义"的风险。它提醒我们：开源虽然开放，但当一个开源项目过于强大、缺乏对手时，**生态多样性本身也需要被珍视和守护**（正如 Firefox 存在的意义）。
