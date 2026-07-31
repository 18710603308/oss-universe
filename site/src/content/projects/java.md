---
name: Java
tagline: 一次编写，到处运行，企业级开发的常青树
category: 编程语言
language: Java
born: 1995
era: Web2.0
stars: 20k+
depth: seed
repo: https://github.com/openjdk/jdk
website: https://openjdk.org
tags: [编程语言, JVM, 企业级, 跨平台]
updated: 2026-06-11
---

## 一句话定位

Java 是 Sun（现 Oracle）于 1995 年发布的面向对象语言，凭借"一次编写，到处运行"的 JVM 虚拟机、庞大的生态和企业级稳定性，成为服务端、安卓和大型系统开发数十年的主力语言。OpenJDK 是其开源参考实现。

## 诞生背景

1995 年由 James Gosling 主导发布。当时 C/C++ 跨平台困难、内存管理易错。Java 用"虚拟机 + 字节码 + 垃圾回收"实现跨平台与内存安全，喊出"Write Once, Run Anywhere"，迅速席卷企业市场。

## 核心架构

- **JVM（Java 虚拟机）**：字节码在 JVM 上运行，屏蔽底层平台差异
- **垃圾回收（GC）**：自动内存管理，多种可调 GC 算法
- **强类型 + 面向对象**：严谨的类型系统与 OOP 范式
- **JIT 编译**：运行时热点代码编译为机器码，性能接近原生
- **庞大标准库 + 生态**：Maven 生态、Spring 等成熟框架

## 关键设计决策

1. **虚拟机 + 字节码**：用中间字节码 + JVM 实现真正的跨平台，这是 Java 最核心的创新。
2. **自动内存管理**：GC 消除了 C/C++ 的内存泄漏与悬垂指针难题。
3. **向后兼容**：极度重视兼容性，让企业敢于长期投入。

## 生态位置

企业级后端、Android、大数据（Hadoop/Spark/Kafka 均用 Java/Scala）的基石语言。JVM 上还有 Kotlin、Scala、Groovy 等语言。竞品：C#（.NET）、Go（云原生）。

## 我的评价

Java 的 "JVM + 字节码" 是软件工程史上最成功的抽象之一——它用一层虚拟机把"平台差异"彻底封装，让代码真正跨平台，还顺带催生了 Kotlin、Scala 等一整个 JVM 语言家族。它或许不再"性感"，但其稳定、兼容、生态成熟的特质，正是企业级系统最看重的。理解 JVM，是理解现代托管运行时（GC、JIT）的最佳起点。
