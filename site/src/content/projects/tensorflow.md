---
name: TensorFlow
tagline: Google 开源的工业级深度学习框架，开启 AI 开源浪潮
category: AI/ML
language: Python/C++
born: 2015
era: AI原生
stars: 185k+
depth: sprout
repo: https://github.com/tensorflow/tensorflow
website: https://www.tensorflow.org
tags: [深度学习, 静态图, Google]
updated: 2026-07-20
---

## 一句话定位

TensorFlow 是 Google Brain 团队开源的端到端机器学习平台，2015 年发布，是首个真正意义上工业级的深度学习框架，引爆了深度学习的开源浪潮。

## 诞生背景

脱胎于 Google 内部的 DistBelief 系统。Google 将其开源，一举奠定了深度学习框架的行业标准，也推动了整个 AI 的民主化进程。

## 核心架构

- **计算图（Graph）**：早期采用静态图（define-then-run），先定义后执行
- **Tensor**：数据流经计算图的多维数组
- **Keras**：高层 API，2.x 后成为官方推荐入口
- **TF Serving / TF Lite / TF.js**：覆盖服务端、移动端、浏览器的完整部署链

## 关键设计决策

1. **静态图优先**：先构建完整计算图再执行，利于分布式与生产优化（但牺牲了调试体验）。
2. **全平台部署**：从云端到手机到浏览器，TensorFlow 的部署生态是它最大的护城河。
3. **2.0 拥抱动态图**：面对 PyTorch 的冲击，TF 2.0 默认启用 Eager Execution 并整合 Keras。

## 生态位置

深度学习框架双雄之一。工业部署与移动端仍有优势，但研究领域已被 PyTorch 超越。

## 我的评价

TensorFlow 的历史地位无可撼动——它证明了深度学习可以工程化、产品化。但它的演进史也是一个教训：过度追求性能与分布式而牺牲开发者体验，给了 PyTorch 逆袭的空间。技术领先不等于体验领先，后者往往更能决定生态归属。
