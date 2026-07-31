---
name: Terraform
tagline: 基础设施即代码的事实标准，用声明式配置管理多云资源
category: DevOps
foundation: HashiCorp
language: Go
born: 2014
era: DevOps
stars: 43k+
depth: seed
repo: https://github.com/hashicorp/terraform
website: https://www.terraform.io
tags: [IaC, 多云, 声明式]
updated: 2026-07-14
---

## 一句话定位

Terraform 是 HashiCorp 开源的「基础设施即代码（IaC）」工具，用声明式的 HCL 语言描述云资源，一键完成跨云（AWS/Azure/GCP 等）的创建、变更与销毁。

## 诞生背景

2014 年发布。云时代基础设施靠手工点击控制台管理，易错、难复现、无版本控制。Terraform 提出「用代码描述基础设施」，让服务器、网络、数据库都能像代码一样被版本化和审查。

## 核心架构

- **HCL**：声明式配置语言，描述"期望的基础设施状态"
- **Provider**：对接各云厂商 API 的插件（数千个）
- **State**：记录当前基础设施状态的文件，用于 diff
- **Plan/Apply**：先预览变更（plan）再执行（apply）

## 关键设计决策

1. **声明式 + 状态管理**：你描述目标状态，Terraform 计算出从当前状态到目标的最小变更集。
2. **Provider 插件化**：核心与云厂商解耦，一套语法管理所有云。
3. **Plan 预览**：执行前可见"将创建/修改/销毁什么"，降低误操作风险。

## 生态位置

IaC 领域标杆。2023 年 HashiCorp 改用 BSL 协议，社区 fork 出 **OpenTofu**（Linux 基金会）。竞品：Pulumi（用编程语言）、CloudFormation（AWS 专属）。

## 我的评价

Terraform 把"声明式 + 状态调和"的思想从 K8s 领域延伸到了整个基础设施层——这与 Kubernetes 的 reconcile loop 异曲同工。它和 OpenTofu 的分叉，又是一个开源商业化与协议之争的鲜活案例。声明式的思想在基础设施领域的胜利，值得反复体会。
