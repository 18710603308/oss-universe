---
name: Maven
tagline: Java 的标准构建与依赖管理，约定优于配置
category: 构建工具
foundation: Apache
language: Java
born: 2004
era: Web2.0
stars: 4k+
depth: seed
repo: https://github.com/apache/maven
website: https://maven.apache.org
tags: [构建工具, Java, 依赖管理, 约定优于配置]
updated: 2026-04-06
---

## 一句话定位

Maven 是 Java 生态的标准构建与依赖管理工具，用 `pom.xml` 声明式地定义项目结构、依赖和构建流程，通过"约定优于配置"和中央仓库，把 Java 项目的编译、测试、打包、依赖管理标准化，是 Java 工程化的基石。

## 诞生背景

2004 年由 Apache 发布。此前 Java 用 Ant 构建，每个项目的构建脚本各不相同、依赖靠手动下载 jar 包管理，混乱不堪。Maven 引入标准项目结构、声明式依赖和中央仓库，让"依赖地狱"和"构建脚本地狱"成为历史。

## 核心架构

- **POM（Project Object Model）**：用 `pom.xml` 声明项目的一切
- **约定优于配置**：标准目录结构（src/main/java 等），零配置即可构建
- **中央仓库**：Maven Central 集中托管海量 Java 库，声明坐标即可自动下载
- **依赖传递**：自动解析依赖的依赖
- **生命周期与插件**：标准构建阶段 + 插件扩展

## 关键设计决策

1. **声明式依赖 + 中央仓库**：只需声明"要什么库"，工具自动下载及其传递依赖，终结手动管理 jar。
2. **约定优于配置**：统一的项目结构让任何 Maven 项目都似曾相识，降低认知成本。
3. **标准生命周期**：compile/test/package/install 等标准阶段，统一了 Java 构建流程。

## 生态位置

Java 构建的元老与标准。它建立的中央仓库（Maven Central）是整个 JVM 生态的依赖来源，连 Gradle 等后来者也依赖它。竞品：Gradle（更灵活、用代码而非 XML）、Ant（前辈）。至今仍是大量 Java 项目的构建工具。

## 我的评价

Maven 对 Java 生态的意义堪比 npm 之于 JavaScript——它用"声明式依赖 + 中央仓库"终结了手动管理 jar 包的混乱，让"站在他人代码之上"变得简单可靠。它的 `pom.xml` 虽被诟病 XML 冗长，但它建立的中央仓库和依赖模型，是整个 JVM 生态繁荣的地基。它证明了：**一个好的依赖管理体系 + 中央仓库，是一门语言生态能否规模化繁荣的关键基础设施。**
