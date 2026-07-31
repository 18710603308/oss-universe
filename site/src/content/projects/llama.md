---
name: LLaMA
tagline: Meta 开源的大语言模型，点燃开源 LLM 生态
category: AI/ML
foundation: Meta
language: Python
born: 2023
era: AI原生
stars: 58k+
depth: seed
repo: https://github.com/meta-llama/llama
website: https://www.llama.com
tags: [大模型, LLM, 开源模型, Meta]
updated: 2026-06-03
---

## 一句话定位

LLaMA 是 Meta 发布的大语言模型系列，以开放模型权重的策略，让研究者和开发者能在自己的硬件上运行、微调顶级水准的大模型，直接点燃了开源 LLM 生态的爆发。

## 诞生背景

2023 年初 Meta 发布 LLaMA。彼时最强的大模型（GPT-4 等）都是闭源 API。LLaMA 开放了模型权重（初期研究用途，后续 Llama 2/3 更开放商用），一石激起千层浪，催生了海量社区微调模型与本地推理工具。

## 核心架构

- **Transformer 解码器**：标准的自回归 Transformer 架构
- **多种参数规模**：从数十亿到数千亿参数的系列模型
- **开放权重**：可下载、本地运行、微调、蒸馏
- **高效训练**：在相对可控的算力下达到优异性能
- **持续迭代**：Llama 2、Llama 3 不断提升能力与开放度

## 关键设计决策

1. **开放模型权重**：与闭源 API 相反，开放权重让"人人可拥有自己的大模型"，激活了整个开源生态。
2. **多尺寸模型**：提供不同规模，兼顾能力与可部署性。
3. **高效优先**：追求在有限算力下的高性价比，而非一味堆参数。

## 生态位置

开源大模型的旗帜与生态中心。催生了 llama.cpp（本地推理）、Ollama（一键运行）、无数微调模型（Alpaca、Vicuna 等）。与闭源的 GPT/Claude 形成"开源 vs 闭源"的路线之争。竞品：Mistral、Qwen、DeepSeek 等开源模型。

## 我的评价

LLaMA 是 AI 时代"开源改变格局"的标志性事件——它证明了开放模型权重能瞬间催生一个庞大而富有创造力的生态，让大模型不再是少数巨头的专利。它与 Stable Diffusion、Whisper 一脉相承，共同回答了 AI 时代最重要的问题之一：**AI 能力应该被少数公司垄断，还是像开源软件一样属于所有人？** LLaMA 用行动给出了后者的答案。
