---
name: InfluxDB
tagline: 专为时序数据而生的数据库，监控与 IoT 的存储
category: 数据库
language: Go/Rust
born: 2013
era: 云计算
stars: 29k+
depth: seed
repo: https://github.com/influxdata/influxdb
website: https://www.influxdata.com
tags: [时序数据库, 监控, IoT, TSDB]
updated: 2026-05-10
---

## 一句话定位

InfluxDB 是专为时间序列数据设计的数据库，针对"带时间戳的指标/事件"这类高写入、按时间查询的场景深度优化，广泛用于监控、IoT 传感器、实时分析等领域，是时序数据库（TSDB）的代表。

## 诞生背景

2013 年发布。监控指标、IoT 传感器读数、金融行情等数据都有共同特点：海量按时间追加写入、按时间范围聚合查询。通用数据库处理这类负载效率低，InfluxDB 应运而生，专为时序优化。

## 核心架构

- **时序优化存储**：按时间组织、高压缩比的存储引擎
- **Measurement/Tag/Field**：类似"表 + 索引标签 + 数值"的数据模型
- **高写入吞吐**：为海量追加写入优化
- **数据保留策略**：自动过期旧数据（downsampling）
- **查询语言**：InfluxQL / Flux（后续版本用 Rust 重写引擎）

## 关键设计决策

1. **专为时序优化**：围绕"时间戳数据"重新设计存储与索引，而非在通用库上打补丁。
2. **标签索引 + 数值分离**：类似 Prometheus 的多维模型，利于按维度聚合。
3. **自动降采样与过期**：时序数据越旧越不需要高精度，内建保留策略节省空间。

## 生态位置

时序数据库的代表之一。常用于监控栈（与 Grafana 搭配可视化）、IoT。竞品：Prometheus（云原生监控，拉取式）、TimescaleDB（PostgreSQL 时序扩展）、ClickHouse（也可做时序）。

## 我的评价

InfluxDB 是"专用数据库"思路的又一例证——当某类数据（时序）有鲜明的访问模式，为它量身设计的专用数据库会远胜通用方案。它和 Prometheus 的关系也很有意思：Prometheus 侧重"监控采集 + 告警"，InfluxDB 侧重"通用时序存储"，二者常互补。它印证了数据库世界"按数据形状分化"的大趋势（关系/文档/图/向量/时序各擅其场）。
