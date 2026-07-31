---
name: Qdrant
tagline: Rust 编写的高性能向量数据库，为 AI 检索而生
category: 数据库
language: Rust
born: 2021
era: AI原生
stars: 21k+
depth: seed
repo: https://github.com/qdrant/qdrant
website: https://qdrant.tech
tags: [向量数据库, 相似性检索, Rust, RAG]
updated: 2026-05-15
---

## 一句话定位

Qdrant 是用 Rust 编写的高性能向量数据库与相似性搜索引擎，专为 AI 应用的向量检索设计，以出色的性能、丰富的过滤能力和易用的 API，成为 RAG、推荐、语义搜索等场景的热门选择。

## 诞生背景

2021 年发布，正值 embedding 与向量检索需求上升。AI 把万物编码为向量后，需要在海量向量中快速找相似项。Qdrant 用 Rust 的性能优势 + 现代 API，切入这个被 Milvus 等开创的向量数据库赛道。

## 核心架构

- **HNSW 索引**：高效的近似最近邻（ANN）算法
- **Payload 过滤**：向量检索时结合元数据条件过滤（混合检索）
- **Rust 实现**：内存安全 + 高性能
- **量化压缩**：标量/乘积量化降低内存占用
- **云原生**：单机、分布式、云托管多形态

## 关键设计决策

1. **Rust 高性能**：用 Rust 兼得性能与内存安全，契合"向量检索"这种计算密集场景。
2. **向量 + 过滤一体**：支持在相似度检索的同时按 payload 元数据过滤，满足真实业务需求。
3. **开发者友好**：简洁的 REST/gRPC API 与丰富客户端，降低接入门槛。

## 生态位置

向量数据库的主流之一。竞品：Milvus（最早、功能全）、Weaviate、Chroma（轻量）、pgvector（PostgreSQL 扩展）。常与 LangChain/LlamaIndex、Ollama 等构成 RAG 技术栈的"记忆层"。

## 我的评价

Qdrant 是"Rust 重写浪潮 + AI 新需求"的交汇产物——它踩中了 embedding 检索这个 AI 时代的新刚需，又用 Rust 拿到了性能与安全优势。向量数据库赛道的热闹（Milvus/Qdrant/Weaviate/pgvector 各有拥趸）本身就说明：**每一次计算范式的转变（AI），都会在基础设施层催生一整个新品类的竞争**。
