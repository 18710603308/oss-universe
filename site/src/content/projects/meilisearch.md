---
name: Meilisearch
tagline: 开箱即用的即时搜索引擎，为体验而生
category: 搜索引擎
language: Rust
born: 2018
era: 云原生
stars: 47k+
depth: seed
repo: https://github.com/meilisearch/meilisearch
website: https://www.meilisearch.com
tags: [搜索引擎, 即时搜索, Rust, 容错]
updated: 2026-06-14
---

## 一句话定位

Meilisearch 是用 Rust 编写的开源搜索引擎，主打"开箱即用"和"毫秒级即时搜索"，内置容错（错别字）、前缀搜索、高亮等体验特性，让开发者几分钟就能为应用加上一流的搜索体验。

## 诞生背景

2018 年发布。Elasticsearch 功能强大但重、配置复杂，对于"给网站/应用加个好用搜索框"这种常见需求属于杀鸡用牛刀。Meilisearch 聚焦"面向终端用户的即时搜索"，把易用和体验做到极致。

## 核心架构

- **Rust 编写**：单二进制、低资源、高性能
- **即时搜索（search-as-you-type）**：每次按键返回结果，毫秒级响应
- **容错（typo-tolerance）**：自动纠正拼写错误
- **相关性排序**：开箱即用的合理排序，也可自定义规则
- **简单 API**：RESTful，几行代码接入

## 关键设计决策

1. **体验优先**：默认就有容错、前缀、高亮等"好搜索"特性，无需调参。
2. **开箱即用**：极简配置，对比 Elasticsearch 的重量级，主打轻快易上手。
3. **聚焦而非全能**：专注面向用户的即时搜索，不做日志分析等重型场景。

## 生态位置

轻量搜索引擎的代表。竞品：Elasticsearch/OpenSearch（重、全能、日志分析）、Typesense（同类轻量）、Algolia（商业 SaaS）。Meilisearch 以"易用 + 体验"切入 ES 覆盖不到的轻量场景。

## 我的评价

Meilisearch 是"细分定位"的胜利——它不与 Elasticsearch 拼全能，而是精准锁定"给应用加个好用搜索框"这个高频却被 ES 过度复杂化的需求。它证明了：在一个被重型方案主导的领域，用"轻、快、开箱即用"重新定义一个细分场景，同样能开辟广阔天地。这与 Gitea 之于 GitLab、Caddy 之于 Nginx 是同一种智慧。
