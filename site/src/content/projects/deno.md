---
name: Deno
tagline: Node.js 之父的"重来一次"，安全的现代 JS/TS 运行时
category: 运行时
language: Rust/TypeScript
born: 2018
era: 云原生
stars: 95k+
depth: seed
repo: https://github.com/denoland/deno
website: https://deno.com
tags: [运行时, TypeScript, 安全]
updated: 2026-07-10
---

## 一句话定位

Deno 是 Node.js 创始人 Ryan Dahl 打造的现代 JavaScript/TypeScript 运行时，用 Rust 重写，修正了他认为 Node.js 的设计遗憾：默认安全、原生 TS 支持、标准化的模块与工具链。

## 诞生背景

2018 年，Ryan Dahl 在著名演讲《我对 Node.js 感到遗憾的 10 件事》中反思了 Node 的设计问题（node_modules 黑洞、无安全模型、CommonJS 等），随后推出 Deno 作为"重新设计的答案"。

## 核心架构

- **Rust + V8**：用 Rust 编写核心（而非 Node 的 C++）
- **默认安全**：文件、网络、环境访问需显式授权（`--allow-net` 等）
- **原生 TypeScript**：无需配置即可直接运行 .ts
- **URL 导入 + Web 标准 API**：像浏览器一样按 URL 导入模块，拥抱 fetch 等 Web API
- **一体化工具链**：内置格式化、测试、打包、LSP

## 关键设计决策

1. **默认安全沙箱**：脚本默认无任何系统权限，须显式授予，从根本上提升安全性。
2. **拥抱 Web 标准**：用 fetch、ES Module 等浏览器标准 API，减少前后端割裂。
3. **零配置 TS + 一体化工具**：开箱即用，告别繁琐的工具配置。

## 生态位置

Node.js 的现代挑战者之一。竞品：Node.js（生态庞大）、Bun（主打性能）。三者共同推动 JS 运行时的进化。

## 我的评价

Deno 最珍贵的地方是它诞生的姿态——一个创造者公开反思自己的成名作，并有勇气"推倒重来"。虽然它未能撼动 Node 的生态霸主地位，但它提出的"默认安全""拥抱 Web 标准"等理念，反过来推动了 Node 自身的改进。真正的进步，常常来自敢于否定自己的人。
