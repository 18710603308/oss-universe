---
name: Argo CD
tagline: Kubernetes 声明式 GitOps 持续交付工具
category: DevOps
foundation: CNCF
language: Go
born: 2018
era: 云原生
stars: 18k+
depth: seed
repo: https://github.com/argoproj/argo-cd
website: https://argo-cd.readthedocs.io
tags: [GitOps, CD, K8s, 声明式]
updated: 2026-06-27
---

## 一句话定位

Argo CD 是 CNCF 毕业的声明式 GitOps 持续交付工具，它以 Git 仓库作为"期望状态"的唯一来源，持续将 Kubernetes 集群的实际状态与 Git 中声明的状态自动同步。

## 诞生背景

2018 年由 Intuit 开源。传统 CI/CD 用"推"的方式部署（流水线主动 kubectl apply），凭据外泄风险高、状态难追踪。GitOps 提出反过来：让集群内的 Argo CD 主动"拉取"Git 中的声明并同步。

## 核心架构

- **Application**：声明"从哪个 Git 路径同步到哪个集群"
- **持续调和**：对比 Git（期望）与集群（实际），自动或手动同步
- **可视化**：直观展示应用的资源树与健康/同步状态
- **回滚**：Git 即历史，回退等于 git revert
- **多集群管理**：一个 Argo CD 管理多个集群

## 关键设计决策

1. **GitOps 拉模型**：集群主动从 Git 拉取并调和，凭据不出集群，更安全、可审计。
2. **Git 即唯一真相**：所有变更走 Git，天然获得版本、审计、回滚、协作。
3. **声明式调和**：延续 K8s 的 reconcile 思想，持续消除"期望"与"实际"的差异。

## 生态位置

GitOps 领域的代表工具（与 Flux 并列 CNCF 两大 GitOps）。属于 Argo 项目群（含 Argo Workflows/Rollouts/Events）。上游常接 GitHub Actions/GitLab CI 做 CI 部分。

## 我的评价

Argo CD 把 Kubernetes 的"声明式 + 调和循环"思想从集群内延伸到了整个交付流程——**Git 是期望状态，集群持续向它收敛**。它和 Jenkins 的对比清晰展现了部署范式的进化：从"流水线推部署"到"集群拉同步"。GitOps 的精髓是"用你已经熟悉的 Git 工作流来管理基础设施"，优雅而自洽。
