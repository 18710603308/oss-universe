---
name: ripgrep
tagline: 极速代码搜索工具，用 Rust 重新定义 grep
category: 命令行工具
language: Rust
born: 2016
era: 云原生
stars: 49k+
depth: seed
repo: https://github.com/BurntSushi/ripgrep
website: https://github.com/BurntSushi/ripgrep
tags: [CLI, 搜索, Rust, grep]
updated: 2026-06-26
---

## 一句话定位

ripgrep（命令 `rg`）是用 Rust 编写的递归文本搜索工具，比传统 grep 快数倍，默认遵守 .gitignore、跳过隐藏文件与二进制文件，是现代开发者代码搜索的首选。

## 诞生背景

2016 年由 Andrew Gallant（BurntSushi）创造。传统 grep/ack/ag 在大型代码库中搜索慢，且不够智能。ripgrep 结合 Rust 的性能、优秀的正则引擎和对 .gitignore 的默认支持，成为速度与体验的标杆。

## 核心架构

- **Rust 正则引擎**：作者自研的 regex 库，避免灾难性回溯
- **并行搜索**：多线程遍历目录
- **智能过滤**：默认尊重 .gitignore、跳过隐藏/二进制文件
- **Unicode 支持**：正确处理各种编码
- **内存映射 + SIMD**：底层性能优化

## 关键设计决策

1. **默认智能**：开箱即尊重 .gitignore、跳过无关文件，符合开发者直觉，少配置即好用。
2. **性能至上**：Rust + 高效正则 + 并行 + SIMD，把搜索速度做到极致。
3. **正确性**：正则引擎保证线性时间，避免 PCRE 的回溯陷阱。

## 生态位置

现代 CLI 工具"Rust 重写"浪潮的旗舰。VS Code 内置用它做全局搜索。同类：fd（替代 find）、bat（替代 cat）、eza（替代 ls）、fzf（模糊查找）。

## 我的评价

ripgrep 是"Rust 重写经典工具"运动的代表作——它证明了即使是 grep 这样存在数十年、看似无可改进的基础工具，用现代语言和更好的默认行为重新设计，依然能带来数量级的体验提升。它启示我：不要以为老工具就是最优解，"重新审视理所当然"常常能发现巨大的改进空间。
