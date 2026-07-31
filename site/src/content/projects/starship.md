---
name: Starship
tagline: 跨 Shell 的极简高性能命令行提示符
category: 命令行工具
language: Rust
born: 2019
era: 云原生
stars: 47k+
depth: seed
repo: https://github.com/starship/starship
website: https://starship.rs
tags: [命令行, 提示符, Rust, 跨Shell]
updated: 2026-04-01
---

## 一句话定位

Starship 是用 Rust 编写的极简、高性能、可高度定制的命令行提示符（prompt），能在任意 Shell（Bash/Zsh/Fish/PowerShell 等）上工作，智能显示 Git 状态、语言版本、云环境等上下文信息，让终端提示符既美观又实用。

## 诞生背景

2019 年发布。传统的提示符定制（如 Bash 的 PS1、oh-my-zsh 主题）配置繁琐、跨 Shell 不通用，功能强的往往还慢。Starship 想做一个"一次配置、处处可用、又快又美"的通用提示符。

## 核心架构

- **跨 Shell 通用**：一套配置适配所有主流 Shell
- **上下文感知**：自动显示 Git 分支/状态、Node/Python/Rust 版本、K8s 上下文等
- **高性能**：Rust 编写，提示符渲染快，不拖慢终端
- **单文件配置**：用一个 `starship.toml` 定制一切
- **丰富模块**：数十个可开关的信息模块

## 关键设计决策

1. **跨 Shell 统一**：把提示符从 Shell 特定配置中解放出来，一套配置走天下。
2. **上下文智能**：自动感知并显示当前目录相关的项目信息，实用性强。
3. **性能与美观兼得**：Rust 保证速度，精心设计保证美观，拒绝"美而慢"。

## 生态位置

跨 Shell 提示符的人气之选。取代了 oh-my-zsh 主题、powerlevel10k（Zsh 专属）等的部分场景，优势是跨 Shell 通用且快。是现代 Rust CLI 终端配置（fd/bat/eza/zoxide/starship）的"门面"组件。

## 我的评价

Starship 补齐了现代终端体验的最后一块拼图——如果说 fd/bat/eza/zoxide 升级了各个命令，Starship 则升级了你每天看无数次的"提示符"这张终端门面。它"跨 Shell 通用"的定位尤其聪明：不与任何 Shell 绑定，反而人人可用。它和这批 Rust 工具共同完成了一件事：**把开发者每天数小时面对的终端，从朴素将就升级为高效愉悦**——日常体验的改善，正是最实在的生产力。
