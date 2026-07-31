---
name: Istio
tagline: 最知名的服务网格，把流量治理从应用中剥离
category: 云原生
foundation: CNCF
language: Go
born: 2017
era: 云原生
stars: 36k+
depth: seed
repo: https://github.com/istio/istio
website: https://istio.io
tags: [服务网格, 微服务, Envoy]
updated: 2026-07-14
---

## 一句话定位

Istio 是 Google、IBM、Lyft 联合开源的服务网格（Service Mesh），通过在每个服务旁注入代理（Sidecar），把流量管理、安全、可观测性从应用代码中剥离到基础设施层。

## 诞生背景

2017 年发布。微服务架构下，服务间通信的重试、熔断、加密、监控等逻辑散落在各个应用中，重复且难统一。Istio 提出把这些"横切关注点"下沉到独立的网络层。

## 核心架构

- **数据平面**：Envoy 代理以 Sidecar 形式注入每个 Pod，接管所有进出流量
- **控制平面（istiod）**：统一配置和管理所有 Envoy 代理
- **流量管理**：路由、灰度、熔断、重试
- **安全**：自动 mTLS 加密服务间通信
- **可观测性**：自动生成指标、日志、链路追踪

## 关键设计决策

1. **Sidecar 模式**：应用无需改代码，代理透明接管网络，实现关注点分离。
2. **控制面/数据面分离**：istiod 下发配置，Envoy 执行，职责清晰。
3. **渐进演进**：近年推出 Ambient 模式，去除 Sidecar 以降低资源开销。

## 生态位置

服务网格领域最知名项目。数据面基于 Envoy。竞品：Linkerd（更轻量）、Cilium Service Mesh（基于 eBPF）。

## 我的评价

Istio 是"关注点分离"在分布式系统层面的极致体现——它把每个微服务都要重复实现的网络逻辑，抽象成一层透明的基础设施。但它也警示了"抽象的代价"：Sidecar 带来的复杂度和性能开销一度让人却步，才有了后来去 Sidecar 的 Ambient 模式。任何抽象都有成本，架构演进就是在能力与复杂度间不断再平衡。
