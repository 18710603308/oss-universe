---
name: Nushell
tagline: 把数据结构带进命令行的现代 Shell
category: 命令行工具
language: Rust
born: 2019
era: 云原生
stars: 35k+
depth: seed
repo: https://github.com/nushell/nushell
website: https://www.nushell.sh
tags: [Shell, 命令行, 结构化数据, Rust]
updated: 2026-04-10
---

## 一句话定位

Nushell（简称 Nu）是用 Rust 编写的现代 Shell，颠覆了传统 Shell "一切皆文本"的范式，改为"一切皆结构化数据"——命令间传递的是带类型的表格数据而非纯文本，让数据处理像操作数据库一样精确、强大。

## 诞生背景

2019 年发布。传统 Shell（Bash/Zsh）用文本流串联命令，处理结构化数据要靠 grep/awk/sed 反复解析文本，脆弱又费劲。Nushell 的洞察：既然大多数数据本就是结构化的，为何不让 Shell 直接理解和传递结构化数据？

## 核心架构

- **结构化数据管道**：命令间传递表格/记录/列表，而非纯文本
- **类型系统**：数据带类型，可靠地过滤、排序、聚合
- **内建数据命令**：`where`、`sort-by`、`group-by` 等类 SQL 操作
- **多格式支持**：原生解析 JSON、YAML、CSV、TOML 等
- **跨平台**：Rust 编写，Windows/macOS/Linux 一致

## 关键设计决策

1. **一切皆结构化数据**：用带类型的表格数据取代文本流，这是对 Unix Shell 传统的根本性重构。
2. **类 SQL 的数据操作**：内建强大的数据处理命令，让命令行像查数据库。
3. **原生多格式**：直接理解 JSON/CSV 等，无需外部工具解析。

## 生态位置

现代 Shell 的革新者。与 Bash/Zsh/Fish（传统文本流 Shell）范式截然不同。同属"重造命令行体验"的现代 Rust CLI 浪潮（ripgrep、fd、bat、eza、Nushell 等）。适合数据密集的命令行工作，但与海量既有 Bash 脚本的兼容是其推广的挑战。

## 我的评价

Nushell 敢于挑战 Unix 半个世纪的"一切皆文本"传统，本身就极具勇气。它的洞察很深刻：**文本流虽通用，但把结构化数据当文本处理，是无数命令行痛苦的根源**（想想解析 `ls` 输出多脆弱）。它未必能取代 Bash（兼容性和惯性太强），但它提出的问题足够重要。它和 ripgrep、fd 一起，代表了 Rust 社区"用现代工程重造经典命令行工具"的蓬勃浪潮。
