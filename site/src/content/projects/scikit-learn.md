---
name: scikit-learn
tagline: Python 传统机器学习的标准库，算法工具箱
category: AI/ML
foundation: NumFOCUS
language: Python
born: 2010
era: 云计算
stars: 60k+
depth: seed
repo: https://github.com/scikit-learn/scikit-learn
website: https://scikit-learn.org
tags: [机器学习, 算法, 数据挖掘, sklearn]
updated: 2026-06-07
---

## 一句话定位

scikit-learn 是 Python 传统机器学习的标准库，提供分类、回归、聚类、降维、特征工程等经典算法，以统一简洁的 API 和扎实的文档，成为数据科学家做非深度学习任务的首选工具。

## 诞生背景

2010 年从 Google Summer of Code 项目发展而来，建立在 NumPy/SciPy 之上。它把散落各处的机器学习算法用一致的接口整合起来，让"用机器学习"从研究者专利变成任何 Python 开发者都能上手的能力。

## 核心架构

- **统一 API**：所有模型都是 `fit()` / `predict()` / `transform()` 的一致接口
- **丰富算法**：SVM、随机森林、KMeans、PCA 等经典算法齐全
- **Pipeline**：把预处理与模型串成流水线
- **建立在 NumPy/SciPy 上**：复用科学计算基础
- **模型评估**：交叉验证、网格搜索、指标一应俱全

## 关键设计决策

1. **一致的 fit/predict API**：无论什么算法，接口统一，学一个会一片，极大降低使用成本。
2. **专注传统 ML**：不做深度学习（留给 PyTorch/TF），聚焦经典算法做到极致。
3. **Pipeline 抽象**：把数据处理与建模串成可复用、可交叉验证的流水线。

## 生态位置

传统机器学习的事实标准（NumFOCUS 项目）。与 NumPy/Pandas/Jupyter 构成 Python 数据科学核心栈。深度学习则交给 PyTorch/TensorFlow。在表格数据、中小规模任务上仍是首选。

## 我的评价

scikit-learn 的伟大在于它的"一致性"——用 `fit/predict` 这套统一接口把几十种算法抽象成可互换的组件，让使用者能专注于问题而非各算法的调用差异。在深度学习喧嚣的今天，它提醒我们：大量现实问题（尤其表格数据）用经典 ML 就能又快又好地解决。选对工具的层次，比追逐最新潮的技术更重要。
