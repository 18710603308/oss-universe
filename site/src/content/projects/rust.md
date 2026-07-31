---
name: Rust
tagline: 无 GC 的内存安全系统语言，连续多年最受喜爱
category: 编程语言
foundation: Rust 基金会
language: Rust
born: 2010
era: 云原生
stars: 98k+
depth: seed
repo: https://github.com/rust-lang/rust
website: https://www.rust-lang.org
tags: [编程语言, 内存安全, 系统编程]
updated: 2026-07-16
---

## 一句话定位

Rust 是一门系统级编程语言，在不依赖垃圾回收的前提下，通过独创的「所有权」机制在编译期保证内存安全和线程安全，兼顾 C/C++ 的性能与现代语言的安全性。

## 诞生背景

2010 年始于 Mozilla 员工 Graydon Hoare 的业余项目，后获 Mozilla 支持（用于 Servo 浏览器引擎）。2021 年成立独立的 Rust 基金会（AWS、Google、微软、华为等支持）。连续多年获 Stack Overflow「最受喜爱语言」。

## 核心架构

- **所有权（Ownership）**：每个值有唯一所有者，离开作用域自动释放
- **借用（Borrowing）与生命周期**：编译期检查引用有效性
- **无 GC**：内存管理在编译期确定，运行时零开销
- **trait 系统**：类似接口的抽象机制
- **Cargo**：一体化的包管理与构建工具（体验极佳）

## 关键设计决策

1. **所有权系统**：把内存安全从"运行时 GC"或"手动管理"转移到"编译期检查"，实现零成本抽象。
2. **无畏并发**：编译器保证数据竞争在编译期被发现。
3. **优秀工具链**：Cargo、rustfmt、clippy 提供一流开发体验。

## 生态位置

系统编程新星，正在重写大量基础软件（ripgrep、Deno、Tauri、Firecracker），甚至进入 Linux 内核。竞品：C/C++（传统系统语言）、Go（更简单）、Zig（新秀）。

## 我的评价

Rust 最大的创新是「用类型系统在编译期解决内存安全」——它把一个困扰系统编程数十年的难题（安全 vs 性能的取舍）转化为编译器可验证的问题。陡峭的学习曲线是代价，但「与编译器搏斗」的过程本身会重塑你对内存和并发的理解。它代表了系统编程的未来方向。
