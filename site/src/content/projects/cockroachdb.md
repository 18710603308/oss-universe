---
name: CockroachDB
tagline: 分布式 SQL 数据库，像蟑螂一样打不死的高可用
category: 数据库
language: Go
born: 2015
era: 云原生
stars: 30k+
depth: seed
repo: https://github.com/cockroachdb/cockroach
website: https://www.cockroachlabs.com
tags: [NewSQL, 分布式, 强一致, 高可用]
updated: 2026-06-03
---

## 一句话定位

CockroachDB 是受 Google Spanner 启发的分布式 SQL（NewSQL）数据库，兼容 PostgreSQL 协议，提供水平扩展、强一致性和跨区域的高可用，名字寓意"像蟑螂一样难以被杀死"的极强生存能力。

## 诞生背景

2015 年由前 Google 工程师创建，直接借鉴 Google Spanner 论文。目标是让普通企业也能用上"既能水平扩展、又保证强一致、还能跨地域容灾"的数据库，而不必像传统方案那样在扩展性和一致性间痛苦取舍。

## 核心架构

- **分布式 KV + SQL 层**：底层分布式 KV 存储，上层 PostgreSQL 兼容的 SQL
- **Raft 共识**：数据分片（Range）用 Raft 复制，保证强一致
- **分布式事务**：支持跨节点的可串行化事务
- **PostgreSQL 兼容**：复用 PG 生态与工具
- **多区域部署**：数据可按地域分布，就近读写 + 容灾

## 关键设计决策

1. **Spanner 理念平民化**：把 Google Spanner 的"全球分布 + 强一致"能力做成开源可自托管的产品。
2. **PostgreSQL 兼容**：不自造协议，复用 PG 生态降低迁移成本。
3. **强一致 + 高可用**：用 Raft + 分布式事务，在扩展的同时坚持强一致（CP 倾向）。

## 生态位置

NewSQL 代表之一，与 TiDB（兼容 MySQL）形成"双雄"——CockroachDB 兼容 PostgreSQL、TiDB 兼容 MySQL，理念相近（都源自 Spanner）。竞品：传统分库分表、云托管分布式数据库。

## 我的评价

CockroachDB 与 TiDB 是同一场"把 Spanner 平民化"运动的两面——一个选 PostgreSQL 生态、一个选 MySQL 生态，殊途同归地追求"可扩展的强一致 SQL"。它们的出现，标志着数据库领域走出了"要扩展性就得放弃 SQL 和强一致"的旧困局。理解 NewSQL 如何调和"扩展性、一致性、SQL"这三者，是理解现代分布式数据库的关键。
