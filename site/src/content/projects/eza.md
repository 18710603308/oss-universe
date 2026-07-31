---
name: eza
tagline: 现代化的 ls 替代品，目录列表更好看好用
category: 命令行工具
language: Rust
born: 2021
era: 云原生
stars: 14k+
depth: seed
repo: https://github.com/eza-community/eza
website: https://eza.rocks
tags: [命令行, 目录列表, Rust, ls替代]
updated: 2026-04-02
---

## 一句话定位

eza 是用 Rust 编写的现代 `ls` 替代品（exa 的社区续作），提供彩色输出、图标、Git 状态、树状视图和更人性化的信息展示，让每天无数次的"列目录"操作变得直观美观，是现代终端体验的常见配置。

## 诞生背景

前身 exa 于 2015 年出现、后停止维护，社区在 2021 年 fork 出 eza 继续开发。经典 `ls` 输出朴素、信息密度低、无颜色区分。eza 想让目录列表带上颜色、图标、Git 状态等现代化的丰富信息，一眼看清目录全貌。

## 核心架构

- **彩色 + 图标**：按文件类型着色、显示文件图标
- **Git 状态**：直接在列表中显示文件的 Git 状态
- **树状视图**：`--tree` 以树形展示目录结构
- **丰富元信息**：权限、大小、时间等更易读的展示
- **兼容 ls**：常用参数与 ls 类似，易迁移

## 关键设计决策

1. **信息可视化**：用颜色、图标、Git 状态提升目录信息的可读性。
2. **社区接力维护**：原项目 exa 停更后，社区 fork 续作，体现开源的韧性。
3. **保持 ls 心智**：参数和用法贴近 ls，降低迁移成本。

## 生态位置

现代 Rust CLI 家族成员（与 fd/bat/ripgrep/zoxide 并列）。eza 从 exa fork 而来的历程，本身也是"开源分叉续命"的又一案例（呼应 MariaDB、OpenTofu）。常与 bat、fd、zoxide、starship 一起构成现代化的终端配置。

## 我的评价

eza 除了体验升级，还讲了一个动人的开源故事——原项目 exa 停止维护后，社区没有让它消亡，而是 fork 出 eza 继续前行。这正是开源的独特韧性：**只要代码开放，项目就不会因作者离开而死亡，社区可以接过火炬**。它和 MariaDB、OpenTofu、Jellyfin 一样，都印证了"分叉权"是开源生态生生不息的根本保障。
