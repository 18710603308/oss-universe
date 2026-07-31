---
name: Vector
tagline: 高性能的可观测性数据管道
category: 可观测性
foundation: Datadog
language: Rust
born: 2019
era: 云原生
stars: 18k+
depth: seed
repo: https://github.com/vectordotdev/vector
website: https://vector.dev
tags: [日志管道, 可观测性, Rust, 数据采集]
updated: 2026-03-27
---

## 一句话定位

Vector 是用 Rust 编写的高性能可观测性数据管道，统一采集、转换、路由日志、指标和追踪数据，把它们从各种来源高效、可靠地送往各种目的地，是可观测性数据"采集与传输层"的现代方案。

## 诞生背景

2019 年发布（后被 Datadog 收购但保持开源）。可观测性数据（日志/指标/追踪）来源和去向繁多，传统采集器（Logstash、Fluentd）性能有限、资源占用大。Vector 用 Rust 追求极致性能和低资源占用，做一个统一、快速的可观测数据管道。

## 核心架构

- **Source-Transform-Sink**：采集源 → 转换处理 → 发送目的地的管道模型
- **统一日志/指标/追踪**：一个工具处理三类可观测数据
- **Rust 高性能**：吞吐高、内存占用低，适合边缘和大规模
- **VRL 转换语言**：专用的 Vector Remap Language 做数据转换
- **可靠性**：端到端确认、磁盘缓冲防丢失

## 关键设计决策

1. **性能优先**：用 Rust 做到高吞吐、低占用，直击 Logstash/Fluentd 的性能痛点。
2. **统一三类数据**：日志、指标、追踪一个管道搞定，简化可观测性架构。
3. **厂商中立**：不锁定后端，可把数据送往任意目的地，避免绑定。

## 生态位置

可观测性数据管道的现代代表。与 Fluentd/Fluent Bit（CNCF、老牌）、Logstash（ELK 栈）竞争同一环节。它处于可观测性架构的"采集传输层"，上游连各种数据源，下游接 Loki、Elasticsearch、Prometheus 等存储/分析后端。

## 我的评价

Vector 又是一个"用 Rust 重做基础设施组件"的成功案例——可观测性数据管道是个吃性能的活（海量日志/指标要实时处理转发），而 Logstash（JVM）、Fluentd（Ruby）都受限于实现语言。Vector 用 Rust 把这一层的性能和资源效率提上新台阶。它和 ScyllaDB、Nushell 一样，印证了 Rust 正在系统级基础设施领域全面开花——**性能敏感的底层组件，正迎来一轮 Rust 重写潮**。
