---
name: Next.js
tagline: React 生态最流行的全栈框架，定义了现代 Web 开发
category: 前端框架
foundation: Vercel
language: TypeScript
born: 2016
era: 云计算
stars: 127k+
depth: seed
repo: https://github.com/vercel/next.js
website: https://nextjs.org
tags: [React, SSR, 全栈, 元框架]
updated: 2026-07-04
---

## 一句话定位

Next.js 是 Vercel 开源的 React 全栈框架，提供服务端渲染（SSR）、静态生成（SSG）、增量再生成（ISR）、路由、API 等开箱即用能力，是当今构建生产级 React 应用的主流选择。

## 诞生背景

2016 年发布。纯 React 是客户端渲染，存在首屏慢、SEO 差的问题，且需要自己搭建路由、构建、SSR。Next.js 把这些工程化难题封装成约定优于配置的框架。

## 核心架构

- **渲染模式**：SSR、SSG、ISR、CSR 灵活组合
- **文件系统路由**：目录结构即路由
- **App Router**：基于 React Server Components 的新架构
- **API Routes**：同一项目内写后端接口
- **深度优化**：图片、字体、脚本自动优化

## 关键设计决策

1. **多种渲染模式融合**：让开发者按页面粒度选择 SSR/SSG/ISR，兼顾性能与动态性。
2. **约定优于配置**：文件路由、零配置构建，降低搭建成本。
3. **React Server Components**：推动前后端边界的重新划分，减少客户端 JS。

## 生态位置

React 元框架的绝对主流，与 Vercel 部署平台深度绑定。竞品：Remix（Web 标准优先）、Astro（内容优先，本站所用）、Nuxt（Vue 阵营）。

## 我的评价

Next.js 的意义在于它把"React 该怎么用于生产"这个开放问题，给出了一套有主见的答案——从路由到渲染到部署形成完整闭环。它也引发了争议：框架与 Vercel 商业平台的绑定，让人重新思考开源框架与商业公司的边界。它是理解"现代全栈 Web 架构演进"的必修项目。
