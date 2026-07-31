---
name: ClickHouse
tagline: 极速列式分析数据库，实时 OLAP 的性能怪兽
category: 数据库
language: C++
born: 2016
era: 云原生
stars: 38k+
depth: seed
repo: https://github.com/ClickHouse/ClickHouse
website: https://clickhouse.com
tags: [OLAP, 列式存储, 实时分析]
updated: 2026-06-23
---

## 一句话定位

ClickHouse 是俄罗斯 Yandex 开源的列式在线分析（OLAP）数据库，以惊人的查询速度著称，能在数十亿行数据上实现亚秒级聚合分析，是实时数据分析与可观测性场景的热门选择。

## 诞生背景

2016 年开源，源自 Yandex 处理 Web 分析（类似 Google Analytics）的内部系统。面对海量数据的实时聚合查询，传统行式数据库力不从心，ClickHouse 用列式存储 + 向量化执行把分析性能推向极致。

## 核心架构

- **列式存储**：按列存储，分析查询只读需要的列，I/O 大幅减少
- **向量化执行**：批量处理数据块，充分利用 CPU SIMD
- **数据压缩**：同列数据相似，压缩率极高
- **MergeTree 引擎**：核心存储引擎，支持稀疏索引与分区
- **分布式**：可水平扩展到集群

## 关键设计决策

1. **列式 + 向量化**：为分析查询而生的存储与执行模型，是其速度的根本。
2. **面向写入吞吐**：批量插入优化，适合日志、指标等海量追加场景。
3. **牺牲事务换分析性能**：不追求 OLTP 的强事务，专注 OLAP 的极致速度。

## 生态位置

实时 OLAP 数据库的性能标杆。常用于日志分析、可观测性后端、用户行为分析。竞品：Apache Doris、DuckDB（嵌入式）、Druid、传统数仓。

## 我的评价

ClickHouse 把"列式 + 向量化"这套 OLAP 理论做到了工程极致，速度快到常令人怀疑。它与 OLTP 数据库（如 PostgreSQL）的分野，本质是"读优化 vs 写优化""分析 vs 事务"的架构取舍——同一个"数据库"概念，因目标场景不同而演化出截然不同的内部结构。理解 OLTP 与 OLAP 的分野，是数据库选型的基本功。
