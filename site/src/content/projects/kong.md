---
name: Kong
tagline: 云原生 API 网关，微服务流量的统一入口
category: 网络通信
language: Lua
born: 2015
era: 云原生
stars: 40k+
depth: seed
repo: https://github.com/Kong/kong
website: https://konghq.com
tags: [API网关, 微服务, 插件, OpenResty]
updated: 2026-06-14
---

## 一句话定位

Kong 是基于 OpenResty（Nginx + Lua）构建的云原生 API 网关，作为微服务与外部流量之间的统一入口，通过插件机制提供认证、限流、日志、监控等横切能力。

## 诞生背景

2015 年开源。微服务架构下，认证、限流、鉴权、日志等"横切关注点"若在每个服务重复实现则冗余易错。Kong 提出把这些能力上移到统一的 API 网关层，集中管理进出流量。

## 核心架构

- **基于 OpenResty**：站在 Nginx 的高性能与 Lua 的灵活之上
- **插件体系**：认证、限流、CORS、日志、转换等能力皆为插件
- **声明式配置**：支持 DB-less 的声明式配置
- **控制平面/数据平面**：可分离部署，适配大规模
- **K8s Ingress Controller**：作为 K8s 的入口网关

## 关键设计决策

1. **网关集中横切关注点**：把认证、限流等通用逻辑从各服务上移到网关，统一治理。
2. **插件化扩展**：核心做转发，能力靠插件按需组合，生态丰富。
3. **站在 Nginx 肩上**：复用 OpenResty 的成熟高性能，专注网关语义。

## 生态位置

API 网关领域的代表。竞品：APISIX（Apache、同基于 OpenResty）、Traefik（云原生代理）、Envoy Gateway、云厂商托管网关。是微服务"南北向流量"治理的关键组件。

## 我的评价

Kong 与服务网格（Istio）形成有趣的层次对照——API 网关治理"南北向"（外部↔集群）流量，服务网格治理"东西向"（服务↔服务）流量，两者都是"把横切关注点从应用剥离到基础设施"这一思想的体现。它再次印证：随着系统复杂化，通用能力会不断下沉、集中到专门的基础设施层。
