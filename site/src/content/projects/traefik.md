---
name: Traefik
tagline: 云原生的动态反向代理，自动服务发现
category: Web服务器
language: Go
born: 2015
era: 云原生
stars: 53k+
depth: seed
repo: https://github.com/traefik/traefik
website: https://traefik.io
tags: [反向代理, 负载均衡, 服务发现, 云原生]
updated: 2026-05-28
---

## 一句话定位

Traefik 是用 Go 编写的现代反向代理和负载均衡器，专为云原生动态环境设计，能自动发现服务并实时更新路由配置，无需手动改配置重启，是 Kubernetes、Docker 等场景的热门入口网关。

## 诞生背景

2015 年发布。传统代理（Nginx）配置是静态的，而容器/K8s 环境中服务不断动态生灭，手动维护路由配置既繁琐又易错。Traefik 提出：代理应该自动感知后端服务的变化并动态调整。

## 核心架构

- **自动服务发现**：对接 K8s、Docker、Consul 等，自动感知服务
- **动态配置**：服务变化时实时更新路由，无需重启
- **中间件**：认证、限流、重试等以中间件组合
- **自动 HTTPS**：内置 Let's Encrypt 证书管理
- **可视化 Dashboard**：直观查看路由与服务状态

## 关键设计决策

1. **动态服务发现**：把"静态配置文件"变为"自动感知后端"，完美契合云原生的动态性。
2. **配置即标签**：可通过容器标签/K8s 注解声明路由，配置随服务定义走。
3. **开箱即用的现代特性**：自动 HTTPS、Dashboard、中间件，降低运维负担。

## 生态位置

云原生反向代理/入口网关的代表。竞品：Nginx（性能强但静态配置）、Caddy（自动 HTTPS）、Envoy（服务网格数据面）、Kong（API 网关）。Traefik 以"动态服务发现"在容器环境中差异化。

## 我的评价

Traefik 与 Nginx 的对比清晰体现了"静态 vs 动态"的时代变迁——Nginx 诞生于服务器相对固定的年代，Traefik 则为"服务不断动态生灭"的云原生而生。它印证了一条规律：**环境的根本变化（静态主机 → 动态容器）会催生为新环境重新设计的工具**。这与 Prometheus 取代 Nagios 是同一逻辑。
