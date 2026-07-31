---
name: Plausible
tagline: 隐私友好的轻量网站分析，Google Analytics 替代
category: 开发工具
language: Elixir
born: 2019
era: 云原生
stars: 21k+
depth: seed
repo: https://github.com/plausible/analytics
website: https://plausible.io
tags: [网站分析, 隐私, 自托管, GA替代]
updated: 2026-03-23
---

## 一句话定位

Plausible 是隐私友好、轻量、开源的网站分析工具，作为 Google Analytics 的替代，它不使用 Cookie、不收集个人数据、脚本极小（< 1KB），提供简洁清晰的核心指标，让网站主在不侵犯访客隐私的前提下了解流量。

## 诞生背景

2019 年发布。Google Analytics 免费但以数据换服务——追踪用户、用 Cookie、脚本臃肿、还有 GDPR 合规风险。Plausible 主张分析可以"够用且尊重隐私"：只看真正重要的指标，不追踪个人，不用 Cookie，脚本轻到几乎不影响性能。

## 核心架构

- **无 Cookie / 无个人数据**：不追踪个人、天然合规（GDPR/CCPA）
- **极轻脚本**：分析脚本 < 1KB，几乎不影响页面性能
- **简洁指标**：聚焦访问量、来源、页面、转化等核心数据，不堆砌
- **Elixir + ClickHouse**：高性能后端（ClickHouse 存分析数据）
- **可自托管 / 云**：开源自建或订阅云服务

## 关键设计决策

1. **隐私优先**：不用 Cookie、不采集个人数据，把"尊重访客隐私"作为立身之本。
2. **少即是多**：只呈现真正有用的核心指标，反对 GA 式的复杂堆砌。
3. **轻量高性能**：极小脚本不拖慢网站，与"分析不应伤害用户体验"的理念一致。

## 生态位置

隐私友好网站分析的代表。竞品：Google Analytics（免费、强大、但侵犯隐私）、Matomo（开源、功能全）、Umami（同类轻量开源）、Fathom（商业隐私分析）。它顺应了隐私法规趋严和用户隐私觉醒的大势。

## 我的评价

Plausible 代表了一种价值观驱动的产品——它不和 Google Analytics 比功能多，而是比"是否尊重用户"。在隐私日益重要、法规日益严格的今天，它证明了：**"隐私友好"本身就能成为一个强有力的差异化卖点**。它和 Bitwarden、Mastodon 一样，属于"用开源 + 隐私优先来对抗数据攫取式商业模式"的一脉。它提醒我们：技术选择也是价值观选择——你用什么分析工具，就是在为怎样的互联网投票。
