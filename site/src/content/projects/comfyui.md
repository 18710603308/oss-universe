---
name: ComfyUI
tagline: 节点式 AI 图像生成工作流，Stable Diffusion 的强大前端
category: AI/ML
language: Python
born: 2023
era: AI原生
stars: 60k+
depth: seed
repo: https://github.com/comfyanonymous/ComfyUI
website: https://www.comfy.org
tags: [AIGC, 图像生成, 工作流, Stable Diffusion]
updated: 2026-07-08
---

## 一句话定位

ComfyUI 是一个基于节点（node-based）的 Stable Diffusion 图形界面，用可视化的连线工作流精确控制 AI 图像/视频生成的每一个环节，是 AIGC 高级用户的首选工具。

## 诞生背景

2023 年发布。Stable Diffusion 开源后，A1111 WebUI 用表单式界面降低了门槛，但难以精细控制复杂流程。ComfyUI 用「节点图」范式，把采样、编码、放大等步骤拆成可自由连接的节点。

## 核心架构

- **节点（Node）**：每个节点是一个操作（加载模型、编码提示、采样、放大等）
- **工作流（Workflow）**：节点连线组成的有向图，可保存/分享/复用
- **按需执行**：只重算变动的节点，缓存未变部分
- **插件生态**：海量自定义节点扩展能力（ControlNet、视频、动画等）

## 关键设计决策

1. **节点式而非表单式**：把生成流程显式化为数据流图，换来极致的可控性和可复现性。
2. **工作流可分享**：一张生成图片内嵌其工作流，他人可一键复现。
3. **模块化执行**：细粒度缓存，只重算必要节点，效率高。

## 生态位置

AIGC 图像生成的高级工具。底层是 Stable Diffusion 系列模型。对比：A1111 WebUI（更易上手）、Fooocus（最简）。ComfyUI 以可控性和可编排性见长。

## 我的评价

ComfyUI 的节点范式，本质上是把「AI 生成」从黑盒变成了可编排的数据流管线——这与 n8n、Airflow 等工作流工具异曲同工。它揭示了一个趋势：随着 AI 能力增强，人的价值正从"执行"转向"编排"。掌握"如何把 AI 能力组合成流程"，会成为 AI 时代的核心技能。
