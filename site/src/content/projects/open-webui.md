---
name: Open WebUI
tagline: 功能丰富的本地 LLM 网页界面，自托管的 AI 聊天
category: AI/ML
language: Python/Svelte
born: 2023
era: AI原生
stars: 50k+
depth: seed
repo: https://github.com/open-webui/open-webui
website: https://openwebui.com
tags: [LLM, WebUI, 自托管, 聊天界面]
updated: 2026-05-25
---

## 一句话定位

Open WebUI 是一个功能丰富、可自托管的大语言模型网页界面，为 Ollama 和各种 OpenAI 兼容 API 提供类 ChatGPT 的交互体验，支持多模型、RAG、多用户，是本地部署 AI 聊天的热门前端。

## 诞生背景

2023 年 LLM 爆发后，本地跑起模型（如用 Ollama）只是第一步，用户还需要一个好用的聊天界面。Open WebUI（原名 Ollama WebUI）填补了这个空白，把本地/私有大模型包装成媲美商业产品的 Web 体验。

## 核心架构

- **对接多后端**：Ollama、OpenAI 兼容 API（含本地 vLLM 等）
- **类 ChatGPT 界面**：对话、历史、Markdown、代码高亮
- **RAG 内建**：可上传文档做检索增强问答
- **多用户与权限**：适合团队自托管部署
- **插件/管道**：可扩展功能，接入工具与函数

## 关键设计决策

1. **专注前端体验**：不做模型、不做推理，只做"最好用的本地 LLM 界面"，与 Ollama 等分工明确。
2. **自托管 + 数据私有**：对话与知识库都在自己服务器，隐私可控。
3. **兼容 OpenAI API**：对接任意兼容后端，不锁定单一模型。

## 生态位置

本地/私有 LLM 的主流前端。典型组合：Ollama（跑模型）+ Open WebUI（界面）+ 本地知识库。与 Dify（LLM 应用平台）、LibreChat 等同属 LLM 应用层。是"AI 自托管"生态的关键一环。

## 我的评价

Open WebUI 补全了本地 AI 栈的"最后一公里"——Ollama 让模型跑起来，Open WebUI 让它变得人人可用。它和 Ollama 的分工（一个做推理后端、一个做交互前端）体现了清晰的关注点分离。它也代表了一个趋势：随着开源模型成熟，"把 AI 能力自托管、数据留在自己手里"的需求正快速增长，隐私与掌控成为 AI 时代的新价值主张。
