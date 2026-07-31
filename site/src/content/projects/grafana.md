---
name: Grafana
tagline: 最流行的可观测性可视化平台，一切数据皆可仪表盘
category: 可观测性
language: TypeScript/Go
born: 2014
era: 云原生
stars: 65k+
depth: seed
repo: https://github.com/grafana/grafana
website: https://grafana.com
tags: [可视化, 仪表盘, 监控]
updated: 2026-07-14
---

## 一句话定位

Grafana 是开源的可观测性与数据可视化平台，能接入 Prometheus、Loki、Elasticsearch 等数十种数据源，把指标、日志、链路统一成漂亮的交互式仪表盘。

## 诞生背景

2014 年由 Torkel Ödegaard 从 Kibana fork 而来。当时监控数据的可视化工具割裂，Grafana 提出「数据源无关」的统一可视化层，让任何时序数据都能在一个面板中呈现。

## 核心架构

- **Data Source 插件**：统一接入 Prometheus、Loki、MySQL、CloudWatch 等
- **Panel**：图表单元（折线、热力、表格等）
- **Dashboard**：面板的组合，可变量化、可分享
- **Alerting**：统一的告警引擎
- **LGTM Stack**：Loki(日志)+Grafana+Tempo(追踪)+Mimir(指标) 的可观测性全家桶

## 关键设计决策

1. **数据源无关**：Grafana 本身不存储数据，只做可视化，通过插件对接任意后端。
2. **仪表盘即代码**：Dashboard 可导出为 JSON，版本化管理。
3. **可观测性大一统**：从单纯的指标可视化，扩展为 Metrics/Logs/Traces 三支柱统一平台。

## 生态位置

可观测性可视化的绝对领导者。与 Prometheus 是黄金搭档。自研 Loki（日志）、Tempo（追踪）构建完整生态。

## 我的评价

Grafana 精准卡位在"可视化层"这个数据源与用户之间的枢纽——它不与任何数据库竞争存储，而是做所有数据库的展示窗口，从而与整个生态共赢而非零和竞争。这种"做连接层而非替代者"的定位智慧，是它能兼容并蓄、长盛不衰的关键。
