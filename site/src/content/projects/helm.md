---
name: Helm
tagline: Kubernetes 的包管理器，用 Chart 打包复杂应用
category: 云原生
foundation: CNCF
language: Go
born: 2015
era: 云原生
stars: 27k+
depth: seed
repo: https://github.com/helm/helm
website: https://helm.sh
tags: [K8s, 包管理, Chart, 模板]
updated: 2026-06-28
---

## 一句话定位

Helm 是 Kubernetes 的包管理器，被称为"K8s 的 apt/yum"，通过 Chart（应用打包格式）把一个应用的众多 K8s 资源（Deployment、Service、ConfigMap 等）打包、参数化、版本化，实现一键安装与升级。

## 诞生背景

2015 年诞生。在 K8s 上部署一个应用往往要手写和管理十几个 YAML 文件，跨环境（开发/测试/生产）还要改配置，繁琐易错。Helm 提出用"Chart 模板 + values 参数"来打包和复用这些资源。

## 核心架构

- **Chart**：应用的打包格式（模板 + 默认值 + 元信息）
- **Template**：Go 模板生成 K8s 资源清单
- **Values**：参数化配置，同一 Chart 适配不同环境
- **Release**：一次安装的实例，支持版本化与回滚
- **Repository**：Chart 的分发仓库（如 Artifact Hub）

## 关键设计决策

1. **模板 + 参数化**：把一组 K8s 资源抽象为可配置的模板，实现"一次打包，多处部署"。
2. **Release 版本管理**：安装即一个可回滚的 Release，升级出问题能一键回退。
3. **Chart 复用生态**：官方与社区的 Chart 仓库，让部署常见软件（MySQL、Redis 等）变成一条命令。

## 生态位置

K8s 应用打包与分发的事实标准。竞品/互补：Kustomize（无模板、纯覆盖）、Operator（更复杂的有状态应用）。三者常配合使用。

## 我的评价

Helm 之于 Kubernetes，正如 npm 之于 Node、apt 之于 Debian——**包管理器是一个平台走向成熟的标志**。它解决的不是技术能不能做，而是"复杂应用如何被打包、分享、复用"这一生态问题。Helm 的出现，标志着 K8s 从"能跑容器"进化到了"有应用分发生态"，这是平台繁荣的关键一跃。
