---
name: Appwrite
tagline: 自建后端服务平台，全栈开发者的后端引擎
category: 后端服务
language: PHP/TypeScript
born: 2019
era: 云原生
stars: 46k+
depth: seed
repo: https://github.com/appwrite/appwrite
website: https://appwrite.io
tags: [BaaS, 后端即服务, 自托管, 全栈]
updated: 2026-04-18
---

## 一句话定位

Appwrite 是开源的后端即服务（BaaS）平台，提供认证、数据库、存储、函数、消息等一整套后端 API，通过 Docker 一键自托管，让前端和移动开发者无需从零搭建后端就能构建完整应用，是 Firebase 的又一开源替代。

## 诞生背景

2019 年发布。与 Supabase 押注 PostgreSQL 不同，Appwrite 选择自建一套后端服务栈，用容器打包成一个可自托管的完整平台，目标是给开发者一个"装上就能用"的全能后端。

## 核心架构

- **认证系统**：多种登录方式、用户与团队管理
- **数据库**：文档式数据库，含权限控制
- **存储**：文件上传、转换、加密
- **Functions**：多语言 serverless 函数
- **多端 SDK**：Web、Flutter、Apple、Android 等全平台 SDK

## 关键设计决策

1. **自建完整栈**：不依赖单一数据库，而是提供一整套自研后端服务，开箱即用。
2. **容器化自托管**：Docker 一键部署，数据完全自主，避免云锁定。
3. **多端 SDK 优先**：为各种前端/移动平台提供一致的 SDK，服务全栈开发者。

## 生态位置

开源 BaaS 的主要玩家之一。与 Supabase（基于 PostgreSQL、SQL 生态）路线不同，Appwrite 更像"自成一体的后端平台"。竞品还有 PocketBase（单文件轻量）、Firebase（闭源）。适合想快速拥有全套后端能力的独立开发者和小团队。

## 我的评价

Appwrite 和 Supabase 代表了开源 BaaS 的两条路线——Supabase"站在 PostgreSQL 巨人肩上"，Appwrite"自建一套完整栈"。这个对比很有意思：前者复用成熟标准、生态兼容强，后者掌控全栈、体验更统一。它们的共同繁荣反映了一个明确趋势：**后端能力正在"平台化、服务化"，让开发者能把精力集中在产品而非基础设施上**——这是全栈开发民主化的重要一步。
