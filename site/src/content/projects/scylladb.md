---
name: ScyllaDB
tagline: 用 C++ 重写的 Cassandra，榨干硬件性能
category: 数据库
language: C++
born: 2015
era: 云原生
stars: 14k+
depth: seed
repo: https://github.com/scylladb/scylladb
website: https://www.scylladb.com
tags: [NoSQL, 宽列存储, 高性能, Cassandra兼容]
updated: 2026-04-01
---

## 一句话定位

ScyllaDB 是用 C++ 重写的高性能分布式 NoSQL 数据库，与 Cassandra 完全兼容（协议、数据模型），但通过无共享架构、每核独立处理和绕过内核的设计榨干现代多核硬件，实现数倍于 Cassandra 的吞吐和更低延迟。

## 诞生背景

2015 年发布。Cassandra 功能强大但用 Java 编写，受 JVM 垃圾回收停顿、线程模型等限制，难以充分利用现代多核服务器。ScyllaDB 的目标：保留 Cassandra 的一切优点和生态兼容，但用 C++ 和现代架构重写，把硬件性能压榨到极致。

## 核心架构

- **Cassandra 兼容**：兼容 CQL 协议和数据模型，可近乎无缝替换
- **Shard-per-core**：每个 CPU 核绑定一个分片，无锁、无共享
- **Seastar 框架**：异步、绕过内核的高性能 C++ 框架
- **无 JVM**：C++ 编写，没有 GC 停顿
- **自调优**：自动适应硬件与负载

## 关键设计决策

1. **重写而非改进**：不在 Cassandra 上打补丁，而是用 C++ 从头重写以突破 JVM 天花板。
2. **保持兼容**：完全兼容 Cassandra 生态，让用户零成本迁移、白得性能提升。
3. **每核分片架构**：无共享 + 每核独立，最大化多核并行、消除锁竞争。

## 生态位置

高性能宽列 NoSQL 的代表。与 Cassandra（Java、生态成熟）是"兼容型竞争"关系——同样的 API，更强的性能。与 HBase（依赖 HDFS）也属宽列阵营。适合对吞吐/延迟要求极致的大规模场景。

## 我的评价

ScyllaDB 是"用重写换性能"的经典案例——它没有另创一套 API 和生态（那样要从零积累用户），而是**完全兼容 Cassandra，只把底层用 C++ 重写**，于是用户能零成本迁移、白得数倍性能。这个策略极其聪明：它把"生态兼容"和"性能突破"两个通常矛盾的目标同时拿下。它印证了：**当一个成熟系统受限于实现语言/架构时，"兼容其接口 + 重写其内核"往往是最有杀伤力的竞争路径**（呼应 MariaDB、MinIO 的兼容策略）。
