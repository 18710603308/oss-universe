---
name: GitLab
tagline: 一体化 DevOps 平台，从代码到部署全覆盖
category: DevOps
language: Ruby
born: 2011
era: DevOps
stars: 24k+
depth: seed
repo: https://gitlab.com/gitlab-org/gitlab
website: https://about.gitlab.com
tags: [DevOps, Git托管, CI/CD, 一体化]
updated: 2026-05-23
---

## 一句话定位

GitLab 是一体化的 DevOps 平台，把 Git 代码托管、CI/CD、代码审查、Issue 跟踪、容器registry、安全扫描、监控等软件研发全流程能力整合到一个应用中，可自托管也可用 SaaS，是 GitHub 的完整方案竞争者。

## 诞生背景

2011 年作为开源的 Git 托管工具起步。与 GitHub 主要做"托管 + 社区"不同，GitLab 走"单一应用覆盖整个 DevOps 生命周期"的路线，尤其强调可自托管、数据自主。

## 核心架构

- **代码托管**：Git 仓库、MR（合并请求）、代码审查
- **内置 CI/CD**：`.gitlab-ci.yml` 定义流水线，无需第三方
- **一体化**：Issue、看板、Wiki、Registry、安全扫描、监控全内置
- **自托管 / SaaS**：社区版（CE）开源可自建，企业版（EE）付费
- **DevSecOps**：内建安全扫描，安全左移

## 关键设计决策

1. **单一应用覆盖全流程**：不做"托管 + 一堆第三方集成"，而是把 DevOps 全生命周期整合进一个应用。
2. **CI/CD 内置**：`.gitlab-ci.yml` 原生集成，是它相对早期 GitHub 的关键优势（后 GitHub Actions 补齐）。
3. **自托管优先**：完整功能可自建，满足企业数据自主与合规需求。

## 生态位置

DevOps 平台的完整方案代表。与 GitHub（生态/社区最大）、Gitea（轻量自托管）形成对比：GitLab 主打"一体化 + 自托管"。竞品还有 Bitbucket。是企业私有化 DevOps 的常见选择。

## 我的评价

GitLab 与 GitHub 的路线之争很有代表性——GitHub 做"最大的开源社区 + 平台生态"，GitLab 做"最完整的一体化 DevOps 工具链"。GitLab 证明了"单一应用覆盖全流程"这条路的价值：减少工具拼接、数据统一、可自托管。对重视数据自主和一体化的企业，它往往比"GitHub + 一堆 SaaS"更省心。
