---
name: MongoDB
tagline: 最流行的文档型 NoSQL 数据库
category: 数据库
language: C++
born: 2009
era: Web2.0
stars: 27k+
depth: seed
repo: https://github.com/mongodb/mongo
website: https://www.mongodb.com
tags: [NoSQL, 文档数据库, BSON]
updated: 2026-07-18
---

## 一句话定位

MongoDB 是最流行的文档型数据库，以灵活的 JSON 风格文档（BSON）存储数据，无需预定义 schema，特别适合快速迭代的应用开发。

## 诞生背景

2009 年由 10gen 公司（后更名 MongoDB Inc.）推出，正值 Web 2.0 与敏捷开发兴起，关系型数据库的固定 schema 成为迭代障碍。MongoDB 以"文档模型"迎合了这一需求。

## 核心架构

- **文档（Document）**：BSON 格式，可嵌套，对应对象
- **集合（Collection）**：文档的容器，无固定 schema
- **副本集（Replica Set）**：主从复制，实现高可用
- **分片（Sharding）**：水平扩展海量数据

## 关键设计决策

1. **灵活 schema**：字段可随时增减，契合快速迭代（也带来数据一致性挑战）。
2. **文档即聚合**：相关数据存在一个文档里，减少 join，读取高效。
3. **SSPL 协议**：2018 年从 AGPL 改为 SSPL，引发开源界争议（云厂商托管之争）。

## 生态位置

NoSQL 文档数据库标杆。常用于内容管理、实时分析、物联网。竞品：CouchDB、以及各类文档能力的多模型数据库。

## 我的评价

MongoDB 的兴衰反映了技术潮流的钟摆——它乘着"schema-less"的东风崛起，但随着应用复杂化，人们重新意识到 schema 与事务的价值（MongoDB 也补上了事务支持）。它的协议变更（SSPL）更是开源商业化困境的标志性事件，值得每个关注开源可持续性的人研究。
