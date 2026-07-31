---
name: Nginx
tagline: 高性能 Web 服务器与反向代理，支撑全球海量网站
category: Web服务器
language: C
born: 2004
era: Web2.0
stars: 26k+
depth: seed
repo: https://github.com/nginx/nginx
website: https://nginx.org
tags: [Web服务器, 反向代理, 负载均衡]
updated: 2026-07-16
---

## 一句话定位

Nginx 是俄罗斯工程师 Igor Sysoev 创造的高性能 Web 服务器、反向代理和负载均衡器，以事件驱动架构解决了著名的 C10K 问题，是当今支撑网站流量最多的服务器软件之一。

## 诞生背景

2004 年发布。当时主流的 Apache 采用"每连接一进程/线程"模型，面对上万并发连接（C10K 问题）时内存和上下文切换开销巨大。Nginx 用事件驱动、异步非阻塞架构优雅地解决了这一难题。

## 核心架构

- **Master-Worker 进程模型**：master 管理，worker 处理请求
- **事件驱动**：每个 worker 用 epoll/kqueue 处理数千并发连接
- **模块化**：HTTP、邮件、流等功能通过模块扩展
- **反向代理与负载均衡**：upstream 机制分发后端请求

## 关键设计决策

1. **事件驱动 vs 进程模型**：少量 worker 进程处理海量连接，内存占用极低。
2. **异步非阻塞 I/O**：单个 worker 不会因一个慢连接而阻塞其他连接。
3. **配置即能力**：强大而声明式的配置文件，胜任静态服务、代理、缓存、限流等多种角色。

## 生态位置

Web 服务器与反向代理的标杆。衍生：OpenResty（Nginx + Lua）、Tengine（阿里分支）、Kong（API 网关）。竞品：Apache httpd（传统）、Caddy（自动 HTTPS）、Envoy（云原生）。

## 我的评价

Nginx 是"用正确的架构解决正确的问题"的经典——它针对 C10K 这一明确瓶颈，用事件驱动模型给出了教科书级的答案。它的配置文件设计也极具启发性：用声明式配置就能让同一个二进制文件扮演服务器、代理、缓存、负载均衡等多种角色。理解 Nginx 的事件模型，是理解高性能网络编程的必修课。
