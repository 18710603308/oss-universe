---
name: Go
tagline: Google 的系统级语言，云原生时代的通用语
category: 编程语言
foundation: Google
language: Go
born: 2009
stars: 125k+
depth: tree
repo: https://github.com/golang/go
website: https://go.dev
tags: [编程语言, 并发, 云原生]
updated: 2026-07-16
---

## 一句话定位

Go（Golang）是 Google 设计的静态编译型语言，以简洁的语法、原生并发（goroutine）、快速编译和单文件部署，成为云原生基础设施的首选语言。

## 诞生背景

2009 年由 Rob Pike、Ken Thompson 等（Unix/C 的传奇人物）在 Google 创造。动机是解决 Google 内部的痛点：C++ 编译慢、并发难写、大型项目依赖管理混乱。Go 追求「大道至简」。

## 核心架构

- **Goroutine**：轻量级协程，几 KB 栈，可开百万级
- **Channel**：基于 CSP 模型的并发通信原语
- **GMP 调度器**：G（协程）、M（线程）、P（处理器）三级调度
- **GC**：低延迟的并发垃圾回收
- **静态编译**：编译为单个无依赖的二进制文件

## 关键设计决策

1. **简洁至上**：刻意省略泛型（早期）、继承、异常等特性，语言规范极小。
2. **并发即一等公民**：`go func()` 一个关键字启动并发，Channel 通信而非共享内存。
3. **工程友好**：内置格式化（gofmt）、快速编译、单二进制部署。

## 生态位置

云原生基础设施的通用语言：Docker、Kubernetes、etcd、Prometheus、Terraform 全用 Go 写成。竞品：Rust（更底层安全）、Java（企业级）。

## 我的评价

Go 的哲学是「少即是多」——它用克制的设计换取了极低的心智负担和团队协作成本。在追求语言特性丰富的潮流中，Go 反其道行之，证明了「可读性和一致性」对大规模工程的价值。整个云原生生态选择 Go，就是对这一理念最好的投票。GMP 调度模型也是理解现代并发的绝佳案例。
