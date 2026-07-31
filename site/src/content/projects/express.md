---
name: Express
tagline: Node.js 的极简 Web 框架，后端 JS 的奠基者
category: 后端框架
foundation: OpenJS
language: JavaScript
born: 2010
era: Web2.0
stars: 66k+
depth: seed
repo: https://github.com/expressjs/express
website: https://expressjs.com
tags: [Node.js, Web框架, 中间件, 极简]
updated: 2026-06-20
---

## 一句话定位

Express 是 Node.js 上最经典、最流行的 Web 应用框架，以极简的核心和灵活的中间件机制，为构建 Web 服务器和 API 提供了轻量而强大的基础，是无数 Node 后端项目的起点。

## 诞生背景

2010 年由 TJ Holowaychuk 创建。Node.js 原生 HTTP 模块太底层，写路由、处理请求繁琐。Express 受 Ruby 的 Sinatra 启发，用极简 API 和中间件模型封装了这些常见任务。

## 核心架构

- **路由（Routing）**：把 URL 路径映射到处理函数
- **中间件（Middleware）**：请求处理的管道，`(req, res, next)` 层层传递
- **极简核心**：核心极小，功能靠中间件按需组合
- **模板与静态服务**：可选的视图渲染与静态文件服务

## 关键设计决策

1. **中间件管道**：把请求处理抽象为一串可组合的中间件，灵活且易扩展——这一模型影响了后续无数框架。
2. **极简无主张**：核心不做过多约束，把架构选择权交给开发者。
3. **生态优先**：核心小，繁荣的中间件生态覆盖各种需求。

## 生态位置

Node.js Web 框架的奠基者与最流行选择，现由 OpenJS 基金会维护。后辈：Koa（同作者，async 中间件）、Fastify（高性能）、NestJS（企业级、基于它）、Hono（多运行时）。

## 我的评价

Express 的"中间件管道"是一个影响深远的抽象——把 HTTP 请求处理建模为一串可插拔的函数，简单却极具扩展性，几乎成了此后所有 Web 框架的共同范式。它也体现了"极简核心 + 繁荣生态"的成功模式：核心保持小而稳定，把无限可能交给社区的中间件。这是它历经十余年仍是 Node 后端起点的原因。
