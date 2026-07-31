---
name: Loki
tagline: 像 Prometheus 一样的日志系统，只索引标签不索引全文
category: 可观测性
foundation: 独立
language: Go
born: 2018
era: 云原生
stars: 24k+
depth: seed
repo: https://github.com/grafana/loki
website: https://grafana.com/oss/loki
tags: [日志, 可观测性, 标签索引, Grafana]
updated: 2026-06-13
---

## 一句话定位

Loki 是 Grafana Labs 开源的日志聚合系统，设计理念是"像 Prometheus 一样处理日志"——只对日志的标签建索引、不索引全文内容，从而以极低的成本实现大规模日志存储与查询。

## 诞生背景

2018 年发布。Elasticsearch 类日志方案对全文建立倒排索引，功能强大但存储与资源成本高昂。Loki 的洞察：在云原生环境，日志大多按"标签 + 时间"检索，全文索引往往是浪费。

## 核心架构

- **标签索引**：只索引标签（如 app、pod），不索引日志正文
- **对象存储**：日志块直接存 S3 等廉价对象存储
- **LogQL**：类 PromQL 的日志查询语言
- **与 Prometheus 一致的标签模型**：同一套标签体系贯通指标与日志
- **Grafana 集成**：在同一仪表盘关联指标与日志

## 关键设计决策

1. **只索引标签**：放弃昂贵的全文索引，用"标签定位 + 暴力扫描小范围"大幅降低成本。
2. **复用 Prometheus 心智**：标签模型和 LogQL 与 Prometheus 一致，指标与日志无缝关联。
3. **对象存储后端**：把日志块存到廉价对象存储，成本随规模优雅扩展。

## 生态位置

云原生日志的代表（可观测性三支柱之"日志"）。属于 Grafana 的 LGTM 栈（Loki 日志 + Grafana + Tempo 追踪 + Mimir 指标）。竞品：ELK/Elasticsearch（全文索引，功能强但重）。

## 我的评价

Loki 是"重新审视需求，砍掉不必要成本"的典范——它质疑了"日志系统必须全文索引"这一默认假设，发现云原生场景下大多按标签检索，于是砍掉最昂贵的全文索引，用一个务实的取舍换来了数量级的成本下降。它诠释了工程的精髓：不是做得更多，而是精准地做得更少。
