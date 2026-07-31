---
name: Whisper
tagline: OpenAI 开源的语音识别模型，多语言转录标杆
category: AI/ML
foundation: OpenAI
language: Python
born: 2022
era: AI原生
stars: 75k+
depth: seed
repo: https://github.com/openai/whisper
website: https://openai.com/research/whisper
tags: [语音识别, ASR, 多语言, 转录]
updated: 2026-06-07
---

## 一句话定位

Whisper 是 OpenAI 开源的自动语音识别（ASR）模型，用海量多语言数据训练，能高精度地把语音转成文字并支持翻译，是开源语音转录领域的标杆，让人人都能用上接近商业级的语音识别。

## 诞生背景

2022 年 OpenAI 开源发布。此前高质量语音识别多为闭源商业 API。Whisper 用 68 万小时的多语言音频训练，开源了模型权重，让开发者可本地运行、免费使用接近顶级水准的语音识别。

## 核心架构

- **Transformer 编解码器**：基于 Transformer 的序列到序列架构
- **弱监督大规模训练**：用海量互联网音频-文本对训练，泛化强
- **多任务**：转录、翻译、语言识别、时间戳一体
- **多语言**：支持近百种语言
- **多尺寸模型**：tiny 到 large，权衡速度与精度

## 关键设计决策

1. **大规模弱监督训练**：用海量、噪杂但真实的数据训练，换取强鲁棒性与泛化能力。
2. **开源权重**：与多数商业 ASR 相反，开放模型让本地部署与二次开发成为可能。
3. **多任务统一**：一个模型完成转录、翻译、检测，简化了使用。

## 生态位置

开源语音识别的事实标杆。衍生：whisper.cpp（C++ 本地推理，同 llama.cpp 思路）、faster-whisper（加速）。广泛用于字幕生成、会议记录、语音助手。竞品：各商业 ASR API。

## 我的评价

Whisper 延续了 Stable Diffusion 的开源精神，把又一项原本被商业 API 垄断的 AI 能力（语音识别）开放给大众。它的"大规模弱监督"训练思路也很有启发：与其追求精心标注的小数据，不如拥抱海量真实但嘈杂的数据——这恰是大模型时代"数据规模压倒数据精度"哲学的又一例证。它让语音识别彻底平民化。
