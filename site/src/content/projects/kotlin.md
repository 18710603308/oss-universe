---
name: Kotlin
tagline: 更现代的 JVM 语言，Android 官方首选
category: 编程语言
foundation: JetBrains
language: Kotlin
born: 2011
era: 云计算
stars: 50k+
depth: seed
repo: https://github.com/JetBrains/kotlin
website: https://kotlinlang.org
tags: [编程语言, JVM, Android, 空安全]
updated: 2026-05-29
---

## 一句话定位

Kotlin 是 JetBrains 开发的现代 JVM 语言，100% 兼容 Java 却更简洁安全，2017 年被 Google 定为 Android 官方开发语言，如今也用于服务端、多平台（KMP）开发。

## 诞生背景

2011 年由 JetBrains（IntelliJ 的公司）发布。Java 冗长、缺少空安全等现代特性，但生态无可替代。Kotlin 的策略：完全兼容 JVM 与 Java 生态，同时提供更简洁安全的语法，做"更好的 Java"。

## 核心架构

- **JVM 兼容**：编译为 JVM 字节码，与 Java 无缝互操作
- **空安全**：类型系统区分可空/非空，编译期消除 NPE
- **简洁语法**：数据类、扩展函数、协程等大幅减少样板
- **协程（Coroutines）**：优雅的异步并发方案
- **Kotlin Multiplatform（KMP）**：一套代码跨 Android/iOS/Web/后端

## 关键设计决策

1. **完全兼容 Java**：不抛弃 JVM 生态，可与 Java 混编，迁移零阻力——这是它能普及的根本。
2. **空安全**：把"十亿美元错误"（null）纳入类型系统，编译期防范。
3. **协程**：用轻量协程简化异步编程，比 Java 的线程/回调优雅得多。

## 生态位置

Android 官方首选语言，也用于服务端（Ktor、Spring 支持）和跨平台（KMP）。JVM 语言家族的现代代表。竞品/对比：Java（生态本源）、Swift（Apple 阵营的对应者）。

## 我的评价

Kotlin 走的是和 TypeScript 惊人相似的路线——不推翻庞大的既有生态（Java/JVM），而是做"兼容 + 现代化"的增强层，用更好的开发体验赢得采用。它再次验证：**改造成熟生态的最佳策略是兼容而非颠覆**。它的空安全和协程设计，也是现代语言特性的优秀范本。
