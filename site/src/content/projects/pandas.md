---
name: Pandas
tagline: Python 数据分析的瑞士军刀，表格数据处理标准
category: 数据科学
foundation: NumFOCUS
language: Python
born: 2008
era: Web2.0
stars: 44k+
depth: seed
repo: https://github.com/pandas-dev/pandas
website: https://pandas.pydata.org
tags: [数据分析, DataFrame, 表格, ETL]
updated: 2026-06-15
---

## 一句话定位

Pandas 是 Python 数据分析的核心库，提供 DataFrame（二维表格）数据结构和丰富的清洗、转换、聚合、合并操作，是数据科学家处理结构化数据的事实标准工具。

## 诞生背景

2008 年由 Wes McKinney 在对冲基金工作时创建，为了在 Python 里高效处理金融时间序列与表格数据。它填补了 Python 缺少"类 R 的 data.frame / 类 Excel 表格"处理能力的空白。

## 核心架构

- **DataFrame**：带行列标签的二维表格，核心数据结构
- **Series**：带索引的一维数组
- **基于 NumPy**：底层用 NumPy 数组，兼顾性能
- **丰富操作**：筛选、分组聚合（groupby）、合并（merge）、透视、时间序列
- **多格式 IO**：CSV、Excel、SQL、Parquet 等读写

## 关键设计决策

1. **DataFrame 抽象**：把"带标签的表格"作为一等数据结构，贴合数据分析的心智。
2. **建立在 NumPy 之上**：复用 NumPy 的高效数组，专注于表格语义。
3. **表达力优先**：链式、声明式的 API 让复杂数据变换简洁可读。

## 生态位置

Python 数据分析的绝对标准（NumFOCUS 项目）。数据科学工作流的核心。新兴挑战者：Polars（Rust 编写、更快）、DuckDB（SQL 分析）。三者常配合使用。

## 我的评价

Pandas 定义了"用代码做数据分析"的交互范式——DataFrame 成了数据人思考问题的通用语言，就像 SQL 之于数据库。虽然它因 API 庞杂、性能瓶颈而受到 Polars 等新秀挑战，但它开创的"DataFrame 心智模型"已深入人心。理解 Pandas，是踏入数据科学的第一步。
