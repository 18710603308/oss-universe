---
name: Zipkin
tagline: 分布式链路追踪的开创者，源自 Twitter
category: 可观测性
language: Java
born: 2012
era: 云计算
stars: 17k+
depth: seed
repo: https://github.com/openzipkin/zipkin
website: https://zipkin.io
tags: [链路追踪, 分布式, 可观测性, Trace]
updated: 2026-05-05
---

## 一句话定位

Zipkin 是 Twitter 开源的分布式链路追踪系统，帮助收集和可视化一次请求在多个微服务间流转的完整路径与耗时，是最早把 Google Dapper 论文思想开源落地的追踪系统，普及了"分布式追踪"这一可观测性支柱。

## 诞生背景

2012 年由 Twitter 开源，思想源自 Google 的 Dapper 论文。随着微服务兴起，一次请求会跨越几十个服务，出问题时"到底慢在哪一环"极难定位。Zipkin 通过给请求打上贯穿全链路的 trace，让分布式调用的路径与耗时变得可见。

## 核心架构

- **Trace 与 Span**：一次请求是一个 Trace，每段调用是一个 Span，串成调用树
- **上下文传播**：trace ID 随请求头在服务间传递
- **数据收集**：各服务上报 Span 到 Zipkin
- **可视化**：展示调用链路的火焰图/时间线，定位瓶颈
- **多存储后端**：内存、MySQL、Elasticsearch、Cassandra 等

## 关键设计决策

1. **Dapper 落地**：把 Google 内部的分布式追踪思想开源，惠及整个微服务社区。
2. **Trace/Span 模型**：用 trace + span 的树形模型描述分布式调用，成为追踪的通用范式。
3. **上下文传播**：靠 trace ID 在服务间透传，把分散的调用重新串成完整链路。

## 生态位置

分布式追踪的开创者。后来者 Jaeger（CNCF、Uber）功能更强，OpenTelemetry 则统一了追踪/指标/日志的采集标准。Zipkin 的 Trace/Span 模型是这一切的思想源头，与 Prometheus（指标）、日志共同构成可观测性三支柱。

## 我的评价

Zipkin 定义了可观测性的第三根支柱——链路追踪。在微服务把一次请求拆散到几十个服务后，"追踪"回答了指标和日志都难以回答的问题：这次慢，到底卡在哪一环？它把 Google Dapper 的思想开源，让追踪从大厂专利变成人人可用。它的 Trace/Span 模型如此经典，以至于 Jaeger、OpenTelemetry 都是其思想的延续与标准化。
