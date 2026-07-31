---
name: Milvus
tagline: 最早的开源向量数据库，为 AI 相似性检索而生
category: AI/ML
foundation: LF AI & Data
language: Go/C++
born: 2019
era: AI原生
stars: 30k+
depth: seed
repo: https://github.com/milvus-io/milvus
website: https://milvus.io
tags: [向量数据库, 相似性检索, RAG, 国产]
updated: 2026-07-08
---

## 一句话定位

Milvus 是 Zilliz 开源、后进入 LF AI & Data 基金会的向量数据库，专为海量向量（embedding）的相似性检索设计，是 RAG 和 AI 应用的关键基础设施。

## 诞生背景

2019 年发布，早于 LLM 热潮。AI 把图像、文本、音频都编码为高维向量（embedding），需要高效地在亿级向量中找"最相似的 K 个"。传统数据库无力应对，向量数据库应运而生。

## 核心架构

- **向量索引**：HNSW、IVF 等近似最近邻（ANN）算法
- **存算分离**：计算、存储、协调节点解耦，云原生可扩展
- **标量+向量混合检索**：既按向量相似度，也可加元数据过滤
- **多副本 / 分片**：支撑十亿级向量规模

## 关键设计决策

1. **专为向量而生**：不在传统数据库上打补丁，而是围绕 ANN 检索从头设计存储与索引。
2. **存算分离云原生**：借鉴现代数据库架构，弹性扩展。
3. **近似换性能**：用 ANN 近似最近邻牺牲极小精度，换取数量级的检索速度提升。

## 生态位置

向量数据库先驱与代表。RAG 应用的记忆层。竞品：Qdrant（Rust）、Weaviate、Chroma（轻量）、pgvector（PostgreSQL 扩展）。

## 我的评价

Milvus 的崛起是「AI 催生新基础设施」的典型——当 embedding 成为 AI 的通用语言，存储和检索向量就成了刚需，一个全新的数据库品类由此诞生。它提醒我关注：每一次计算范式的转变（如 AI），都会在基础设施层创造全新的机会。向量数据库就是 AI 时代的"新数据库"。
