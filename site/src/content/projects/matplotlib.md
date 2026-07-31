---
name: Matplotlib
tagline: Python 可视化的基石，科学绘图的标准
category: AI/ML
language: Python
born: 2003
era: Web2.0
stars: 20k+
depth: seed
repo: https://github.com/matplotlib/matplotlib
website: https://matplotlib.org
tags: [数据可视化, 科学计算, Python, 绘图]
updated: 2026-05-01
---

## 一句话定位

Matplotlib 是 Python 最基础、最广泛使用的绘图库，能生成从简单折线图到复杂科学图表的各类静态、动态可视化，是数据科学与科研领域事实上的绘图标准，也是众多高级可视化库的底层基础。

## 诞生背景

2003 年由 John Hunter 创建，灵感来自 MATLAB 的绘图接口。当时 Python 缺少强大的科学绘图工具，科研人员难以在 Python 里做数据可视化。Matplotlib 填补了这一空白，成为 Python 科学计算栈（与 NumPy）的重要一环。

## 核心架构

- **pyplot 接口**：类 MATLAB 的命令式绘图 API，快速出图
- **面向对象接口**：Figure / Axes 的精细控制，定制复杂图表
- **多后端渲染**：可输出到屏幕、PNG、SVG、PDF 等
- **与 NumPy 集成**：直接绘制数组数据
- **高度可定制**：几乎每个绘图元素都可调

## 关键设计决策

1. **借鉴 MATLAB**：用科研人员熟悉的绘图心智，降低从 MATLAB 迁移的门槛。
2. **两层接口**：命令式 pyplot（快）+ 面向对象（精细），兼顾易用与可控。
3. **底层通用**：做扎实的底层绘图引擎，让 Seaborn、pandas 绘图等高级库构建其上。

## 生态位置

Python 可视化的基石。高级库 Seaborn（统计图美化）、pandas 的 `.plot()` 都基于它。竞品/补充：Plotly（交互式）、Bokeh（Web 交互）、D3（JS 生态）。与 NumPy、pandas、Jupyter 共同构成 Python 数据科学的核心工具链。

## 我的评价

Matplotlib 是 Python 数据科学"看得见"的那一环——再好的分析，最终都要靠图表传达洞察。它虽然 API 常被吐槽繁琐、默认样式不够美，但它扎实、全能、无处不在，是整个可视化生态的地基。它印证了基础设施的价值：**不一定最好用，但足够全面可靠，于是所有人都在它之上构建**。它与 NumPy、pandas 一起，定义了 Python 成为数据科学第一语言的根基。
