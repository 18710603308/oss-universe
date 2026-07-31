---
name: Apache Pulsar
tagline: 云原生分布式消息与流平台，存算分离的新一代设计
category: 消息与流处理
foundation: Apache
language: Java
born: 2016
era: 云原生
stars: 14k+
depth: seed
repo: https://github.com/apache/pulsar
website: https://pulsar.apache.org
tags: [消息, 流处理, 存算分离, 多租户]
updated: 2026-06-01
---

## 一句话定位

Apache Pulsar 是 Yahoo 开源、后成为 Apache 顶级项目的云原生分布式消息与流平台，以存算分离架构、原生多租户和统一的队列+流模型，成为 Kafka 之外的重要选择。

## 诞生背景

2016 年开源。Kafka 把计算与存储耦合在 Broker 上，扩容时需搬迁数据。Pulsar 借鉴新一代架构，把消息服务（Broker）与存储（BookKeeper）分离，让二者独立扩展，更契合云环境的弹性。

## 核心架构

- **存算分离**：Broker 无状态处理消息，存储交给 Apache BookKeeper
- **分层存储**：冷数据可卸载到对象存储，降低成本
- **多租户**：原生支持租户/命名空间隔离
- **统一模型**：同时支持消息队列（如 RabbitMQ）与流（如 Kafka）语义
- **Pulsar Functions**：轻量流处理

## 关键设计决策

1. **存算分离**：Broker 无状态、存储独立，扩容不搬数据，弹性远优于 Kafka 的耦合架构。
2. **队列 + 流统一**：一个平台同时覆盖两种消息范式，减少技术栈碎片。
3. **原生多租户**：从设计之初支持多租户隔离，适合平台化部署。

## 生态位置

新一代云原生消息平台，Kafka 的主要竞争者。与 Kafka 的对比是架构哲学之争：Kafka 存算耦合（成熟、生态大），Pulsar 存算分离（弹性、多租户）。也与 RabbitMQ（灵活路由）、NATS（轻量）同属消息领域。

## 我的评价

Pulsar 与 Kafka 的"存算分离 vs 存算耦合"之争，是分布式系统架构演进的一个缩影——随着云与对象存储的成熟，"计算无状态、存储可独立扩展"成为越来越主流的设计范式（数据库领域的 TiDB、Neon 也是同理）。它体现了一条趋势：云原生时代，解耦计算与存储往往能换来更好的弹性与成本效率。
