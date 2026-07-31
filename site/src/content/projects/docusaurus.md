---
name: Docusaurus
tagline: React 驱动的文档站点生成器，让文档易建易维护
category: 文档知识
foundation: Meta
language: TypeScript
born: 2017
era: 云原生
stars: 57k+
depth: seed
repo: https://github.com/facebook/docusaurus
website: https://docusaurus.io
tags: [文档站点, 静态站点, React, Markdown]
updated: 2026-04-15
---

## 一句话定位

Docusaurus 是 Meta 开源的文档站点生成器，用 Markdown 写内容、React 做定制，快速生成美观、带全文搜索、版本管理和国际化的文档网站，是开源项目和技术团队搭建文档的热门选择。

## 诞生背景

2017 年由 Facebook 开源。开源项目都需要好文档，但从零搭文档站点（导航、搜索、版本、主题）很费力。Docusaurus 提供了一套开箱即用的方案，让维护者能专注写内容而非折腾站点基建。

## 核心架构

- **Markdown/MDX**：用 Markdown 写文档，MDX 中可嵌入 React 组件
- **React 定制**：基于 React，页面和主题高度可定制
- **版本管理**：为不同版本维护多套文档
- **国际化（i18n）**：内建多语言支持
- **全文搜索**：集成 Algolia 等搜索方案

## 关键设计决策

1. **内容与呈现分离**：内容用 Markdown 写、呈现由 React 主题负责，作者专注写作。
2. **文档专属功能内建**：版本、i18n、搜索这些文档站点的刚需开箱即用。
3. **MDX 增强**：允许在文档中嵌入交互式 React 组件，让文档"活"起来。

## 生态位置

技术文档站点生成器的主流之一。React/Jest/众多开源项目用它建文档。竞品：MkDocs（Python、更简单）、VitePress（Vue 生态、更快）、GitBook（商业）、Nextra（Next.js）。属于静态站点生成器（SSG）在"文档"这一垂直场景的专精产品。

## 我的评价

Docusaurus 抓住了开源世界一个朴素却关键的真理——**文档是项目成败的一半**。再好的代码，文档差就没人会用。它把"搭一个专业文档站"的成本降到极低，间接提升了整个开源生态的文档质量。它和本站（同为内容优先的静态站点，本站用 Astro）气质相通，都相信：**好内容值得一个好的呈现载体**，而降低这个载体的搭建门槛，就是对知识传播的贡献。
