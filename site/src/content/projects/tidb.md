---
name: TiDB
tagline: 国产分布式 NewSQL 数据库，兼容 MySQL 又能水平扩展
category: 数据库
language: Go/Rust
born: 2015
stars: 37k+
depth: seed
repo: https://github.com/pingcap/tidb
website: https://www.pingcap.com
tags: [NewSQL, 分布式, HTAP, 国产]
updated: 2026-07-18
---

## 一句话定位

TiDB 是 PingCAP 开源的分布式 NewSQL 数据库，兼容 MySQL 协议，同时具备水平扩展、强一致性和 HTAP（混合事务分析）能力，是中国开源数据库的代表作。

## 诞生背景

2015 年，面对 MySQL 单机容量瓶颈与分库分表的运维痛苦，PingCAP 借鉴 Google Spanner/F1 论文，用 Go 和 Rust 从零构建了一个"既能扩展又兼容 MySQL"的数据库。

## 核心架构

- **TiDB Server**：无状态 SQL 层，兼容 MySQL 协议
- **TiKV**：分布式事务型 KV 存储（Rust，已成 CNCF 毕业项目）
- **PD（Placement Driver）**：集群大脑，负责调度与元信息
- **TiFlash**：列存引擎，支撑实时分析（HTAP 的关键）

## 关键设计决策

1. **存算分离**：SQL 计算层与 KV 存储层解耦，各自独立扩展。
2. **Raft 一致性**：基于 Raft 协议保证多副本强一致。
3. **HTAP 一体**：行存（TiKV）+ 列存（TiFlash）在同一系统内，事务与分析不再分离。

## 生态位置

NewSQL 代表。中国最成功的开源基础软件之一，TiKV 更是进入 CNCF 毕业项目。竞品：CockroachDB（同类理念）、Vitess（MySQL 分片）。

## 我的评价

TiDB 证明了中国团队有能力做世界级的开源基础软件。它把 Spanner 论文的思想落地为兼容 MySQL 生态的产品，走了一条"理论创新 + 生态兼容"的务实路线。TiKV 进入 CNCF 毕业项目，是中国开源在全球治理体系中获得认可的标志性事件。
