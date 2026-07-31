---
name: Gradle
tagline: 灵活强大的现代构建工具，用代码定义构建
category: 构建工具
language: Java/Groovy/Kotlin
born: 2008
era: Web2.0
stars: 17k+
depth: seed
repo: https://github.com/gradle/gradle
website: https://gradle.org
tags: [构建工具, JVM, Android, 增量构建]
updated: 2026-04-05
---

## 一句话定位

Gradle 是灵活强大的现代构建工具，用代码（Groovy/Kotlin DSL）而非 XML 定义构建逻辑，兼具 Maven 的依赖管理与远超其的灵活性，凭借增量构建、构建缓存等性能优化，成为 Android 官方构建工具和大型 JVM 项目的主流选择。

## 诞生背景

2008 年发布。Maven 用 XML 声明式构建，简单但不够灵活——复杂或非标准的构建需求难以表达。Gradle 想兼得两者：既有 Maven 的依赖管理和约定，又能用真正的编程语言（DSL）灵活定义任意构建逻辑。

## 核心架构

- **DSL 构建脚本**：用 Groovy 或 Kotlin 写 `build.gradle`，可编程
- **兼容 Maven 仓库**：复用 Maven Central 依赖生态
- **增量构建**：只重建变化的部分，大幅提速
- **构建缓存**：本地/远程缓存构建产物，跨机器复用
- **任务图（DAG）**：把构建建模为任务依赖图

## 关键设计决策

1. **代码而非 XML**：用编程语言 DSL 定义构建，换取表达任意复杂逻辑的灵活性。
2. **性能优化**：增量构建 + 构建缓存 + 守护进程，针对大型项目的构建速度下重注。
3. **兼容 Maven 生态**：复用 Maven Central 与依赖模型，降低迁移门槛。

## 生态位置

现代 JVM 构建的主流，Android 官方指定构建工具。与 Maven（XML 声明式、简单稳定）形成"灵活强大 vs 简单标准"的对照——大型/复杂/Android 项目多用 Gradle，规整的标准项目仍常用 Maven。二者共享 Maven 仓库生态。

## 我的评价

Gradle 与 Maven 的对比是构建工具领域"灵活 vs 简单"的经典权衡——Maven 用 XML 的约束换取简单和一致，Gradle 用编程 DSL 换取灵活和强大。这与 Flask↔Django、Express↔NestJS 的哲学分野如出一辙。Gradle 被选为 Android 构建工具（复杂构建需求多）也印证了：**当构建逻辑足够复杂时，可编程的灵活性就压倒了声明式的简单性**——工具选型永远是场景与取舍的匹配。
