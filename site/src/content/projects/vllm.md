---
name: vLLM
tagline: 高吞吐 LLM 推理引擎，用 PagedAttention 榨干 GPU
category: AI/ML
language: Python/CUDA
born: 2023
era: AI原生
stars: 35k+
depth: seed
repo: https://github.com/vllm-project/vllm
website: https://docs.vllm.ai
tags: [LLM推理, PagedAttention, 高吞吐]
updated: 2026-07-08
---

## 一句话定位

vLLM 是 UC Berkeley 开源的大语言模型推理与服务引擎，以独创的 PagedAttention 技术大幅提升 GPU 显存利用率和吞吐量，成为部署开源大模型的主流方案。

## 诞生背景

2023 年发布。LLM 推理时 KV Cache 占用大量显存且碎片化严重，传统方案 GPU 利用率低。vLLM 借鉴操作系统「虚拟内存分页」的思想来管理 KV Cache，解决了这一核心瓶颈。

## 核心架构

- **PagedAttention**：像 OS 分页管理内存一样管理 KV Cache，减少碎片和浪费
- **Continuous Batching**：动态批处理，请求随到随处理，不必等整批
- **OpenAI 兼容 API**：可直接替换 OpenAI 接口
- **多硬件支持**：NVIDIA、AMD、TPU 等

## 关键设计决策

1. **PagedAttention**：把 OS 虚拟内存分页思想迁移到 KV Cache 管理，显存利用率从 ~20% 提升到接近 100%。
2. **连续批处理**：GPU 不空转，吞吐大幅提升。
3. **易用优先**：OpenAI 兼容 API 让现有应用零成本迁移。

## 生态位置

开源 LLM 部署的事实标准推理引擎。常与 Ollama（本地）、Hugging Face（模型）搭配。竞品：TGI（Hugging Face）、TensorRT-LLM（NVIDIA）。

## 我的评价

vLLM 是「跨领域思想迁移」的绝佳案例——它把操作系统教科书里的「虚拟内存分页」搬到了 GPU 显存管理，一举解决了 LLM 推理的核心瓶颈。这提醒我：很多看似崭新的问题，答案其实藏在经典的计算机系统智慧里。扎实的计算机基础，往往能在新领域产生降维打击。
