---
name: Cassandra
tagline: 分布式宽列数据库，为海量写入与高可用而生
category: 数据库
foundation: Apache
language: Java
born: 2008
era: Web2.0
stars: 9k+
depth: seed
repo: https://github.com/apache/cassandra
website: https://cassandra.apache.org
tags: [NoSQL, 宽列, 分布式, 高可用]
updated: 2026-06-16
---

## 一句话定位

Apache Cassandra 是一个分布式宽列 NoSQL 数据库，采用无中心（masterless）架构，以线性可扩展、跨数据中心高可用和极强的写入吞吐著称，适合海量写入与永远在线的场景。

## 诞生背景

2008 年由 Facebook 开源（用于收件箱搜索），融合了 Amazon Dynamo 的分布式设计与 Google BigTable 的数据模型。它要解决的是：如何在多个数据中心、无单点故障的前提下，处理海量写入且永不宕机。

## 核心架构

- **无中心对等架构**：所有节点平等，无主从，任一节点都可读写
- **一致性哈希**：数据按 Token 环分布，节点增减平滑
- **可调一致性**：按请求指定一致性级别（ONE/QUORUM/ALL），在 CAP 间灵活权衡
- **LSM-Tree 存储**：写入先入内存 + 顺序落盘，写性能极高
- **多数据中心复制**：天然支持异地多活

## 关键设计决策

1. **无中心 + AP 倾向**：牺牲强一致换取高可用与分区容忍，"永远可写"。
2. **可调一致性**：把 CAP 权衡的选择权交给每个请求，而非全局固定。
3. **写优化的 LSM 存储**：顺序写 + 后台合并，扛住海量写入。

## 生态位置

宽列 NoSQL 的代表。竞品/衍生：ScyllaDB（C++ 重写、更高性能）、HBase（Hadoop 生态）、DynamoDB（AWS 托管）。适合日志、时序、IoT、消息等写密集场景。

## 我的评价

Cassandra 是 CAP 定理的活教材——它明确选择了 AP（可用性 + 分区容忍），并用"可调一致性"把权衡的粒度细化到每次请求。它证明了分布式系统没有万能解，只有面向场景的取舍。它与强一致的 etcd（CP）恰成对照：一个要"永远可写"，一个要"永远正确"。理解这对分野，就理解了分布式存储的核心矛盾。
