---
name: Cilium
tagline: 基于 eBPF 的云原生网络与安全，重塑 K8s 数据面
category: 云原生
foundation: CNCF
language: Go
born: 2016
era: 云原生
stars: 20k+
depth: seed
repo: https://github.com/cilium/cilium
website: https://cilium.io
tags: [eBPF, 网络, 安全, K8s, CNI]
updated: 2026-06-01
---

## 一句话定位

Cilium 是基于 eBPF 技术的云原生网络、安全与可观测性方案，作为 Kubernetes 的 CNI 插件，用内核级的 eBPF 取代传统 iptables，提供高性能网络、身份感知的安全策略和无侵入的可观测性。

## 诞生背景

2016 年发布。K8s 传统网络依赖 iptables，规则随服务增多而性能急剧下降，且难以实现应用层策略。Cilium 抓住 Linux 内核 eBPF 技术的成熟，把网络与安全逻辑下沉到内核动态执行。

## 核心架构

- **eBPF**：在 Linux 内核中安全地运行沙箱程序，动态处理网络包
- **身份感知安全**：基于服务身份（而非 IP）的网络策略
- **取代 kube-proxy**：用 eBPF 实现更高效的服务负载均衡
- **Hubble**：基于 eBPF 的网络可观测性
- **Service Mesh**：无 Sidecar 的服务网格能力

## 关键设计决策

1. **eBPF 下沉内核**：把网络/安全逻辑放到内核动态执行，性能远超用户态 iptables。
2. **身份而非 IP**：安全策略基于工作负载身份，契合动态的云原生环境。
3. **无 Sidecar 网格**：用 eBPF 在内核层做服务网格，避免 Sidecar 的开销（对比 Istio）。

## 生态位置

云原生网络的新范式代表（CNCF 毕业项目）。被各大云厂商 K8s 采用为默认 CNI。相关技术：eBPF（Linux 内核）。竞品：Calico（传统 CNI）、Istio（Sidecar 网格）。

## 我的评价

Cilium 是"抓住底层技术拐点"的典范——它敏锐地把握了 eBPF 这项 Linux 内核革命性技术的成熟，把云原生网络从"用户态 iptables 打补丁"带入"内核态可编程"的新时代。它和 Istio 去 Sidecar 的演进方向不谋而合。理解 eBPF 与 Cilium，是看懂云原生网络下一步走向的关键。
