---
name: Dart
tagline: 为 UI 而生的语言，Flutter 背后的引擎
category: 编程语言
foundation: Google
language: Dart
born: 2011
era: 云计算
stars: 11k+
depth: seed
repo: https://github.com/dart-lang/sdk
website: https://dart.dev
tags: [编程语言, Flutter, 跨平台, UI]
updated: 2026-04-26
---

## 一句话定位

Dart 是 Google 开发的客户端优化编程语言，因作为 Flutter 的官方语言而广为人知，它同时支持 JIT（开发时热重载）和 AOT（发布时编译原生），完美契合"高效开发 + 高性能运行"的 UI 构建需求。

## 诞生背景

2011 年发布，最初想替代 JavaScript 成为 Web 语言，但未成功。真正让它焕发生机的是 2017 年的 Flutter——Dart 的语言特性（JIT+AOT、优秀的 UI 表达）恰好完美适配跨平台 UI 框架的需求，二者相互成就。

## 核心架构

- **JIT + AOT 双编译**：开发时 JIT 支持亚秒级热重载，发布时 AOT 编译成原生代码
- **为 UI 优化**：语法适合声明式构建组件树
- **强类型 + 空安全**：现代类型系统，编译期防空指针
- **单线程 + Isolate**：事件循环 + 隔离的并发模型
- **可编译到多目标**：原生 ARM/x64、JavaScript

## 关键设计决策

1. **JIT + AOT 兼得**：开发期用 JIT 换热重载的爽快，发布期用 AOT 换原生性能，直击 UI 开发痛点。
2. **为 UI 而优化**：语言设计服务于声明式 UI（Flutter 的组件树表达）。
3. **空安全**：现代类型系统在编译期消除空指针这一大类错误。

## 生态位置

Flutter 生态的基石语言，二者深度绑定、一荣俱荣。因 Flutter 的流行（跨平台移动/桌面/Web），Dart 也随之崛起。若脱离 Flutter，Dart 的独立影响力有限。与 Kotlin（Android 原生）、Swift（iOS 原生）、JS/TS（Web）构成客户端语言的不同选择。

## 我的评价

Dart 的故事很有启发性——它作为"JS 替代者"起步时几乎失败，却因 Flutter 而重获新生。这说明：**一门语言的成败，很大程度上取决于是否找到了一个"杀手级应用场景"**。Dart 的 JIT+AOT 组合看似普通，却精准解决了 UI 开发"既要热重载快、又要运行性能好"的核心矛盾。它是"技术与场景相互成就"的经典案例——没有 Flutter 就没有今天的 Dart。
