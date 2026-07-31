---
name: llama.cpp
tagline: 用纯 C/C++ 在消费级硬件上跑大模型
category: AI/ML
language: C/C++
born: 2023
era: AI原生
stars: 70k+
depth: seed
repo: https://github.com/ggml-org/llama.cpp
website: https://github.com/ggml-org/llama.cpp
tags: [LLM推理, 量化, 本地, GGUF]
updated: 2026-05-18
---

## 一句话定位

llama.cpp 是 Georgi Gerganov 用纯 C/C++ 编写的大语言模型推理引擎，通过模型量化和极致的底层优化，让 LLaMA 等大模型能在普通笔记本、甚至手机和树莓派上运行，是"本地跑大模型"浪潮的技术基石。

## 诞生背景

2023 年 LLaMA 权重开放后，Georgi Gerganov 出于"能不能在 MacBook 上跑起来"的好奇，用 C/C++ 从零实现推理，并引入量化技术大幅降低显存/内存需求。它证明了大模型不必依赖昂贵 GPU，点燃了本地 LLM 运动。

## 核心架构

- **GGML/GGUF**：自研的张量库与模型格式，为 CPU/边缘优化
- **量化（Quantization）**：把权重从 16 位压到 4 位等，内存需求骤降
- **纯 C/C++ + 无依赖**：编译即用，跨平台（含 Apple Silicon、ARM）
- **多后端**：CPU、Metal、CUDA、Vulkan 等
- **广泛硬件支持**：从服务器到手机

## 关键设计决策

1. **量化换可及性**：用精度的微小损失换取内存/算力需求的大幅下降，让消费级硬件也能跑。
2. **纯 C/C++ 无依赖**：抛开重型 Python/框架栈，编译即用，极致轻量与可移植。
3. **底层极致优化**：手写针对各硬件的算子，榨干 CPU/GPU 性能。

## 生态位置

本地 LLM 推理的底层引擎。Ollama、LM Studio 等易用工具都构建在它之上。与 vLLM（服务器高吞吐）分工：llama.cpp 主打"消费级/边缘设备本地运行"。同作者的 whisper.cpp 是其思路在语音上的延伸。

## 我的评价

llama.cpp 是"一个人 + C/C++ 改变一个领域"的传奇——它用量化和底层优化，把"大模型只能在数据中心跑"的认知彻底打破，让 AI 真正走进个人设备。它与 Ollama 的关系（底层引擎 vs 易用封装）是清晰的分层协作。它再次证明：**扎实的系统编程功底，能在最前沿的 AI 领域产生降维打击**。
