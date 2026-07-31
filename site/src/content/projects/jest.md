---
name: Jest
tagline: 零配置的 JavaScript 测试框架，前端单测标准
category: 测试
foundation: OpenJS
language: JavaScript
born: 2014
era: 云计算
stars: 44k+
depth: seed
repo: https://github.com/jestjs/jest
website: https://jestjs.io
tags: [单元测试, 快照测试, 前端, 零配置]
updated: 2026-06-09
---

## 一句话定位

Jest 是 Facebook 开源的 JavaScript 测试框架，以"零配置、开箱即用"著称，集测试运行器、断言、Mock、覆盖率、快照测试于一体，是 React 及广大前端项目单元测试的事实标准。

## 诞生背景

2014 年由 Facebook 为测试 React 而开发。此前 JS 测试需要拼装 Mocha（运行器）+ Chai（断言）+ Sinon（Mock）等多个库，配置繁琐。Jest 把这些整合进一个开箱即用的工具。

## 核心架构

- **一体化**：运行器 + 断言 + Mock + 覆盖率 + 快照，无需拼装
- **零配置**：合理默认值，装上即可跑
- **快照测试（Snapshot）**：保存组件/输出快照，比对变化
- **并行执行**：多进程并行跑测试，速度快
- **强大的 Mock**：模块、函数、定时器的便捷 Mock

## 关键设计决策

1. **一体化 + 零配置**：把测试所需的一切整合，消除拼装多个库的负担。
2. **快照测试**：为 UI 组件测试提供一种便捷的"回归检测"方式。
3. **隔离与并行**：每个测试文件在独立环境并行运行，快且互不干扰。

## 生态位置

前端单元测试的事实标准（OpenJS 项目），React 生态默认。新兴挑战者：Vitest（Vite 生态、更快、兼容 Jest API）。E2E 层面则由 Playwright/Cypress 负责。

## 我的评价

Jest 是"整合 + 零配置降低门槛"的又一成功案例——它把原本需要东拼西凑的测试工具链收敛为开箱即用的一体化方案，大幅降低了写测试的门槛。降低门槛的直接效果是：更多人愿意写测试，代码质量随之提升。工具的易用性，最终会转化为工程文化的改善。
