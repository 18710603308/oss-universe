---
name: Caddy
tagline: 自动 HTTPS 的现代 Web 服务器，配置极简
category: Web服务器
language: Go
born: 2015
era: 云原生
stars: 60k+
depth: seed
repo: https://github.com/caddyserver/caddy
website: https://caddyserver.com
tags: [Web服务器, 反向代理, HTTPS, Go]
updated: 2026-06-19
---

## 一句话定位

Caddy 是用 Go 编写的现代 Web 服务器和反向代理，最大特色是"默认自动 HTTPS"——自动申请和续期 Let's Encrypt 证书，配以极简的 Caddyfile 配置，让安全的 Web 服务开箱即用。

## 诞生背景

2015 年由 Matt Holt 创建。传统上给网站配置 HTTPS 繁琐（申请证书、配置续期、改 Nginx），是很多人忽略加密的原因。Caddy 提出：HTTPS 应该是默认且自动的，而非需要手动折腾的选项。

## 核心架构

- **自动 HTTPS**：自动通过 ACME 协议申请、续期 TLS 证书
- **Caddyfile**：极简的声明式配置（几行搞定反向代理 + HTTPS）
- **单二进制**：Go 编译，无依赖部署
- **模块化**：插件扩展能力
- **JSON API**：可通过 API 动态配置

## 关键设计决策

1. **默认安全**：把 HTTPS 从"需要配置的功能"变成"自动的默认"，推动全网加密。
2. **配置极简**：Caddyfile 比 Nginx 配置简单得多，降低运维门槛。
3. **单二进制 + Go**：部署零依赖，契合容器化时代。

## 生态位置

现代 Web 服务器代表。竞品：Nginx（性能与生态之王，但配置复杂、HTTPS 需手动）、Traefik（云原生、服务发现）、Apache（传统）。Caddy 以"自动 HTTPS + 简单"差异化取胜。

## 我的评价

Caddy 的核心洞察是"安全应该是默认的，而非可选的"——它把配置 HTTPS 这件许多人因嫌麻烦而跳过的事，变成了零成本的自动行为，从而实实在在地推动了全网加密。它诠释了一个重要的产品原则：**让正确的事情成为最省事的默认，比苦口婆心劝人做正确的事有效得多**。
