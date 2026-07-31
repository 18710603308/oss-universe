---
name: Elasticsearch
tagline: 分布式搜索与分析引擎，日志与全文检索的标杆
category: 数据库
language: Java
born: 2010
stars: 70k+
depth: seed
repo: https://github.com/elastic/elasticsearch
website: https://www.elastic.co
tags: [搜索引擎, 全文检索, 日志分析]
updated: 2026-07-18
---

## 一句话定位

Elasticsearch 是基于 Apache Lucene 构建的分布式搜索与分析引擎，以近实时的全文检索、强大的聚合分析和水平扩展能力，成为日志分析（ELK Stack）和搜索场景的事实标准。

## 诞生背景

2010 年 Shay Banon 发布，为 Lucene 加上了分布式、RESTful API 和易用性。它让"全文搜索"从专业领域变成了任何开发者都能用的能力。

## 核心架构

- **倒排索引**：Lucene 的核心，从"词 → 文档"的映射实现快速检索
- **分片（Shard）与副本**：数据分片分布式存储，副本保证高可用
- **近实时（NRT）**：文档写入后约 1 秒即可被搜索
- **聚合（Aggregation）**：强大的实时分析能力

## 关键设计决策

1. **RESTful + JSON**：所有操作通过 HTTP API，极大降低使用门槛。
2. **分布式优先**：从设计之初就考虑横向扩展。
3. **协议变更（2021）**：从 Apache 2.0 改为 SSPL/Elastic License，AWS 因此 fork 出 OpenSearch。

## 生态位置

搜索与日志分析领域的领导者。ELK Stack（Elasticsearch + Logstash + Kibana）是可观测性经典组合。竞品：OpenSearch（分支）、Meilisearch、Typesense（更轻）。

## 我的评价

Elasticsearch 是"把专业能力产品化"的典范——它没有发明倒排索引（Lucene 早有），而是把它包装成人人可用的分布式服务。而它与 AWS 的协议之争，则再次揭示了开源基础软件的商业化难题：当云厂商可以免费托管你的开源产品时，你如何生存？这是这个时代所有开源公司的必答题。
