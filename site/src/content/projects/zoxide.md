---
name: zoxide
tagline: 会学习的智能 cd，一步跳到常去目录
category: 命令行工具
language: Rust
born: 2020
era: 云原生
stars: 25k+
depth: seed
repo: https://github.com/ajeetdsouza/zoxide
website: https://github.com/ajeetdsouza/zoxide
tags: [命令行, 目录跳转, Rust, cd替代]
updated: 2026-04-02
---

## 一句话定位

zoxide 是用 Rust 编写的智能目录跳转工具，作为 `cd` 的增强替代，它会记住你常访问的目录并按"频率 + 最近"打分，让你用 `z 关键词` 就能一步跳到常去目录，无需再敲冗长的路径，是提升终端导航效率的利器。

## 诞生背景

2020 年发布，灵感源自更早的 autojump、z。传统 `cd` 需要输入完整或相对路径，在深层目录间切换很繁琐。zoxide 的洞察：人们访问目录高度集中于少数几个，那就让工具"学习"访问习惯，用最短的关键词直达。

## 核心架构

- **频率算法（frecency）**：综合访问频率与最近程度给目录打分
- **模糊匹配**：`z proj` 就能跳到匹配度最高的 project 目录
- **数据库记录**：维护访问过的目录及其分数
- **跨 Shell**：支持 Bash/Zsh/Fish/PowerShell/Nushell 等
- **可配合 fzf**：交互式选择候选目录

## 关键设计决策

1. **学习访问习惯**：用 frecency 算法记住并预测你最可能去的目录，把导航变智能。
2. **极短交互**：`z 关键词` 一步到位，把多次 cd 压缩成一条命令。
3. **广泛 Shell 兼容**：适配主流 Shell，几乎人人可用。

## 生态位置

现代 Rust CLI 家族成员（与 fd/bat/eza/starship 并列）。它替代/增强的是最高频的终端操作之一——切换目录。常与 fzf、starship 等一起出现在开发者的现代终端配置中，是"提升终端日常效率"这一诉求的典型产物。

## 我的评价

zoxide 的巧思在于"让工具学习你"——传统 cd 是纯被动的，你说去哪它去哪；zoxide 则主动记住你的习惯并预测。这是一种朴素的"智能化"：不用 AI，只用一个简单的 frecency 算法，就把高频操作的成本大幅降低。它揭示了效率工具的一条通则：**把用户的重复行为数据利用起来做预测，即使算法简单，也能带来质变的体验提升。**
