---
name: Swagger / OpenAPI
tagline: API 描述的通用标准，接口即文档
category: 开发工具
foundation: Linux 基金会
language: 多语言
born: 2011
era: 云计算
stars: 27k+
depth: seed
repo: https://github.com/swagger-api/swagger-ui
website: https://www.openapis.org
tags: [API, 文档, 标准, REST]
updated: 2026-04-21
---

## 一句话定位

Swagger（其规范后捐献为 OpenAPI 标准）是描述 RESTful API 的通用规范与工具集，用一份机器可读的文档定义 API 的所有细节，据此自动生成交互式文档、客户端 SDK、服务端骨架和测试，是 API 开发协作的事实标准。

## 诞生背景

2011 年诞生。当时 API 文档靠手写，容易与代码脱节、格式各异、难以协作。Swagger 提出用结构化的规范文件描述 API，让文档"标准化 + 机器可读 + 可自动化"。2015 年其规范捐给 Linux 基金会，更名为 OpenAPI。

## 核心架构

- **OpenAPI 规范**：用 YAML/JSON 描述路径、参数、请求/响应、认证等
- **Swagger UI**：把规范渲染成可交互的在线 API 文档（可直接试调）
- **代码生成**：由规范生成多语言客户端 SDK、服务端骨架
- **契约优先**：先定义 API 契约，再据此开发前后端
- **广泛工具生态**：编辑器、校验、mock、测试工具林立

## 关键设计决策

1. **机器可读的 API 契约**：把 API 定义标准化为可解析的文档，解锁全套自动化。
2. **契约即中枢**：一份规范同时驱动文档、SDK、mock、测试，消除文档与代码脱节。
3. **中立开放标准**：捐给 Linux 基金会成为 OpenAPI，避免厂商锁定，全行业采纳。

## 生态位置

REST API 描述的绝对标准。与 API 调试工具 Postman/Insomnia 配合，与 GraphQL（自带 schema，另一种 API 范式）形成对照。几乎所有主流后端框架都支持从代码生成 OpenAPI 文档。

## 我的评价

Swagger/OpenAPI 解决了协作中一个朴素却关键的问题——如何让前后端、不同团队对"API 长什么样"有一份权威、不过时、可自动化的共识。它的精髓是"契约优先"：**把接口定义抽象成一份中立的标准文档，让文档、代码、测试都围绕它自动生成，从而根治文档与实现脱节的顽疾**。它与 ONNX、Iceberg 一样，都是"标准的力量"的绝佳例证。
