---
name: OpenTofu
tagline: Terraform 的开源分支，社区守护的 IaC 标准
category: DevOps
foundation: Linux 基金会
language: Go
born: 2023
era: 云原生
stars: 25k+
depth: seed
repo: https://github.com/opentofu/opentofu
website: https://opentofu.org
tags: [IaC, 基础设施即代码, Terraform, 分支]
updated: 2026-05-27
---

## 一句话定位

OpenTofu 是基础设施即代码工具 Terraform 的开源社区分支，在 HashiCorp 将 Terraform 改为非开源的 BSL 协议后，由社区发起并被 Linux 基金会接纳，保持完全开源（MPL）且与 Terraform 高度兼容。

## 诞生背景

2023 年 8 月，HashiCorp 突然把 Terraform 等产品从开源的 MPL 协议改为限制商用的 BSL。社区与依赖 Terraform 的厂商震惊之余迅速行动，fork 出 OpenTofu，并交由 Linux 基金会中立托管，确保 IaC 标准继续开源。

## 核心架构

- **Terraform 兼容**：兼容 Terraform 配置（HCL）、State、Provider 生态
- **MPL 开源协议**：坚持真正的开源，不受单一公司商业条款约束
- **基金会治理**：由 Linux 基金会中立管理，社区驱动
- **平滑迁移**：现有 Terraform 项目可低成本切换
- **持续演进**：加入 Terraform 未有的社区期待特性

## 关键设计决策

1. **fork 以捍卫开源**：面对协议变更，社区用"分叉"这一开源终极武器保住了自由。
2. **中立基金会治理**：交给 Linux 基金会，避免重蹈"单一公司控制"的覆辙。
3. **兼容优先**：保持与 Terraform 兼容，让用户能平滑迁移、无痛切换。

## 生态位置

IaC 领域开源阵营的旗帜。与 Terraform（HashiCorp/BSL）形成"开源 vs 商业"的分野。同类"协议变更催生的开源分支"还有 OpenBao（Vault）、Valkey（Redis）、OpenSearch（Elasticsearch）。

## 我的评价

OpenTofu 是近年"开源协议之争"最具代表性的事件——它证明了**开源协议赋予社区的"分叉权"是真实而有力的制衡**。当一家公司试图收回开源承诺，社区可以合法地接管代码、另立门户。它与 OpenBao、Valkey、OpenSearch 一起，构成了这个时代"社区 vs 商业化收缩"博弈的鲜活样本，值得每个关注开源可持续性的人深思。
