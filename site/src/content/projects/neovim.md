---
name: Neovim
tagline: Vim 的现代化重构，可编程的终端编辑器
category: 编辑器
language: C/Lua
born: 2014
era: 云计算
stars: 88k+
depth: seed
repo: https://github.com/neovim/neovim
website: https://neovim.io
tags: [编辑器, Vim, 终端, Lua]
updated: 2026-06-29
---

## 一句话定位

Neovim 是从 Vim fork 而来的现代化终端编辑器，通过重构架构、内置 Lua、原生支持 LSP 和异步插件，让古老而强大的 Vim 焕发新生，成为极客与效率党的首选。

## 诞生背景

2014 年发起。Vim 代码库老旧、维护困难、插件受限于同步阻塞。Neovim 项目旨在重构 Vim 内核，引入现代化的扩展能力，同时保持对 Vim 配置与操作习惯的兼容。

## 核心架构

- **客户端/服务端架构**：编辑器核心与 UI 解耦，可有多种前端
- **内置 Lua**：用 Lua 替代 Vimscript 写配置和插件，性能与体验俱佳
- **原生 LSP**：内置语言服务器协议客户端，媲美 IDE 的补全与跳转
- **异步任务**：插件可异步运行，不阻塞编辑
- **Tree-sitter**：增量语法解析，精准高亮

## 关键设计决策

1. **重构而非重写**：在兼容 Vim 的基础上现代化，既保留生态又突破限制。
2. **Lua 优先**：把配置语言从晦涩的 Vimscript 换成通用的 Lua，激活了插件生态。
3. **拥抱 LSP + Tree-sitter**：站在 VS Code 定义的开放协议之上，获得现代 IDE 能力。

## 生态位置

现代终端编辑器的代表，催生了 LazyVim、AstroNvim 等开箱即用配置。竞品：Vim（本源）、Helix（内置一切）、VS Code（GUI）、Zed（新秀）。

## 我的评价

Neovim 展示了开源"分叉再造"的建设性一面——它没有推翻 Vim，而是在尊重其精髓的同时大胆现代化，靠社区活力反超原项目。它对 LSP 的原生拥抱也再次印证：VS Code 定义的 LSP 协议已成为编辑器领域的公共基础设施，站在开放标准之上，小项目也能获得一流能力。
