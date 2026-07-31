---
name: Homebrew
tagline: macOS/Linux 的包管理器，"缺失的包管理器"
category: 命令行工具
language: Ruby
born: 2009
era: Web2.0
stars: 42k+
depth: seed
repo: https://github.com/Homebrew/brew
website: https://brew.sh
tags: [包管理, macOS, 命令行, CLI]
updated: 2026-05-21
---

## 一句话定位

Homebrew 是 macOS（及 Linux）上最流行的包管理器，自称"the missing package manager for macOS"，用一条 `brew install` 命令即可安装各种命令行工具、库和应用，极大简化了开发环境的搭建。

## 诞生背景

2009 年由 Max Howell 创建。macOS 缺少像 Linux 的 apt/yum 那样好用的包管理器，装开发工具往往要手动编译或找安装包。Homebrew 用简洁的命令和社区维护的"配方（Formula）"填补了这个空白。

## 核心架构

- **Formula（配方）**：用 Ruby 描述软件如何下载、编译、安装
- **Cask**：安装图形界面应用（如浏览器、编辑器）
- **Tap**：第三方软件仓库
- **用户态安装**：默认装到用户可写目录，无需频繁 sudo
- **依赖管理**：自动处理依赖关系

## 关键设计决策

1. **简洁命令**：`brew install/upgrade/uninstall`，直观到无需查文档。
2. **社区配方**：软件安装方式由社区以 Formula 形式贡献维护，覆盖面广、更新快。
3. **用户态优先**：装到用户目录减少权限问题，降低使用门槛。

## 生态位置

macOS 开发者的事实标准包管理器，也支持 Linux。类比：apt/yum（Linux 系统级）、Chocolatey/Scoop（Windows）、语言级的 npm/pip/cargo。是搭建开发环境的第一步工具。

## 我的评价

Homebrew 解决的是一个"看似简单却极高频"的痛点——在 macOS 上装东西。它用极简命令 + 社区配方，把原本繁琐的软件安装变成一行命令。它再次印证了一条规律：**把高频、繁琐的日常操作做到极致简单，就能成为不可或缺的基础工具**。它的社区驱动配方模式，也是开源协作降低维护成本的好例子。
