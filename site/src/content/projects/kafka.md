---
name: Apache Kafka
tagline: 分布式事件流平台，现代数据管道的中枢
category: 消息与流处理
foundation: Apache
language: Java/Scala
born: 2011
era: 云计算
stars: 28k+
depth: tree
repo: https://github.com/apache/kafka
website: https://kafka.apache.org
tags: [消息队列, 事件流, LinkedIn]
updated: 2026-07-25
---

## 一句话定位

Kafka 是 LinkedIn 开源、后捐给 Apache 的分布式事件流平台，以高吞吐、持久化、可重放的日志抽象，成为企业数据管道的事实标准。

## 诞生背景

2011 年 LinkedIn 面临海量用户行为日志的实时处理需求，传统消息队列吞吐不足。Kafka 以「分布式提交日志（distributed commit log）」为核心抽象诞生。

## 核心架构

- **Topic / Partition**：消息按主题分类，主题分区实现并行与扩展
- **Producer / Consumer**：生产者追加写，消费者按 offset 拉取
- **Broker**：存储分区数据的服务节点
- **Consumer Group**：消费者组实现负载均衡
- **顺序写磁盘 + 零拷贝**：性能的关键来源

## 关键设计决策

1. **日志即核心抽象**：Kafka 本质是一个可分区、可复制的追加日志，消费者自己维护 offset —— 消息可重复消费、可回溯。
2. **顺序 I/O + Page Cache**：放弃随机读写，用顺序磁盘写 + 操作系统页缓存榨干硬件性能。
3. **拉模型**：消费者主动拉取，天然支持背压与批处理。

## 生态位置

上游对接各种数据源，下游连接 Flink/Spark 流处理、数据仓库。是 Lambda/Kappa 架构的核心。竞品：Pulsar、RabbitMQ、NATS。

## 快速上手

```bash
# 用 Docker 起 Kafka（KRaft 模式，无需 ZooKeeper）
docker run -p 9092:9092 apache/kafka:latest
```

## 我的评价

Kafka 最深刻的洞见是「把消息队列重新定义为一个持久化的、可重放的日志」。这个抽象的转变，让它同时胜任消息传递、事件溯源、流处理三种场景。「Log is the truth」的哲学，深刻影响了后续无数分布式系统设计。
