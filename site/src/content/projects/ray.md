---
name: Ray
tagline: 分布式计算框架，为 AI 规模化而生
category: AI/ML
language: Python/C++
born: 2017
era: 云原生
stars: 34k+
depth: seed
repo: https://github.com/ray-project/ray
website: https://www.ray.io
tags: [分布式计算, AI, 并行, 扩展]
updated: 2026-05-18
---

## 一句话定位

Ray 是 UC Berkeley 开源的分布式计算框架，用极简的 API 把单机 Python 代码扩展到集群，专为 AI/ML 的大规模训练、调参、推理和数据处理设计，是现代 AI 基础设施的重要一环。

## 诞生背景

2017 年源自 UC Berkeley RISELab。随着 AI 规模爆炸，训练、超参搜索、强化学习、批量推理都需要分布式算力，但用传统分布式框架改写代码成本高。Ray 让"给函数/类加个装饰器"就能分布式运行。

## 核心架构

- **Task / Actor**：用 `@ray.remote` 把普通函数（Task）或类（Actor）变成分布式执行单元
- **统一集群调度**：自动在集群上调度、扩缩容
- **Ray 生态库**：Ray Train（训练）、Tune（调参）、Serve（推理服务）、Data（数据处理）
- **共享内存对象存储**：高效的节点间数据传递
- **与 AI 框架集成**：无缝对接 PyTorch、TensorFlow、vLLM

## 关键设计决策

1. **最小侵入的分布式**：用装饰器把单机代码变分布式，几乎不改原有逻辑。
2. **Task + Actor 双抽象**：无状态任务与有状态 Actor 覆盖大多数并行模式。
3. **AI 原生生态**：围绕训练/调参/服务/数据构建全套库，做 AI 的分布式底座。

## 生态位置

AI 规模化的分布式基础设施。被 OpenAI 等用于大模型训练。与 Spark（大数据批处理）定位不同：Ray 更偏 AI/ML 的通用分布式计算。上层常配合 PyTorch、vLLM。

## 我的评价

Ray 抓住了 AI 时代的一个核心痛点——算力必须分布式，但工程师不想为此重写代码。它用"装饰器即分布式"把复杂的集群编排藏在极简 API 之下，让研究者专注算法而非基础设施。它体现了优秀基础设施的共性：**把巨大的底层复杂性，收敛成使用者几乎无感的简单接口**。
