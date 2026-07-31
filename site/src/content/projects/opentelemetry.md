---
name: OpenTelemetry
tagline: 可观测性的统一标准，一次埋点处处可用
category: 可观测性
foundation: CNCF
language: 多语言
born: 2019
era: 云原生
stars: 6k+
depth: seed
repo: https://github.com/open-telemetry/opentelemetry-specification
website: https://opentelemetry.io
tags: [可观测性, 遥测, 标准, Traces]
updated: 2026-06-22
---

## 一句话定位

OpenTelemetry（OTel）是 CNCF 的可观测性框架与标准，统一了指标（Metrics）、日志（Logs）、链路追踪（Traces）三大遥测数据的采集、生成与导出，让"一次埋点，导出到任意后端"成为现实。

## 诞生背景

2019 年由 OpenTracing 和 OpenCensus 两个项目合并而成。此前可观测性工具各有各的 SDK 和数据格式，应用被厂商锁定、迁移困难。OTel 提出用统一的规范和 SDK 解耦"数据采集"与"数据后端"。

## 核心架构

- **三大信号**：Traces、Metrics、Logs 统一建模
- **SDK/API**：各语言统一的埋点接口
- **Collector**：接收、处理、导出遥测数据的中间组件
- **OTLP 协议**：标准化的遥测数据传输协议
- **厂商中立**：可导出到 Jaeger、Prometheus、Grafana、各商业平台

## 关键设计决策

1. **标准优先**：核心是规范（OTLP）而非某个实现，让整个生态围绕标准协作。
2. **采集与后端解耦**：应用只依赖 OTel API，后端可随时更换，破除厂商锁定。
3. **合并而非竞争**：由两个竞品项目合并而来，避免了生态分裂。

## 生态位置

可观测性数据采集的事实标准。上游是各语言应用，下游对接 Jaeger（追踪）、Prometheus（指标）、Grafana/Loki（可视化/日志）。几乎所有可观测性厂商都已支持 OTLP。

## 我的评价

OpenTelemetry 又一次印证了"标准的统治力"——正如 LSP 之于编辑器、OCI 之于容器、xDS 之于代理，OTel 用一套开放标准解耦了"埋点"与"后端"，把用户从厂商锁定中解放出来。它由两个竞品合并而生的历程也很有启发：在标准之争中，合并共赢往往比零和竞争更能造福整个生态。
