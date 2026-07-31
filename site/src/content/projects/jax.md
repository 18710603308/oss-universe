---
name: JAX
tagline: Google 的高性能数值计算库，可组合的函数变换
category: AI/ML
foundation: Google
language: Python
born: 2018
era: AI原生
stars: 32k+
depth: seed
repo: https://github.com/google/jax
website: https://jax.readthedocs.io
tags: [科学计算, 自动微分, XLA, 函数式]
updated: 2026-05-21
---

## 一句话定位

JAX 是 Google 开源的高性能数值计算库，把 NumPy 风格的 API 与可组合的函数变换（自动微分 grad、即时编译 jit、向量化 vmap、并行 pmap）结合，配合 XLA 编译器在 GPU/TPU 上高速运行，是前沿 AI 研究的重要工具。

## 诞生背景

2018 年由 Google 研究团队开发。研究者既想要 NumPy 的表达力，又需要自动微分、GPU/TPU 加速和高效编译。JAX 用"函数变换"这一优雅抽象把这些能力统一起来，尤其受大模型与科研前沿青睐。

## 核心架构

- **NumPy 兼容 API**：`jax.numpy` 用起来像 NumPy
- **grad**：自动微分，任意函数求导
- **jit**：基于 XLA 的即时编译，融合算子、大幅提速
- **vmap / pmap**：自动向量化 / 多设备并行
- **函数式 + 不可变**：纯函数风格，变换可自由组合

## 关键设计决策

1. **函数变换即核心**：把 grad/jit/vmap 设计成可任意组合的函数变换，优雅而强大。
2. **NumPy 兼容**：复用研究者熟悉的 NumPy 心智，降低门槛。
3. **XLA 编译 + TPU**：深度对接 Google 的 XLA 编译器与 TPU 硬件，性能突出。

## 生态位置

前沿 AI 研究与高性能计算的利器。生态：Flax、Haiku（神经网络库）、大量前沿论文用它。与 PyTorch（工程/研究主流）、TensorFlow（工业部署）形成互补——JAX 在研究与 TPU 场景尤其强。

## 我的评价

JAX 的精妙在于"函数变换"这一抽象——把求导、编译、向量化、并行都统一为"作用在函数上的变换"，且可自由组合（如 `jit(grad(vmap(f)))`）。这是函数式编程思想在数值计算领域的漂亮应用。它与 PyTorch 的分野也很清晰：PyTorch 命令式、易上手，JAX 函数式、可组合性极强。理解 JAX，能刷新你对"计算即变换"的认知。
