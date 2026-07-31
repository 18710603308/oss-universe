---
name: Hugo
tagline: 世界最快的静态站点生成器，Go 语言打造
category: CMS建站
language: Go
born: 2013
era: 云计算
stars: 76k+
depth: seed
repo: https://github.com/gohugoio/hugo
website: https://gohugo.io
tags: [静态站点, SSG, Markdown]
updated: 2026-07-05
---

## 一句话定位

Hugo 是用 Go 编写的静态站点生成器（SSG），以极快的构建速度著称，把 Markdown 内容和模板编译成纯静态 HTML，广泛用于博客、文档站和企业官网。

## 诞生背景

2013 年发布。当时静态站点生成器（如 Ruby 的 Jekyll）构建大型站点很慢。Hugo 用 Go 的高性能，把上千页面的构建时间从分钟级降到毫秒级，主打"快"。

## 核心架构

- **内容（Content）**：Markdown 文件 + Front Matter 元数据
- **模板（Template）**：Go 模板语言渲染页面
- **单二进制**：无依赖，一个可执行文件即可运行
- **快速构建**：并行处理，构建速度业界领先

## 关键设计决策

1. **速度优先**：用 Go 的并发和高性能，把构建速度做到极致，大型站点也秒级完成。
2. **零依赖**：单个二进制文件，无需 Node/Ruby 运行时，部署极简。
3. **内容与表现分离**：Markdown 写内容，模板管样式，关注点清晰。

## 生态位置

静态站点生成器的性能标杆。竞品：Jekyll（Ruby，GitHub Pages 默认）、Astro（本站所用，更偏应用）、Hexo、11ty、VitePress（文档）。

## 我的评价

Hugo 是"把一件事做到极致"的代表——它不追求大而全，就专注于"最快的静态构建"这一个点，用 Go 的性能优势建立了难以撼动的护城河。在工具选型中，一个足够突出的单点优势（如极致的速度），往往比样样及格更有竞争力。本学习网站选用 Astro 而非 Hugo，则是因为需要更强的交互能力——工具选型永远是场景驱动的。
