---
name: etcd
tagline: 分布式强一致 KV 存储，Kubernetes 的大脑
category: 云原生
foundation: CNCF
language: Go
born: 2013
era: 云原生
stars: 48k+
depth: seed
repo: https://github.com/etcd-io/etcd
website: https://etcd.io
tags: [分布式, KV存储, Raft, 一致性]
updated: 2026-06-28
---

## 一句话定位

etcd 是 CoreOS 开源、后成为 CNCF 毕业项目的分布式键值存储，基于 Raft 共识算法提供强一致性和高可用，是 Kubernetes 存储所有集群状态的"唯一真相来源"。

## 诞生背景

2013 年由 CoreOS 创建，名字取自 Unix 的 `/etc` 配置目录 + distributed。分布式系统需要一个可靠的地方存储配置和协调状态（谁是主、服务在哪）。etcd 用 Raft 提供了这个强一致的基础设施。

## 核心架构

- **Raft 共识**：多节点通过 Raft 选主和日志复制，保证强一致
- **KV 存储**：简单的键值模型，支持事务与版本
- **Watch 机制**：监听键变化，实现配置热更新与协调
- **MVCC**：多版本，支持历史读取
- **Lease**：租约机制实现 TTL 与服务健康

## 关键设计决策

1. **Raft 而非 Paxos**：选择更易理解、易实现的 Raft 算法，让分布式一致性变得可靠可维护。
2. **Watch + Lease**：为服务发现、分布式锁、Leader 选举等场景提供原语。
3. **强一致优先**：宁可牺牲部分可用性也要保证一致性（CP 系统），因为它存的是"真相"。

## 生态位置

Kubernetes 的核心依赖（存储所有 API 对象）。也用于服务发现、分布式锁、配置中心。竞品：ZooKeeper（老一代，Kafka 曾用）、Consul。

## 我的评价

etcd 是"理论落地为基础设施"的典范——它把 Raft 论文变成了生产级的可靠组件，成为整个 Kubernetes 帝国的地基。它也印证了 Raft 论文的初衷（"可理解的一致性算法"）的价值：一个更易懂的算法，往往比更"聪明"的算法能孕育出更健壮的工程实现。想深入分布式一致性，读 etcd 源码是最佳路径之一。
