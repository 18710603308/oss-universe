---
name: Linkerd
tagline: 最早的服务网格，轻量与简单优先
category: 云原生
foundation: CNCF
language: Rust/Go
born: 2016
era: 云原生
stars: 11k+
depth: seed
repo: https://github.com/linkerd/linkerd2
website: https://linkerd.io
tags: [服务网格, 轻量, Rust, CNCF]
updated: 2026-05-16
---

## 一句话定位

Linkerd 是最早提出"服务网格（Service Mesh）"概念的项目，也是 CNCF 毕业项目，以极致的轻量、简单和安全为设计原则，用超轻的 Rust 微代理为微服务提供 mTLS、可观测性和可靠性，是 Istio 的简约替代。

## 诞生背景

2016 年发布，"Service Mesh"一词即由它推广。第一代基于 JVM 较重，第二代（Linkerd 2）用 Rust 重写了数据面微代理，主打"小而快、开箱即用、认知负担低"，与功能繁多但复杂的 Istio 形成鲜明对比。

## 核心架构

- **Rust 微代理**：超轻量的数据面 Sidecar（专用微代理，非通用 Envoy）
- **自动 mTLS**：零配置的服务间加密
- **可观测性**：自动的黄金指标（成功率、延迟、吞吐）
- **控制平面（Go）**：管理配置与证书
- **简单优先**：刻意克制功能，降低复杂度

## 关键设计决策

1. **简单优先**：与 Istio 的"功能全"相反，Linkerd 刻意保持最小功能集，降低运维认知负担。
2. **专用 Rust 微代理**：不用通用的 Envoy，而是自研超轻代理，资源占用极低。
3. **零配置默认**：mTLS、指标开箱即用，装上即见效。

## 生态位置

服务网格的两大代表之一（与 Istio）。定位分野：Istio 功能强大但复杂、生态大；Linkerd 简单轻量、易上手。新兴的 Cilium（eBPF、无 Sidecar）则是第三条路线。

## 我的评价

Linkerd 与 Istio 的对比是"简单 vs 功能"哲学之争的经典案例——Istio 什么都能做但复杂，Linkerd 只做核心但极简易用。Linkerd 用 Rust 微代理证明了"服务网格不必那么重"。在工具选型中，"功能够用 + 简单可维护"常常比"功能最全"更有价值，尤其对中小团队。
