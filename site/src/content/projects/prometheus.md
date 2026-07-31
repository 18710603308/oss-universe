---
name: Prometheus
tagline: 云原生监控标准，为动态环境而生的时序监控系统
category: 可观测性
foundation: CNCF
language: Go
born: 2012
era: 云原生
stars: 56k+
depth: sprout
repo: https://github.com/prometheus/prometheus
website: https://prometheus.io
tags: [监控, 时序数据, 指标, PromQL]
updated: 2026-07-14
---

## 一句话定位

Prometheus 是 SoundCloud 开源、后成为 CNCF 第二个毕业项目的监控系统，以「拉取式指标采集 + 多维数据模型 + 强大查询语言 PromQL」成为云原生监控的事实标准。

## 诞生背景

2012 年诞生，灵感来自 Google 内部的 Borgmon。传统监控（Nagios/Zabbix）面向静态主机，难以应对容器化环境中动态生灭的实例。Prometheus 用「服务发现 + 拉取」模型完美适配了云原生。

## 核心架构

- **Pull 模型**：Prometheus 主动从目标的 `/metrics` 端点拉取指标
- **多维数据模型**：指标 = 名称 + 标签（labels）键值对
- **PromQL**：强大的时序查询语言
- **服务发现**：自动发现 K8s 中动态变化的监控目标
- **Alertmanager**：独立的告警处理组件

## 关键设计决策

1. **拉取而非推送**：由 Prometheus 主动拉取，天然掌握目标存活状态，也简化了配置。
2. **多维标签模型**：用标签而非层级结构组织指标，查询极其灵活。
3. **本地存储 + 联邦**：单机高效存储，需长期存储时对接 Thanos/Cortex。

## 生态位置

云原生监控核心，几乎与 Kubernetes 绑定。常与 Grafana（可视化）、Alertmanager（告警）组合。竞品：VictoriaMetrics、InfluxDB。

## 我的评价

Prometheus 的成功在于「为新环境重新设计，而非改造旧工具」——面对云原生的动态性，它没有在 Nagios 上打补丁，而是从数据模型（多维标签）到采集方式（拉取 + 服务发现）彻底重构。当环境发生范式转变时，往往需要的是重新设计而非修补。PromQL 也是理解时序数据查询的最佳范本。
