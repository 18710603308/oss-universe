---
name: Swift
tagline: Apple 的现代系统语言，安全与性能兼顾
category: 编程语言
foundation: Apple
language: Swift
born: 2014
era: 云计算
stars: 68k+
depth: seed
repo: https://github.com/swiftlang/swift
website: https://www.swift.org
tags: [编程语言, Apple, iOS, 安全]
updated: 2026-05-29
---

## 一句话定位

Swift 是 Apple 于 2014 年发布并开源的现代编程语言，用于替代 Objective-C 成为 iOS/macOS 开发的首选，以安全、高性能和现代语法著称，近年也拓展到服务端与跨平台领域。

## 诞生背景

2014 年由 Apple（Chris Lattner 主导，也是 LLVM 之父）发布。Objective-C 语法老旧、易出错。Swift 要提供一门安全、快速、现代且对初学者友好的语言，并于 2015 年开源，走向 Apple 生态之外。

## 核心架构

- **值类型与可选类型（Optional）**：用 Optional 显式处理"可能为空"，编译期防空指针
- **强类型 + 类型推断**：安全又不啰嗦
- **协议导向编程（POP）**：以协议而非继承为核心的抽象方式
- **ARC 内存管理**：自动引用计数，无 GC 停顿
- **基于 LLVM**：编译到高效原生代码

## 关键设计决策

1. **安全默认**：Optional、值语义、边界检查等，把常见错误挡在编译期。
2. **性能与现代性并重**：接近 C 的性能 + 现代语法，兼顾底层与易用。
3. **开源走出苹果**：开源后拓展到 Linux 服务端与跨平台，摆脱单一平台绑定。

## 生态位置

Apple 平台（iOS/macOS/watchOS）开发的官方语言，SwiftUI 是其声明式 UI 框架。也用于服务端（Vapor）。竞品/对应：Kotlin（Android 阵营的对应者）、Objective-C（前辈）。

## 我的评价

Swift 与 Kotlin 是移动开发双生子——Apple 的 Swift 与 Google 钦定的 Kotlin，几乎同期把各自平台的开发语言现代化（安全、简洁、空/Optional 安全）。它们的诞生反映了一个共识：随着移动开发规模化，语言层面的安全性（消除空指针等）比历史包袱更重要。SwiftUI 的声明式 UI 也可见 React 思想的跨领域影响。
