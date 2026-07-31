---
name: Three.js
tagline: Web 上的 3D 引擎，让浏览器成为 3D 画布
category: 图形与可视化
language: JavaScript
born: 2010
era: 云计算
stars: 103k+
depth: seed
repo: https://github.com/mrdoob/three.js
website: https://threejs.org
tags: [3D, WebGL, 图形, 可视化]
updated: 2026-06-30
---

## 一句话定位

Three.js 是最流行的 JavaScript 3D 库，在 WebGL 之上提供简洁的高级 API，让开发者能轻松在浏览器中创建和渲染交互式 3D 图形、动画与可视化。

## 诞生背景

2010 年由 Ricardo Cabello（mrdoob）创建。原生 WebGL API 极其底层繁琐，直接使用门槛很高。Three.js 把它封装成场景、相机、几何体、材质、光照等直观概念，让 Web 3D 触手可及。

## 核心架构

- **Scene（场景）**：所有 3D 对象的容器
- **Camera（相机）**：定义观察视角（透视/正交）
- **Geometry + Material**：几何形状 + 表面材质
- **Renderer（渲染器）**：基于 WebGL/WebGPU 输出画面
- **光照与动画**：完整的光照模型和动画系统

## 关键设计决策

1. **封装 WebGL 复杂性**：用"场景-相机-渲染器"的直观模型，屏蔽底层图形管线细节。
2. **模块化几何/材质**：形状与外观解耦，自由组合。
3. **拥抱新标准**：从 WebGL 演进到支持 WebGPU，紧跟浏览器图形能力。

## 生态位置

Web 3D 领域的绝对主流。衍生生态：React Three Fiber（React 集成）、大量可视化与元宇宙应用。相关：D3.js（2D 数据可视化）、Babylon.js（竞品，偏游戏）。

## 我的评价

Three.js 是"用好的抽象降低门槛"的经典案例——它没有改变 WebGL 的能力边界，而是用一层优雅的抽象把"少数图形专家才能玩"的能力，变成了"普通前端也能上手"的工具，从而催生了整个 Web 3D 生态。降低使用门槛，本身就是在扩大一项技术的可能性边界。
