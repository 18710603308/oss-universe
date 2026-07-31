---
name: Directus
tagline: 包装任意数据库的即时 API 与后台
category: 后端服务
language: TypeScript
born: 2015
era: 云原生
stars: 30k+
depth: seed
repo: https://github.com/directus/directus
website: https://directus.io
tags: [Headless CMS, 数据平台, API, 后台]
updated: 2026-03-25
---

## 一句话定位

Directus 是开源的数据平台，能"包裹"在任意现有 SQL 数据库之上，即时生成 REST/GraphQL API 和一个美观的管理后台，让开发者和非技术团队都能管理数据。它既是 Headless CMS，也是通用的数据库工作台。

## 诞生背景

2015 年发布。多数 Headless CMS 会强制你用它自己的数据库结构。Directus 的独特之处：它不接管你的数据，而是"镜像"你已有的数据库——你的表结构就是它的数据模型，数据仍以纯粹的形式存在你自己的库里。

## 核心架构

- **数据库镜像**：直接映射现有 SQL 数据库的表结构，不强加结构
- **即时 API**：自动生成 REST 和 GraphQL API
- **管理后台（App）**：美观、可定制的无代码数据管理界面
- **权限与流程**：细粒度权限、工作流自动化
- **数据库无关**：支持 PostgreSQL、MySQL、SQLite 等

## 关键设计决策

1. **不接管数据**：包裹现有数据库而非强加自己的结构，数据保持纯粹、可随时脱离。
2. **API + 后台双产出**：一次接入，同时得到 API 和管理界面，覆盖开发者与运营。
3. **数据库无关**：适配主流 SQL 库，可用于既有系统的现代化改造。

## 生态位置

Headless CMS / 数据平台的独特一员。与 Strapi（自建数据模型）、Supabase（PostgreSQL BaaS）路线不同：Directus 强调"包裹你已有的任意数据库"。适合给既有数据库快速加 API 和后台，或做数据密集型应用的中台。

## 我的评价

Directus 的独特哲学值得玩味——大多数 CMS 要你"按我的方式建数据"，Directus 却说"用你自己的数据库，我来包装它"。这个"不接管、只增强"的定位极其务实：**它承认现实中大量数据已存在于既有数据库里，与其要求迁移，不如就地赋能**。这种尊重存量、降低采用摩擦的思路，往往比"推翻重来"更受企业欢迎，也是它在 Headless CMS 中独树一帜的原因。
