---
name: Apache Hadoop
tagline: 大数据时代的开创者，分布式存储与计算的奠基之作
category: 大数据
foundation: Apache
language: Java
born: 2006
era: Web2.0
stars: 15k+
depth: seed
repo: https://github.com/apache/hadoop
website: https://hadoop.apache.org
tags: [大数据, 分布式存储, MapReduce]
updated: 2026-07-12
---

## 一句话定位

Hadoop 是开启"大数据时代"的开源框架，用 HDFS（分布式文件系统）解决海量数据存储，用 MapReduce 解决海量数据的分布式计算，让普通商用服务器集群也能处理 PB 级数据。

## 诞生背景

2006 年，Doug Cutting 受 Google 三篇论文（GFS、MapReduce、BigTable）启发创造。它把 Google 处理海量数据的思想开源化、平民化，直接催生了整个大数据产业。

## 核心架构

- **HDFS**：分布式文件系统，数据分块存储在多节点，多副本容错
- **MapReduce**：分而治之的计算模型（Map 分解 → Reduce 汇总）
- **YARN**：资源调度与管理（Hadoop 2.0 引入）
- **生态**：Hive、HBase、Spark 等都构建在其上

## 关键设计决策

1. **移动计算而非移动数据**：把计算任务发到数据所在节点，避免海量数据网络传输。
2. **容错设计**：假设硬件必然故障，通过数据多副本和任务重试保证可靠。
3. **横向扩展**：用大量廉价机器替代昂贵的大型机。

## 生态位置

大数据生态的鼻祖与基石。虽然计算层已大量被 Spark/Flink 取代，但 HDFS 和其生态思想影响深远。

## 我的评价

Hadoop 的历史意义无可替代——它把 Google 的大数据思想开源，让"处理海量数据"从巨头专利变成人人可用的能力，开创了一个产业。虽然 MapReduce 的批处理模型如今显得笨重，但"移动计算而非数据""拥抱硬件故障"这些理念，至今仍是分布式系统的基本原则。读懂 Hadoop，就读懂了大数据的起点。
