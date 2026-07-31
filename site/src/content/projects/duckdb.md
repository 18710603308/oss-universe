---
name: DuckDB
tagline: 嵌入式分析数据库，"数据分析界的 SQLite"
category: 数据库
language: C++
born: 2019
stars: 24k+
depth: seed
repo: https://github.com/duckdb/duckdb
website: https://duckdb.org
tags: [OLAP, 嵌入式, 列式存储, 分析]
updated: 2026-07-18
---

## 一句话定位

DuckDB 是一个进程内（in-process）的分析型数据库，被称为"数据分析界的 SQLite"——无需服务器，一个文件、一条 import 即可对本地数据做高性能的 OLAP 分析。

## 诞生背景

2019 年由荷兰 CWI 研究所推出。数据科学家常需在本地处理中大型数据集，用 Pandas 内存不够、用传统数据库又太重。DuckDB 填补了这个空白：嵌入式、零配置、专为分析优化。

## 核心架构

- **列式存储**：面向分析（OLAP）优化，与行存的 SQLite 相反
- **向量化执行**：批量处理数据列，充分利用 CPU 缓存与 SIMD
- **进程内运行**：作为库嵌入，无独立服务进程
- **直接查询文件**：可直接对 Parquet/CSV/JSON 执行 SQL

## 关键设计决策

1. **嵌入式 OLAP**：把"分析型数据库"做成一个可嵌入的库，无部署成本。
2. **向量化引擎**：借鉴学术界成果，单机分析性能极强。
3. **无缝对接生态**：与 Pandas、Polars、Arrow 无缝互操作。

## 生态位置

新一代本地数据分析利器，迅速成为数据科学工作流的标配。类比：SQLite（嵌入式 OLTP）→ DuckDB（嵌入式 OLAP）。

## 我的评价

DuckDB 的成功再次验证了"SQLite 模式"的威力——把一个通常需要重型服务器的能力（OLAP 分析）做成零配置的嵌入式库。它精准命中了"数据不够大到需要集群，但又大到 Pandas 吃力"的中间地带。找准被忽视的场景缝隙，是小团队做出爆款基础软件的关键。
