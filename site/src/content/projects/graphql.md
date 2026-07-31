---
name: GraphQL
tagline: 面向 API 的查询语言，让客户端精确索取所需数据
category: 网络通信
foundation: Linux 基金会
language: 多语言
born: 2015
era: 云原生
stars: 14k+
depth: seed
repo: https://github.com/graphql/graphql-spec
website: https://graphql.org
tags: [API, 查询语言, 前后端, Schema]
updated: 2026-06-02
---

## 一句话定位

GraphQL 是 Facebook 开源的 API 查询语言与运行时，让客户端用一次请求精确声明所需的数据结构，解决了 REST 中"过度获取/获取不足"的痛点，是现代 API 设计的重要范式。

## 诞生背景

2015 年由 Facebook 开源（内部 2012 年已用）。移动端在弱网下用 REST 很痛苦：一个页面要调多个接口（获取不足），又常拿到大量用不到的字段（过度获取）。GraphQL 让客户端"想要什么就精确声明什么"。

## 核心架构

- **Schema + 类型系统**：服务端定义强类型的数据图
- **声明式查询**：客户端写查询，精确指定需要的字段
- **单一端点**：一个端点处理所有查询（对比 REST 的多端点）
- **Query / Mutation / Subscription**：查询、变更、实时订阅
- **Resolver**：服务端字段解析函数

## 关键设计决策

1. **客户端驱动取数**：把"要哪些数据"的决定权交给客户端，一次请求精确获取，杜绝过度/不足获取。
2. **强类型 Schema**：Schema 即契约与文档，工具链（自动补全、校验）由此而来。
3. **单端点聚合**：一个查询可跨多个数据源聚合，简化前端调用。

## 生态位置

现代 API 的重要范式（现由 GraphQL 基金会/Linux 基金会托管）。生态：Apollo、Relay（客户端）、Hasura（即时 API）。与 REST、gRPC 形成 API 三选一：REST 通用简单、gRPC 内部高效、GraphQL 前端灵活取数。

## 我的评价

GraphQL 的核心洞察是"把取数的控制权从服务端交给客户端"——这一权力转移解决了 REST 时代前后端反复对接字段的顽疾。但它也带来新的复杂度（N+1 查询、缓存、鉴权粒度）。它和 REST、gRPC 的三方对比再次说明：API 设计没有银弹，关键是让接口的"数据契约"匹配调用方的真实需求。
