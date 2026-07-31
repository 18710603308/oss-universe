---
name: FastAPI
tagline: 现代高性能 Python API 框架，类型即文档
category: 后端框架
language: Python
born: 2018
era: 云原生
stars: 78k+
depth: seed
repo: https://github.com/fastapi/fastapi
website: https://fastapi.tiangolo.com
tags: [Web框架, 异步, 类型提示, API]
updated: 2026-07-01
---

## 一句话定位

FastAPI 是基于 Python 类型提示的现代 Web API 框架，用异步支持带来高性能，用类型注解自动生成数据校验和交互式 API 文档，是当今构建 Python API（尤其 AI 服务）的热门选择。

## 诞生背景

2018 年由 Sebastián Ramírez 发布。他把 Python 3.6+ 的类型提示、异步（asyncio）、以及 Pydantic 数据校验、Starlette 异步框架优雅整合，解决了传统 Python 框架性能低、缺乏类型与自动文档的痛点。

## 核心架构

- **基于类型提示**：函数参数的类型注解即接口契约
- **Pydantic**：数据校验与序列化
- **Starlette**：底层 ASGI 异步框架
- **自动 API 文档**：自动生成 Swagger UI / ReDoc
- **依赖注入**：内置简洁的 DI 系统

## 关键设计决策

1. **类型即契约**：用 Python 类型提示同时完成参数校验、序列化、文档生成，一处声明多处受益。
2. **异步优先**：基于 ASGI，性能接近 Node.js/Go。
3. **开发体验**：自动交互式文档、编辑器智能提示，开发效率极高。

## 生态位置

现代 Python API 框架的代表，是 AI/ML 模型服务化的首选（vLLM、众多 LLM 服务均用它）。对比：Django（全功能）、Flask（微框架、同步）。

## 我的评价

FastAPI 是"善用语言新特性"的典范——它没有发明新概念，而是把 Python 的类型提示、异步、以及 Pydantic/Starlette 等已有组件巧妙组合，产生了 1+1>2 的效果。它揭示了框架创新的另一条路：不必从零发明，敏锐地整合恰当的既有能力，同样能定义一个时代的最佳实践。
