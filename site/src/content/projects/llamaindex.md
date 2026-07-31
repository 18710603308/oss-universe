---
name: LlamaIndex
tagline: 专注 RAG 的数据框架，连接 LLM 与你的私有数据
category: AI/ML
language: Python
born: 2022
era: AI原生
stars: 37k+
depth: seed
repo: https://github.com/run-llama/llama_index
website: https://www.llamaindex.ai
tags: [RAG, 数据框架, 检索增强]
updated: 2026-07-08
---

## 一句话定位

LlamaIndex 是专注于「检索增强生成（RAG）」的数据框架，帮助开发者把私有数据（文档、数据库、API）接入大语言模型，构建能回答专有知识的 AI 应用。

## 诞生背景

2022 年（原名 GPT Index）诞生。LLM 有知识截止日期且不了解你的私有数据。RAG 通过"先检索相关资料，再让 LLM 基于资料回答"来解决，LlamaIndex 把这套数据管道做到了极致。

## 核心架构

- **Data Connectors**：从 PDF、Notion、数据库等数百种源加载数据
- **Index**：把数据切分、嵌入、组织成可检索的索引结构
- **Retriever**：从索引中检索与问题最相关的内容
- **Query Engine**：检索 + LLM 生成的问答接口
- **Agent**：在检索之上的多步推理

## 关键设计决策

1. **RAG 专精**：相比 LangChain 的大而全，LlamaIndex 聚焦"数据接入与检索"这一环，做深做透。
2. **丰富的索引结构**：向量索引、树索引、关键词索引等，适配不同检索需求。
3. **数据连接器生态**：LlamaHub 提供数百种数据源连接器。

## 生态位置

RAG 领域的代表框架。常与向量数据库（Milvus/Qdrant）、LLM（Ollama/OpenAI）配合。与 LangChain 既竞争又互补（LangChain 更全面，LlamaIndex 更专注检索）。

## 我的评价

LlamaIndex 与 LangChain 的分工，体现了工具生态"专精 vs 全能"的自然分化——当一个领域足够大，就会既有大而全的平台，也有小而美的专精工具。RAG 是当下 LLM 落地企业最务实的路径（让模型基于可信资料回答），理解 RAG 的数据管道，是 AI 应用工程的核心必修课。
