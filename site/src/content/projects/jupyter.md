---
name: Jupyter
tagline: 交互式计算笔记本，数据科学与教学的通用画布
category: 数据科学
foundation: NumFOCUS
language: Python/TypeScript
born: 2014
era: 云计算
stars: 12k+
depth: seed
repo: https://github.com/jupyter/notebook
website: https://jupyter.org
tags: [笔记本, 交互式, 数据科学, 可复现]
updated: 2026-06-15
---

## 一句话定位

Jupyter 是交互式计算笔记本，把代码、运行结果、可视化图表和 Markdown 文字融合在一个可执行文档里，成为数据科学、机器学习、教学和科研探索的通用工作环境。

## 诞生背景

2014 年从 IPython 项目中分离而来（名字取自 Julia + Python + R）。科学计算和数据分析是高度探索性的——写一点、跑一点、看结果、再调整。Jupyter 把这种"边写边看"的探索式工作流产品化。

## 核心架构

- **Notebook（.ipynb）**：由代码单元 + Markdown 单元 + 输出组成的文档
- **Kernel**：执行代码的后端内核（支持 Python、Julia、R 等 100+ 语言）
- **前后端分离**：浏览器前端 + Kernel 后端通过协议通信
- **JupyterLab**：新一代 IDE 式界面
- **富输出**：内联图表、表格、图片、交互组件

## 关键设计决策

1. **代码 + 结果 + 叙述一体**：把可执行代码、输出和文字说明融合，天然适合探索与分享。
2. **Kernel 协议**：内核与前端解耦，一套界面支持任意语言。
3. **可复现研究**：笔记本记录了完整的分析过程，利于复现与教学。

## 生态位置

数据科学与 AI 探索的标准环境（NumFOCUS 项目）。衍生/集成：Google Colab、Kaggle Notebook、VS Code Notebook、JupyterHub（多用户）。几乎所有 ML 教程与论文复现都用它。

## 我的评价

Jupyter 重塑了"探索性编程"的工作方式——它承认数据科学不是"一次写对"，而是"反复试探"，于是把这种探索过程本身变成了可保存、可分享、可复现的文档。它模糊了"代码、文档、报告"的边界，这种"文学化编程"的理念，恰恰契合了数据工作"过程即成果"的本质。
