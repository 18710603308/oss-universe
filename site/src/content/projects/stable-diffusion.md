---
name: Stable Diffusion
tagline: 开源图像生成模型，让 AI 绘画走向大众
category: AI/ML
language: Python
born: 2022
era: AI原生
stars: 40k+
depth: seed
repo: https://github.com/CompVis/stable-diffusion
website: https://stability.ai
tags: [AIGC, 图像生成, 扩散模型]
updated: 2026-07-04
---

## 一句话定位

Stable Diffusion 是 2022 年由 Stability AI、CompVis 等发布的开源文本生成图像模型，首次让高质量 AI 绘画能在消费级显卡上运行，引爆了 AIGC 的全民浪潮。

## 诞生背景

2022 年，图像生成领域被 DALL·E 2、Midjourney 等闭源模型主导。Stable Diffusion 选择完全开源模型权重，让任何人都能本地运行、微调、二次开发，彻底改变了 AIGC 的格局。

## 核心架构

- **潜空间扩散（Latent Diffusion）**：在压缩的潜空间做扩散，大幅降低算力需求
- **U-Net 去噪**：从噪声逐步还原图像
- **CLIP 文本编码**：把文字提示转为引导向量
- **VAE**：图像与潜空间的编解码
- **可微调**：LoRA、DreamBooth 等低成本定制

## 关键设计决策

1. **潜空间扩散**：不在像素空间而在压缩潜空间扩散，让消费级 GPU 也能跑，这是"平民化"的关键。
2. **开源模型权重**：与闭源竞品相反，开放权重激发了海量社区创新（WebUI、ComfyUI、LoRA 生态）。
3. **可控生成**：ControlNet 等扩展提供精确的构图控制。

## 生态位置

开源 AIGC 图像生成的基石。上层工具：AUTOMATIC1111 WebUI、ComfyUI（本站已收录）、Fooocus。竞品：DALL·E、Midjourney（均闭源）。

## 我的评价

Stable Diffusion 是开源精神在 AI 时代的一次响亮宣言——当巨头把生成式 AI 锁进 API 背后，它选择开放模型权重，瞬间点燃了一个庞大的创作者与开发者生态。它印证了开源最强大的力量：**开放会释放出任何单一公司都无法预见的创造力**。整个 SD 生态的繁荣，就是最好的证明。
