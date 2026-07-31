---
name: ONNX
tagline: 开放神经网络交换格式，打破 AI 框架壁垒
category: AI/ML
foundation: LF AI & Data
language: 多语言
born: 2017
era: AI原生
stars: 18k+
depth: seed
repo: https://github.com/onnx/onnx
website: https://onnx.ai
tags: [模型交换, 互操作, 推理, 标准]
updated: 2026-04-24
---

## 一句话定位

ONNX（Open Neural Network Exchange）是开放的神经网络模型交换格式，让在一个框架（如 PyTorch）训练的模型能导出为通用格式，再在另一环境（如 ONNX Runtime、各种硬件）高效运行，打破了 AI 框架间的壁垒。

## 诞生背景

2017 年由微软和 Facebook 联合发起。当时 AI 框架各自为政（PyTorch、TensorFlow、Caffe 模型互不兼容），"用 A 框架训练、想在 B 环境部署"极其痛苦。ONNX 提供了一个中立的中间表示，充当框架间的"通用语"。

## 核心架构

- **统一模型格式**：把神经网络表示为标准的计算图 + 算子集
- **框架互操作**：PyTorch/TensorFlow 等可导出/导入 ONNX
- **ONNX Runtime**：高性能跨平台推理引擎
- **硬件加速**：各厂商为 ONNX 做后端优化（CPU/GPU/NPU）
- **算子标准化**：定义标准算子集，保证可移植

## 关键设计决策

1. **做中立中间层**：不站队任何框架，只做通用交换格式，让所有框架受益。
2. **训练与推理解耦**：训练用喜欢的框架，部署用优化的运行时，各取所长。
3. **标准算子集**：定义统一算子，让模型能在不同硬件后端一致运行。

## 生态位置

AI 模型互操作的事实标准（LF AI & Data 托管）。与 ONNX Runtime、TensorRT、OpenVINO 等推理引擎配合。在 MLOps 的"模型部署"环节至关重要。与训练框架（PyTorch/TensorFlow）是互补而非竞争关系。

## 我的评价

ONNX 解决的是一个典型的"生态碎片化"问题——当多个强大但互不兼容的框架并存，一个中立的交换标准就成了刚需。它的价值不在于自己多强，而在于让整个生态"能互通"。这与 Iceberg（数据表格式）、OpenTelemetry（遥测标准）异曲同工，都印证了：**在群雄割据的领域，做一个大家都认可的中立标准，往往是最有价值、最符合开源精神的位置。**
