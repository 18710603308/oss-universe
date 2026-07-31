---
name: Airbyte
tagline: 开源数据集成平台，连接万物到数据仓库
category: 大数据
language: Java/Python
born: 2020
era: 云原生
stars: 16k+
depth: seed
repo: https://github.com/airbytehq/airbyte
website: https://airbyte.com
tags: [数据集成, ELT, 连接器, 数据管道]
updated: 2026-04-16
---

## 一句话定位

Airbyte 是开源的数据集成（EL）平台，提供数百个预制连接器，把各种数据源（数据库、SaaS API、文件等）的数据抽取并加载到数据仓库/湖中，解决"把散落各处的数据汇聚到一起"这一数据工程的第一步。

## 诞生背景

2020 年发布。企业数据分散在几十上百个系统里（数据库、Salesforce、Stripe、Google Analytics……），要分析必须先把它们汇聚到数据仓库。商业方案（Fivetran）昂贵且连接器封闭，Airbyte 用开源 + 社区共建连接器打破了这一局面。

## 核心架构

- **连接器生态**：数百个 Source/Destination 连接器，社区可贡献
- **EL 聚焦**：负责抽取（Extract）和加载（Load），转换交给 dbt
- **增量同步 / CDC**：支持增量与变更数据捕获
- **连接器开发套件（CDK）**：低门槛开发自定义连接器
- **可自托管 / 云**：开源自建或用托管版

## 关键设计决策

1. **开源连接器共建**：把连接器做成社区可贡献的生态，用开放性对抗商业方案的封闭与昂贵。
2. **专注 EL**：只做抽取和加载，转换交给 dbt——各司其职，组合成现代数据栈。
3. **CDK 降低门槛**：提供开发套件，让长尾数据源的连接器也能被社区补齐。

## 生态位置

现代数据栈"数据集成"环节的开源代表。与 dbt（转换 T）、Snowflake/BigQuery（仓库）、Airflow（编排）组合成完整数据管道。竞品：Fivetran（商业、连接器质量高）、Singer（开源标准）、Meltano。

## 我的评价

Airbyte 与 dbt 是现代数据栈的黄金搭档——Airbyte 负责"把数据搬进来（EL）"，dbt 负责"把数据整理好（T）"，共同构成 ELT。Airbyte 的核心洞察是：**数据集成的痛点不在技术难度，而在连接器的"长尾覆盖"**——世界上有无数种数据源，没有一家公司能全部支持。它用开源社区共建连接器破解了这个规模难题，这正是开源协作最擅长的事。
