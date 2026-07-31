---
name: Bun
tagline: 一体化 JavaScript 运行时，运行时+打包+包管理三合一
category: 运行时
language: Zig
born: 2022
era: 云原生
stars: 74k+
depth: seed
repo: https://github.com/oven-sh/bun
website: https://bun.sh
tags: [运行时, 打包, 包管理, 极速]
updated: 2026-06-21
---

## 一句话定位

Bun 是 Jarred Sumner 用 Zig 编写的一体化 JavaScript/TypeScript 运行时，把运行时、打包器、包管理器、测试器整合到一个极速工具中，志在成为 Node.js 的高性能替代。

## 诞生背景

2022 年发布。JS 工具链高度碎片化：Node（运行）+ npm/yarn（包管理）+ Webpack/Vite（打包）+ Jest（测试），各自独立、启动慢。Bun 提出"全都要"：用一个快速工具统一这一切。

## 核心架构

- **JavaScriptCore 引擎**：用 Safari 的 JSC（而非 V8），启动更快
- **Zig 编写**：底层用 Zig 语言，追求极致性能与内存控制
- **一体化工具**：`bun run`（运行）、`bun install`（比 npm 快数十倍）、`bun build`（打包）、`bun test`（测试）
- **Node 兼容**：兼容大部分 Node API 与 npm 生态
- **原生 TS**：直接运行 TypeScript

## 关键设计决策

1. **一体化整合**：把碎片化的 JS 工具链收敛为单一工具，减少配置与切换成本。
2. **JSC + Zig**：选择不同的引擎和系统语言，从底层榨取性能。
3. **兼容 Node 生态**：不抛弃 npm 生态，降低迁移门槛（对比 Deno 早期的激进）。

## 生态位置

Node.js 的性能挑战者。JS 运行时三强：Node.js（生态霸主）、Deno（安全/Web标准）、Bun（性能/一体化）。三者良性竞争推动整个 JS 生态进化。

## 我的评价

Bun 的策略是"整合 + 极速"——它不发明新范式，而是把已经碎片化的 JS 工具链重新收敛为一个快速的整体。它与 Deno 形成有趣对比：Deno 早期激进地抛弃 Node 生态（后来妥协），Bun 则从一开始就拥抱兼容。这再次说明：在成熟生态中，兼容性往往是新工具能否被采用的生死线。
