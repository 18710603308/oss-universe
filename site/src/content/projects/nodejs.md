---
name: Node.js
tagline: 服务端 JavaScript 运行时，开启全栈 JS 时代
category: 运行时
foundation: OpenJS
language: C++/JavaScript
born: 2009
era: Web2.0
stars: 107k+
depth: sprout
repo: https://github.com/nodejs/node
website: https://nodejs.org
tags: [运行时, 事件驱动, V8]
updated: 2026-07-16
---

## 一句话定位

Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时，把 JS 带出浏览器、带到服务端，以事件驱动、非阻塞 I/O 模型擅长处理高并发网络应用，开启了「全栈 JavaScript」时代。

## 诞生背景

2009 年 Ryan Dahl 创造。他观察到传统服务器（如 Apache）为每个连接开一个线程的模型在高并发下低效，于是用「单线程事件循环 + 异步 I/O」重新设计，并选择了 JS 这门天生适合回调的语言。

## 核心架构

- **V8 引擎**：Google 的高性能 JS 引擎
- **libuv**：跨平台异步 I/O 库，事件循环的核心
- **事件循环（Event Loop）**：单线程处理大量并发连接
- **npm**：世界最大的软件包生态系统

## 关键设计决策

1. **事件驱动 + 非阻塞 I/O**：单线程也能处理海量并发连接（I/O 密集型场景）。
2. **JS 全栈**：前后端同一门语言，降低团队协作成本。
3. **npm 生态**：模块化 + 中央仓库，催生了空前繁荣的包生态。

## 生态位置

服务端 JS 的奠基者。现由 OpenJS 基金会治理。竞品/后继：Deno（同作者反思之作）、Bun（性能挑战者）。

## 我的评价

Node.js 的历史意义在于「让 JavaScript 无处不在」——它不仅创造了一个运行时，更催生了 npm 这个改变软件分发方式的生态。Ryan Dahl 后来创造 Deno 来"修正 Node 的设计遗憾"，这种创造者亲自反思、另起炉灶的故事，本身就是开源精神的生动体现。
