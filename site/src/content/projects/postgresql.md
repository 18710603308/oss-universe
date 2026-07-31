---
name: PostgreSQL
tagline: 世界上最先进的开源关系型数据库
category: 数据库
language: C
born: 1996
era: Web2.0
stars: 16k+
depth: seed
repo: https://github.com/postgres/postgres
website: https://www.postgresql.org
tags: [关系型数据库, SQL, ACID]
updated: 2026-07-25
---

## 一句话定位

PostgreSQL 是一个功能强大、标准兼容、可扩展的开源对象关系型数据库，以稳定性、正确性和丰富特性著称，被誉为「最先进的开源数据库」。

## 诞生背景

起源于 1986 年 UC Berkeley 的 POSTGRES 项目（Michael Stonebraker 主导）。1996 年加入 SQL 支持并更名 PostgreSQL，由全球社区以自由的 PostgreSQL License 维护至今。

## 核心架构

- **进程模型**：每个连接一个后端进程（非线程）
- **MVCC**：多版本并发控制，读写不互相阻塞
- **WAL**：预写日志保证持久性与崩溃恢复
- **可扩展性**：自定义类型、函数、索引方法、扩展（如 PostGIS、pgvector）

## 关键设计决策

1. **正确性优先**：严格遵循 SQL 标准与 ACID，宁可慢也不出错。
2. **可扩展架构**：扩展机制让它能变身地理数据库（PostGIS）、向量数据库（pgvector），生命力极强。
3. **MVCC 并发**：读不阻塞写、写不阻塞读，高并发下表现优异。

## 生态位置

现代应用后端数据库首选之一。Supabase、Neon 等 Serverless 数据库都基于它。竞品：MySQL/MariaDB（更轻）、各类 NewSQL。

## 快速上手

```bash
docker run -e POSTGRES_PASSWORD=pass -p 5432:5432 postgres
psql -h localhost -U postgres
```

## 我的评价

PostgreSQL 是「长期主义」的典范 —— 近 40 年持续演进，靠严谨的工程文化和可扩展架构，从学术项目成长为现代数据基础设施。它的可扩展设计（尤其 pgvector 让它在 AI 时代焕发新生）证明：好的架构能让软件跨越技术周期。
