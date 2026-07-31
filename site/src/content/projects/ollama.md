---
name: Ollama
tagline: 一行命令在本地运行大语言模型
category: AI/ML
language: Go
born: 2023
era: AI原生
stars: 100k+
depth: sprout
repo: https://github.com/ollama/ollama
website: https://ollama.com
tags: [LLM, 本地推理, 大模型]
updated: 2026-07-20
---

## 一句话定位

Ollama 是一个让用户在本地一键运行开源大语言模型（Llama、Mistral、Qwen 等）的工具，把复杂的模型下载、量化、推理封装成 `ollama run` 一条命令。

## 诞生背景

2023 年 LLM 爆发后，本地运行大模型门槛极高（依赖、显存、量化格式各不相同）。Ollama 借鉴 Docker 的理念，把模型打包成可分发的镜像，用极简 CLI 让「本地跑大模型」平民化。

## 核心架构

- **Modelfile**：类似 Dockerfile，定义模型及其参数
- **底层引擎**：基于 llama.cpp，支持 GGUF 量化格式
- **REST API**：本地提供 OpenAI 兼容接口
- **模型库**：中央仓库分发预打包模型

## 关键设计决策

1. **借鉴 Docker 心智模型**：`ollama pull` / `ollama run`，开发者零学习成本。
2. **OpenAI 兼容 API**：现有应用几乎无需改动即可切换到本地模型。
3. **开箱即用的量化**：自动处理量化，普通笔记本也能跑。

## 生态位置

本地 LLM 领域最流行的入口。与 llama.cpp（底层）、Open WebUI（前端）、LangChain（应用层）构成本地 AI 栈。

## 快速上手

```bash
ollama run qwen2
# 或调用 API
curl http://localhost:11434/api/generate -d '{"model":"qwen2","prompt":"你好"}'
```

## 我的评价

Ollama 是「用成熟心智模型降低新技术门槛」的又一典范——它几乎照搬了 Docker 的交互范式，让本已存在的 llama.cpp 能力变得人人可用。在 AI 时代，谁能把复杂能力包装成最简单的使用方式，谁就能占据入口。这是一条被反复验证的产品规律。
