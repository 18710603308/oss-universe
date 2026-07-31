---
name: Tekton
tagline: 云原生 CI/CD 框架，流水线即 Kubernetes 资源
category: DevOps
foundation: CDF
language: Go
born: 2018
era: 云原生
stars: 8k+
depth: seed
repo: https://github.com/tektoncd/pipeline
website: https://tekton.dev
tags: [CI/CD, Kubernetes, 云原生, 流水线]
updated: 2026-04-12
---

## 一句话定位

Tekton 是云原生的 CI/CD 框架，把流水线的每个环节都设计为 Kubernetes 原生资源（CRD），让持续集成/交付流程完全运行在 K8s 之上、以声明式方式定义，是构建云原生持续交付系统的底层标准之一。

## 诞生背景

2018 年源自 Google 的 Knative build，后独立并归入 CD 基金会（CDF）。传统 CI/CD 工具（如 Jenkins）不是为 K8s 设计的，在云原生环境中显得笨重。Tekton 提出：既然一切都跑在 K8s 上，CI/CD 也应该是 K8s 原生的。

## 核心架构

- **Kubernetes CRD**：Task、Pipeline、PipelineRun 等都是 K8s 自定义资源
- **声明式流水线**：用 YAML 声明流水线，与 K8s 风格一致
- **每步一容器**：流水线的每个步骤在独立容器中运行
- **可复用 Task**：Task 可共享复用（Tekton Hub）
- **框架而非产品**：作为底层，供上层工具（如 Jenkins X、其他 CD 平台）构建

## 关键设计决策

1. **CI/CD 即 K8s 资源**：把流水线抽象为 CRD，让 CI/CD 完全融入云原生的声明式世界。
2. **做框架而非成品**：提供可组合的构建块，让上层平台在其上构建，而非直接面向终端用户。
3. **每步容器化**：每个步骤独立容器，天然隔离、可复现、可扩展。

## 生态位置

云原生 CI/CD 的底层标准（CDF 托管）。常作为 Jenkins X、其他 CD 平台的引擎。与 ArgoCD（GitOps 持续部署）、Jenkins（传统 CI）、GitHub Actions（托管 CI）互有分工。Tekton 偏"K8s 原生的流水线引擎"。

## 我的评价

Tekton 体现了云原生的一个彻底信念——**"一切皆 K8s 资源"**。当基础设施、应用、配置都已声明式地跑在 K8s 上，让 CI/CD 也成为 K8s 原生资源，就能统一管理范式、复用生态。它选择"做框架而非成品"也很有格局：甘当底层标准，让别人在其上建产品。它和 ArgoCD 一道，代表了 CI/CD 从"独立工具"向"云原生基础设施的一部分"的深刻演进。
