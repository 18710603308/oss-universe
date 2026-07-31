---
name: HBase
tagline: Hadoop 上的分布式 NoSQL，海量随机读写
category: 大数据
foundation: Apache
language: Java
born: 2008
era: 云计算
stars: 5k+
depth: seed
repo: https://github.com/apache/hbase
website: https://hbase.apache.org
tags: [NoSQL, 宽列存储, Hadoop, 大数据]
updated: 2026-05-08
---

## 一句话定位

HBase 是构建在 Hadoop HDFS 之上的分布式、面向列的 NoSQL 数据库，模仿 Google BigTable 论文实现，为海量数据提供实时随机读写能力，弥补了 Hadoop 只能批处理、不擅随机访问的短板。

## 诞生背景

2008 年发布，源自 Google 的 BigTable 论文。Hadoop 的 MapReduce 擅长批处理，但无法支持"根据 key 实时读写某一行"的场景。HBase 在 HDFS 之上建立了一个可随机访问的宽列存储，补齐了 Hadoop 生态的实时读写能力。

## 核心架构

- **宽列模型**：行键 + 列族，稀疏、可动态加列
- **基于 HDFS**：数据存储在 HDFS 上，继承其可靠与扩展
- **Region 分片**：表按行键范围切成 Region，分布到集群
- **LSM 树存储**：写入先入内存 + WAL，后合并落盘，写吞吐高
- **强一致性**：单行操作强一致

## 关键设计决策

1. **BigTable 落地**：把 Google 的宽列存储论文开源实现，惠及整个大数据生态。
2. **建于 HDFS 之上**：复用 Hadoop 的存储底座，专注解决"随机读写"这一层。
3. **LSM 写优化**：面向海量写入优化，适合日志、时序、消息等场景。

## 生态位置

Hadoop 生态的 NoSQL 组件。与 Cassandra（去中心化、无 HDFS 依赖）同为宽列存储的代表，但架构路线不同：HBase 依赖 HDFS + 主从，Cassandra 去中心化。常用于需要海量随机读写 + 已有 Hadoop 环境的场景。

## 我的评价

HBase 是"论文驱动开源"的又一典范——它把 Google BigTable 的思想开源落地，让普通企业也能拥有海量随机读写的能力。它和 HDFS、Hive、Spark 共同构成了 Hadoop 生态的拼图，各补一块短板。它与 Cassandra 的架构分歧（中心化 vs 去中心化）也是分布式系统设计的经典对照，值得细品。
