---
name: Jaeger
tagline: 云原生分布式链路追踪系统，看清微服务的调用链
category: 可观测性
foundation: CNCF
language: Go
born: 2016
era: 云原生
stars: 21k+
depth: seed
repo: https://github.com/jaegertracing/jaeger
website: https://www.jaegertracing.io
tags: [链路追踪, 分布式, 微服务]
updated: 2026-06-22
---

## 一句话定位

Jaeger 是 Uber 开源、后成为 CNCF 毕业项目的分布式链路追踪系统，用于追踪一个请求在众多微服务间的完整调用路径，定位性能瓶颈与故障根因。

## 诞生背景

2016 年由 Uber 开源，受 Google Dapper 论文启发。微服务架构下，一个用户请求可能穿过几十个服务，出了问题很难定位是哪一环。Jaeger 通过给请求分配 TraceID 并串联各服务的 Span，还原完整调用链。

## 核心架构

- **Trace / Span**：一次请求是一个 Trace，每个服务处理是一个 Span
- **上下文传播**：TraceID 随请求在服务间传递
- **采样**：按策略采样，控制追踪数据量
- **存储后端**：Elasticsearch、Cassandra 等
- **UI**：可视化调用链的时序瀑布图

## 关键设计决策

1. **TraceID 串联**：用贯穿全链路的 ID 把分散在各服务的日志/耗时串成一条完整路径。
2. **采样控制成本**：全量追踪代价高，用采样在可观测性与开销间平衡。
3. **拥抱 OpenTelemetry**：逐步以 OTel 作为数据采集标准，聚焦存储与展示。

## 生态位置

分布式追踪的代表实现（可观测性三支柱之"追踪"）。与 Prometheus（指标）、Loki（日志）、Grafana（可视化）、OpenTelemetry（采集标准）构成完整可观测性栈。竞品：Zipkin、Tempo。

## 我的评价

Jaeger 解决的是微服务架构的"必然代价"——当系统被拆成几十个服务，可观测性就从"锦上添花"变成"生存必需"。它体现了一条规律：**每一种架构在带来好处的同时，都会催生新的配套需求**。微服务解耦了系统，也就必然需要链路追踪来重新"看见"整体。理解它，是理解可观测性为何成为云原生刚需的关键。
