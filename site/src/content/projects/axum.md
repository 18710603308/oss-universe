---
name: Axum
tagline: Tokio 团队出品的人体工学 Rust Web 框架
category: 后端框架
language: Rust
born: 2021
era: 云原生
stars: 22k+
depth: seed
repo: https://github.com/tokio-rs/axum
website: https://github.com/tokio-rs/axum
tags: [Web框架, Rust, 异步, Tokio]
updated: 2026-03-26
---

## 一句话定位

Axum 是由 Tokio（Rust 异步运行时）团队打造的 Web 框架，以人体工学的 API、与 Tower 中间件生态的无缝集成和"无宏"的类型安全提取器著称，充分利用 Rust 的类型系统和异步能力，是当下 Rust Web 开发最受推崇的选择之一。

## 诞生背景

2021 年发布。Rust 有 Actix-web 等 Web 框架，但社区渴望一个与官方异步运行时 Tokio 深度整合、API 更符合直觉、能复用 Tower 中间件生态的框架。Axum 由 Tokio 团队亲自操刀，填补了这一位置。

## 核心架构

- **提取器（Extractor）**：用类型声明从请求中提取数据，编译期检查
- **基于 Tower**：复用 Tower 的中间件生态（超时、限流、追踪等）
- **无宏设计**：用 Rust 类型系统而非宏实现路由和提取，透明可控
- **深度集成 Tokio/Hyper**：站在最成熟的 Rust 异步栈之上
- **人体工学 API**：符合直觉、易组合

## 关键设计决策

1. **拥抱类型系统**：用类型驱动的提取器实现请求处理，编译期保证正确性，减少运行时错误。
2. **复用 Tower 生态**：不重造中间件，直接接入 Tower，站在生态肩上。
3. **官方血统**：由 Tokio 团队维护，与 Rust 异步栈天然契合，长期可靠。

## 生态位置

Rust Web 框架的当红之选。与 Actix-web（极致性能、更早）竞争 Rust 后端主流地位。背靠 Tokio/Hyper/Tower 生态，是 Rust 全栈（配合 SeaORM/SQLx 等）和微服务的常见选择。

## 我的评价

Axum 展现了 Rust Web 开发的成熟——它不追求"最快跑分"，而是追求"用 Rust 的类型系统让 Web 开发既安全又愉悦"。它的"提取器"设计尤其巧妙：把"从请求里拿数据"变成类型声明，编译期就能发现错误。它有 Tokio 官方血统、复用 Tower 生态，体现了一个健康生态的协作之美：**新框架不必从零造轮子，而是站在成熟的运行时和中间件生态之上**。
