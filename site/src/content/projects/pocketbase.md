---
name: PocketBase
tagline: 单文件后端，一个可执行文件搞定后端
category: 后端服务
language: Go
born: 2022
era: AI原生
stars: 42k+
depth: seed
repo: https://github.com/pocketbase/pocketbase
website: https://pocketbase.io
tags: [BaaS, 单文件, SQLite, 轻量]
updated: 2026-04-17
---

## 一句话定位

PocketBase 是一个用 Go 编写的开源后端，把数据库（SQLite）、实时订阅、认证、文件存储和管理后台全部打包进一个单一可执行文件，下载即用、部署极简，是极致轻量的开源 BaaS，专为独立开发者和小项目而生。

## 诞生背景

2022 年由 Gani Georgiev 独立开发。Supabase、Appwrite 功能强大但部署较重（需要多个服务/容器）。PocketBase 走极简路线：一个二进制文件，内嵌 SQLite，无任何外部依赖，让"起一个后端"简单到不能再简单。

## 核心架构

- **单一可执行文件**：一个文件包含全部功能，无外部依赖
- **内嵌 SQLite**：数据库直接内建，无需单独部署
- **实时 API**：REST API + 实时订阅
- **内建管理后台**：开箱即用的可视化管理界面
- **可作为框架**：也能作为 Go 库嵌入自定义应用

## 关键设计决策

1. **极致简单**：把整个后端塞进一个二进制文件，部署和运维成本降到最低。
2. **拥抱 SQLite**：用内嵌 SQLite 而非独立数据库，契合小型应用、边缘部署。
3. **单人可维护**：刻意保持精简，由个人主导也能长期健康演进。

## 生态位置

极简开源 BaaS 的代表。在"BaaS 光谱"上处于最轻一端：PocketBase（单文件/SQLite）→ Supabase（PostgreSQL）→ Appwrite（完整平台栈）。适合原型、小型应用、独立开发者、自托管爱好者。

## 我的评价

PocketBase 是"约束即优势"的绝佳案例——它用"一个文件、内嵌 SQLite"的极致约束，换来了无与伦比的部署简单性。它和 SQLite、WireGuard 一样，都证明了"小而美"的持久魅力：**不是所有场景都需要分布式、微服务、多容器；对海量的中小项目，简单、够用、易维护，才是真正的贴心**。它也展示了单人开源项目在专注下能达到的高度。
