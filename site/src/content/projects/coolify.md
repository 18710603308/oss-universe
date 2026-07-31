---
name: Coolify
tagline: 自托管的 PaaS，开源版 Heroku/Vercel
category: DevOps
language: PHP
born: 2021
era: AI原生
stars: 42k+
depth: seed
repo: https://github.com/coollabsio/coolify
website: https://coolify.io
tags: [PaaS, 自托管, 部署, Heroku替代]
updated: 2026-03-25
---

## 一句话定位

Coolify 是开源、可自托管的应用部署平台（PaaS），让你在自己的服务器上获得类似 Heroku/Vercel/Netlify 的一键部署体验——连接 Git 仓库即可自动构建部署应用、数据库和各类服务，把"部署"这件麻烦事变简单，且数据和成本完全自主。

## 诞生背景

2021 年发布。Heroku、Vercel 等 PaaS 让部署变简单，但按用量收费、数据在云端、且 Heroku 取消免费额度后成本上升。Coolify 想把这种"一键部署"的丝滑体验带到你自己的服务器上，兼得便捷与自主。

## 核心架构

- **Git 驱动部署**：连接仓库，push 即自动构建部署
- **多类型应用**：静态站、Node/Python/PHP 应用、数据库、Docker 服务
- **一键服务**：预置数据库、缓存等常用服务模板
- **自动 HTTPS**：自动申请和续期证书
- **自托管**：装在自己的 VPS/服务器上，成本可控

## 关键设计决策

1. **复刻 PaaS 体验**：把 Heroku/Vercel 的一键部署体验带到自托管环境。
2. **数据与成本自主**：装在自己服务器上，不按用量收费、数据不出自己的机器。
3. **开箱即用的服务模板**：常用数据库/服务一键起，降低自建全栈的门槛。

## 生态位置

自托管 PaaS 的人气代表。竞品：Heroku、Vercel、Railway（商业云 PaaS）、Dokku、CapRover（同类自托管）。它踩中了"Heroku 涨价 + 数据自主诉求"的时机，成为近年自托管社区的明星，让个人开发者也能拥有丝滑的部署平台。

## 我的评价

Coolify 抓住了一个绝佳时机——Heroku 取消免费额度后，大量开发者寻找"既要 Vercel 般的便捷、又要自主可控成本"的方案。它把云 PaaS 的核心价值（一键部署的丝滑）搬到自托管，直击这个痛点。它是"开源自托管替代闭源 SaaS"这一浪潮的最新代表（呼应 Supabase↔Firebase），再次印证：**每当一个便捷的闭源服务在定价或控制权上让用户不安，就会催生它的开源自托管替代**。
