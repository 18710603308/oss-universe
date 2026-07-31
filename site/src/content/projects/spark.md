---
name: Apache Spark
tagline: 统一的大数据分析引擎，内存计算取代 MapReduce
category: 大数据
foundation: Apache
language: Scala
born: 2014
era: 云计算
stars: 40k+
depth: seed
repo: https://github.com/apache/spark
website: https://spark.apache.org
tags: [大数据, 内存计算, 批流一体]
updated: 2026-07-12
---

## 一句话定位

Apache Spark 是统一的大数据分析引擎，以内存计算大幅超越 Hadoop MapReduce 的性能，同时统一支持批处理、流处理、SQL、机器学习和图计算。

## 诞生背景

源自 2009 年 UC Berkeley AMPLab。MapReduce 每一步都要读写磁盘，迭代计算（如机器学习）极慢。Spark 提出用内存缓存中间结果（RDD），把某些任务的性能提升了数十倍。

## 核心架构

- **RDD**：弹性分布式数据集，Spark 的核心抽象，支持内存缓存与血缘恢复
- **DAG 调度**：把计算组织成有向无环图，优化执行
- **统一栈**：Spark SQL、Spark Streaming、MLlib、GraphX 共享同一引擎
- **多语言**：Scala、Java、Python(PySpark)、R

## 关键设计决策

1. **内存计算 + RDD**：中间结果驻留内存，迭代计算飞快；血缘（lineage）机制保证容错。
2. **统一引擎**：一套 API 覆盖批、流、SQL、ML，避免维护多套系统。
3. **惰性求值**：转换操作先记录不执行，遇到 action 才优化并触发计算。

## 生态位置

大数据计算引擎的主流之选。运行于 Hadoop YARN、Kubernetes 或独立集群。竞品：Flink（更强的流处理）、传统 MapReduce（已淘汰）。

## 我的评价

Spark 的成功源于一个精准的洞察：MapReduce 的磁盘瓶颈。它用 RDD + 内存计算这一核心创新，既大幅提速又保持了容错，还顺势用"统一引擎"整合了碎片化的大数据工具栈。它告诉我：找到前代方案最痛的那个瓶颈并优雅解决，就能实现代际超越。
