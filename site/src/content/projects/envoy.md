---
name: Envoy
tagline: 云原生高性能服务代理，服务网格的数据平面
category: 云原生
foundation: CNCF
language: C++
born: 2016
era: 云原生
stars: 25k+
depth: seed
repo: https://github.com/envoyproxy/envoy
website: https://www.envoyproxy.io
tags: [代理, 服务网格, L7, xDS]
updated: 2026-06-28
---

## 一句话定位

Envoy 是 Lyft 开源、后成为 CNCF 毕业项目的高性能边缘与服务代理，专为云原生微服务设计，以强大的 L7 流量治理能力成为 Istio 等服务网格的数据平面标准。

## 诞生背景

2016 年由 Lyft 开源。微服务架构下，服务间通信的负载均衡、重试、熔断、可观测性缺乏统一方案。Envoy 提出把这些网络能力下沉到一个独立的、语言无关的 Sidecar 代理中。

## 核心架构

- **L7 代理**：深入理解 HTTP/gRPC，做智能路由与治理
- **xDS API**：动态配置发现协议（EDS/CDS/RDS/LDS），可运行时热更新
- **Filter 链**：可组合的过滤器处理请求
- **可观测性**：内置丰富的指标、日志、分布式追踪
- **语言无关**：以 Sidecar 形式服务任何语言的应用

## 关键设计决策

1. **xDS 动态配置**：通过标准化的发现 API 让控制平面动态下发配置，无需重启——这是它成为服务网格数据面的关键。
2. **L7 感知**：不止转发字节，而是理解应用层协议，实现精细治理。
3. **可观测性内建**：把"看得见"作为一等公民，而非事后补丁。

## 生态位置

服务网格数据平面的事实标准。Istio、Consul、Gloo 等都用它。xDS 协议已成为代理配置的通用标准。竞品：Nginx（传统）、Linkerd 自研代理、Cilium（eBPF）。

## 我的评价

Envoy 最深远的贡献是 **xDS 协议**——它把"代理配置"标准化为一套动态发现 API，让控制平面与数据平面彻底解耦。这与 LSP 之于编辑器、OCI 之于容器是同一种智慧：定义一个开放协议，让整个生态围绕它协作。Envoy 证明了在云原生时代，"协议"往往比"实现"更有统治力。
