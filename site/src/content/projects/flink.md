---
name: Apache Flink
tagline: 流批一体的分布式计算引擎，真正的流处理之王
category: 大数据
foundation: Apache
language: Java/Scala
born: 2014
era: 云计算
stars: 24k+
depth: seed
repo: https://github.com/apache/flink
website: https://flink.apache.org
tags: [流处理, 流批一体, 有状态计算]
updated: 2026-07-04
---

## 一句话定位

Apache Flink 是一个分布式流处理引擎，以「流是第一等公民」的理念，提供低延迟、高吞吐、精确一次（exactly-once）的有状态计算，是实时数据处理领域的标杆。

## 诞生背景

源自 2010 年柏林工业大学的 Stratosphere 项目，2014 年成为 Apache 顶级项目。当时 Spark 以「微批」模拟流处理，延迟受限。Flink 从底层就是「真流处理」，把批看作有界的流。

## 核心架构

- **DataStream API**：核心的流处理编程接口
- **有状态计算**：算子可维护状态，支持窗口、聚合
- **Checkpoint 机制**：基于分布式快照，实现精确一次语义
- **事件时间 + Watermark**：正确处理乱序数据
- **流批一体**：批处理是流处理的特例（有界流）

## 关键设计决策

1. **真流处理**：以流为基本模型（而非 Spark 的微批），实现毫秒级低延迟。
2. **精确一次 + 状态一致性**：Checkpoint 快照保证故障恢复后状态不丢不重。
3. **事件时间语义**：用 Watermark 处理乱序和延迟数据，结果正确可靠。

## 生态位置

实时流处理领域的领导者。与 Kafka（数据源）是黄金搭档。竞品：Spark Streaming（微批）、Storm（老一代）。国内阿里基于它做了 Blink 并回馈社区。

## 我的评价

Flink 与 Spark 的"流批之争"是一堂精彩的架构哲学课：Spark 从批出发用微批模拟流，Flink 从流出发把批看作有界流——**出发点的不同，决定了能力的边界**。Flink 证明了在实时性要求高的场景，"以流为本"的模型更为优雅和强大。理解 Watermark 和 Checkpoint，是掌握现代流计算的关键。
