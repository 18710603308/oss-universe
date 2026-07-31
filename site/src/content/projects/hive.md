---
name: Hive
tagline: SQL on Hadoop，让分析师也能用大数据
category: 大数据
foundation: Apache
language: Java
born: 2010
era: 云计算
stars: 5k+
depth: seed
repo: https://github.com/apache/hive
website: https://hive.apache.org
tags: [数据仓库, SQL, Hadoop, 大数据]
updated: 2026-05-08
---

## 一句话定位

Hive 是构建在 Hadoop 之上的数据仓库工具，让用户用熟悉的 SQL（HiveQL）查询存储在 HDFS 上的海量数据，把复杂的 MapReduce 编程隐藏在 SQL 之下，极大降低了大数据分析的门槛。

## 诞生背景

2010 年由 Facebook 开源。早期用 Hadoop 分析数据必须手写 MapReduce Java 程序，门槛高、开发慢，数据分析师根本无法参与。Hive 让人们用 SQL 就能查 Hadoop 数据，把大数据从工程师专属变成了分析师也能用的工具。

## 核心架构

- **HiveQL**：类 SQL 查询语言，自动翻译成底层计算任务
- **元数据存储（Metastore）**：管理表结构与分区信息（影响深远，被众多引擎复用）
- **可插拔执行引擎**：MapReduce / Tez / Spark
- **表与分区**：给 HDFS 上的文件赋予表结构
- **UDF**：自定义函数扩展

## 关键设计决策

1. **SQL 抽象大数据**：用人人会的 SQL 屏蔽 MapReduce 复杂性，让大数据分析平民化。
2. **Metastore 元数据层**：把"文件"映射为"表"的元数据服务，成了大数据生态的事实标准（Presto/Spark 都复用）。
3. **执行引擎可换**：查询逻辑与执行引擎解耦，可从 MapReduce 升级到更快的 Tez/Spark。

## 生态位置

大数据数据仓库的开创者。它的 Metastore 成为整个生态的元数据基石。后续更快的查询引擎（Presto/Trino、Spark SQL、Impala）大多兼容 Hive 元数据。是"SQL on 大数据"这条路线的鼻祖。

## 我的评价

Hive 做了一件影响深远的事——用 SQL 这个"通用语"给大数据装上了亲民的入口。它证明了：**降低使用门槛，往往比提升性能更能扩大一项技术的影响力**。它最持久的遗产其实是 Metastore：一个把文件变成"表"的元数据抽象，至今仍是 Trino、Spark 等现代引擎的共同地基。有时候，一个不起眼的抽象层，比查询速度更重要。
