---
name: Redis
tagline: 内存数据结构存储，最流行的缓存与高速数据库
category: 数据库
language: C
born: 2009
era: Web2.0
stars: 67k+
depth: sprout
repo: https://github.com/redis/redis
website: https://redis.io
tags: [缓存, KV存储, 内存数据库]
updated: 2026-07-25
---

## 一句话定位

Redis（REmote DIctionary Server）是一个基于内存的数据结构存储，可用作缓存、数据库和消息代理，以极致的性能和丰富的数据类型著称。

## 诞生背景

2009 年 Salvatore Sanfilippo（antirez）为解决自家网站实时统计的性能瓶颈而创造。它超越了简单的 KV 缓存（如 Memcached），提供了丰富的数据结构。

## 核心架构

- **单线程事件循环**：核心命令处理单线程（基于 epoll），避免锁竞争
- **丰富数据类型**：String、Hash、List、Set、ZSet、Stream、Bitmap、HyperLogLog
- **持久化**：RDB 快照 + AOF 日志双机制
- **高可用**：主从复制 + Sentinel + Cluster 分片

## 关键设计决策

1. **单线程模型**：用单线程 + 多路复用避免并发复杂性，因为瓶颈在内存/网络而非 CPU。（6.0 后网络 I/O 多线程化）
2. **数据结构服务器**：不只是 KV，而是把常用数据结构做成服务，客户端可直接操作。
3. **内存优先**：所有数据在内存，持久化只为恢复。

## 生态位置

几乎所有 Web 应用的缓存层标配。竞品：Memcached（更简单）、KeyDB、以及 2024 年因协议变更而诞生的开源分支 Valkey。

## 快速上手

```bash
docker run -p 6379:6379 redis
redis-cli
> SET user:1 "Alice"
> ZADD rank 100 "Alice" 95 "Bob"
> ZRANGE rank 0 -1 WITHSCORES
```

## 我的评价

Redis 证明了「选对抽象层次」的威力 —— 它没有停留在 KV，而是把「数据结构」作为服务粒度，一举解决了缓存、排行榜、限流、会话等大量场景。antirez 的代码以简洁清晰著称，是学习 C 语言系统编程的绝佳范本。
