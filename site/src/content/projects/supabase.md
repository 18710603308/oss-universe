---
name: Supabase
tagline: 开源的 Firebase 替代，基于 PostgreSQL 的后端即服务
category: 后端服务
language: TypeScript
born: 2020
era: AI原生
stars: 74k+
depth: seed
repo: https://github.com/supabase/supabase
website: https://supabase.com
tags: [BaaS, PostgreSQL, 后端即服务, 实时]
updated: 2026-04-18
---

## 一句话定位

Supabase 是开源的后端即服务（BaaS）平台，自称"开源的 Firebase 替代"，围绕 PostgreSQL 一键提供数据库、认证、实时订阅、存储、边缘函数等后端能力，让开发者无需自建后端就能快速构建应用，且不被厂商锁定。

## 诞生背景

2020 年发布。Firebase 让前端开发者能快速搭后端，但它闭源、基于私有 NoSQL、且锁定 Google。Supabase 想提供同样的便利，却建立在开源、标准的 PostgreSQL 之上——既便捷，又开放、可自托管、可迁移。

## 核心架构

- **PostgreSQL 核心**：直接用成熟强大的 Postgres，而非私有数据库
- **自动 API**：根据表结构自动生成 REST 和 GraphQL API
- **实时订阅**：数据库变更实时推送到客户端
- **内建认证**：用户管理、行级安全（RLS）
- **存储 + 边缘函数**：文件存储与 serverless 函数

## 关键设计决策

1. **押注 PostgreSQL**：不造私有数据库，站在最强开源关系库之上，兼得能力与开放。
2. **开源 + 可自托管**：与 Firebase 的闭源锁定相反，数据和后端完全自主。
3. **组合开源积木**：整合 PostgREST、GoTrue 等成熟开源组件，而非重造。

## 生态位置

开源 BaaS 的领军者。竞品：Firebase（闭源、Google）、Appwrite（自建后端栈）、PocketBase（单文件轻量）、Nhost。它踩中了"全栈/前端开发者想快速搞定后端"的强需求，是现代应用快速开发的热门底座。

## 我的评价

Supabase 是"开源替代 + 拥抱标准"的教科书案例——它精准复刻了 Firebase 的便利体验，却用开源的 PostgreSQL 破解了后者的锁定焦虑。它的聪明在于不造轮子：把 PostgREST、GoTrue 等成熟开源组件组装成完整体验。它证明：**面对一个成功的闭源产品，"开源 + 基于开放标准 + 可自托管"往往是最有力的差异化竞争，也最能赢得开发者的长期信任。**
