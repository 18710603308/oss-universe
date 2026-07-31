---
name: Plotly
tagline: 交互式可视化库，图表会说话
category: AI/ML
language: Python/JavaScript
born: 2013
era: 云计算
stars: 16k+
depth: seed
repo: https://github.com/plotly/plotly.py
website: https://plotly.com
tags: [数据可视化, 交互式, 图表, Dashboard]
updated: 2026-04-30
---

## 一句话定位

Plotly 是跨语言的交互式可视化库，生成的图表可缩放、悬停查看数据、动态筛选，弥补了 Matplotlib 静态图的不足，配合其 Dash 框架还能纯 Python 构建交互式数据看板，是数据科学"讲故事"的利器。

## 诞生背景

2013 年发布。Matplotlib 擅长静态科学图，但在 Web 时代，人们需要能交互探索的图表（悬停、缩放、联动）。Plotly 基于 D3/WebGL 打造交互式图表，并提供 Python、R、JS 等多语言接口。

## 核心架构

- **交互式图表**：悬停提示、缩放、平移、图例筛选
- **多语言接口**：Python、R、JavaScript、Julia 一致体验
- **Plotly.js**：底层基于 D3 与 WebGL 的 JS 渲染引擎
- **Dash 框架**：纯 Python 构建交互式 Web 数据应用
- **丰富图型**：3D、地图、金融、科学图表齐全

## 关键设计决策

1. **交互优先**：图表默认可交互，让用户"探索"数据而非只是"看"数据。
2. **一套引擎多语言**：底层 Plotly.js 统一渲染，各语言接口共享能力。
3. **Dash 打通全栈**：让数据科学家无需前端知识也能做出交互式看板。

## 生态位置

交互式可视化的代表。与 Matplotlib/Seaborn（静态、科研）互补，与 Bokeh（同为 Web 交互）竞争。Dash 则与 Streamlit、Gradio 同属"Python 快速搭数据应用"赛道。适合报告、看板、数据探索。

## 我的评价

Plotly 抓住了可视化从"印刷时代"到"Web 时代"的转变——当图表的载体从纸张变成屏幕，"可交互"就从加分项变成刚需。它与 Matplotlib 的关系不是取代而是互补：科研出版用 Matplotlib，数据探索和看板用 Plotly。它的 Dash 更点出一个趋势：**让领域专家（数据科学家）无需跨界（学前端）就能交付成品**，这正是好工具赋能的方向。
