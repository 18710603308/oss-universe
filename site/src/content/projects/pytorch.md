---
name: PyTorch
tagline: 研究者最爱的深度学习框架，动态图的胜利
category: AI/ML
foundation: Linux 基金会
language: Python/C++
born: 2016
stars: 84k+
depth: tree
repo: https://github.com/pytorch/pytorch
website: https://pytorch.org
tags: [深度学习, 动态图, Meta]
updated: 2026-07-20
---

## 一句话定位

PyTorch 是 Meta（Facebook）开源的深度学习框架，以「动态计算图」和 Pythonic 的设计，成为学术研究和 AI 工程的首选，2022 年独立为 PyTorch 基金会（Linux 基金会旗下）。

## 诞生背景

2016 年发布，源自 Torch（Lua）。当时 TensorFlow 的静态图（define-then-run）对研究者不友好，PyTorch 的动态图（define-by-run）让调试和实验像写普通 Python 一样自然，迅速赢得学术界。

## 核心架构

- **Tensor**：多维数组，支持 GPU 加速
- **Autograd**：自动微分引擎，动态构建反向传播图
- **nn.Module**：神经网络层的组合抽象
- **TorchScript / torch.compile**：从动态图到部署优化的桥梁

## 关键设计决策

1. **动态图（Eager Execution）**：每次前向传播实时构建计算图，可用标准调试器逐行调试。
2. **Pythonic 优先**：API 贴近 NumPy 与 Python 习惯，学习曲线平缓。
3. **torch.compile（2.0）**：在保持动态图体验的同时，用编译获得接近静态图的性能。

## 生态位置

深度学习框架双雄之一（vs TensorFlow）。研究领域占据主导，Hugging Face、vLLM 等生态均基于它。

## 快速上手

```python
import torch
x = torch.randn(3, requires_grad=True)
y = (x ** 2).sum()
y.backward()  # 自动求导
print(x.grad)
```

## 我的评价

PyTorch 的逆袭说明「开发者体验决定技术采用」。它没有在性能上一开始就压倒 TensorFlow，而是用「像写普通 Python 一样做深度学习」的体验俘获研究者，再由研究反哺工业。这与 Vue、Docker 的成功逻辑高度一致——降低认知摩擦本身就是核心竞争力。
