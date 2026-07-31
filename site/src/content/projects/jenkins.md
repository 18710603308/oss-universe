---
name: Jenkins
tagline: 老牌开源自动化服务器，CI/CD 的元老
category: DevOps
language: Java
born: 2011
era: DevOps
stars: 24k+
depth: seed
repo: https://github.com/jenkinsci/jenkins
website: https://www.jenkins.io
tags: [CI/CD, 自动化, 流水线, 插件]
updated: 2026-06-27
---

## 一句话定位

Jenkins 是最老牌、使用最广泛的开源自动化服务器，通过流水线（Pipeline）和海量插件，实现代码的自动构建、测试与部署，是 CI/CD 领域的奠基性工具。

## 诞生背景

其前身 Hudson 诞生于 2005 年（Sun 公司），2011 年因商标纠纷更名 Jenkins 并独立。它把"持续集成"这一实践工具化，让"每次提交自动构建测试"成为标准工程流程。

## 核心架构

- **Master-Agent**：主节点调度，Agent 节点执行任务
- **Pipeline as Code**：用 Jenkinsfile（Groovy）声明流水线
- **插件生态**：1800+ 插件，几乎能集成任何工具
- **构建触发**：定时、代码推送、手动等多种触发方式

## 关键设计决策

1. **极致的插件化**：核心精简，能力靠插件——这既是它无所不能的原因，也是配置复杂、维护沉重的根源。
2. **Pipeline as Code**：把流水线定义为代码（Jenkinsfile），纳入版本管理。
3. **自托管掌控**：完全自托管，数据和流程自主可控。

## 生态位置

CI/CD 的元老与"重型"代表。竞品/后继：GitHub Actions、GitLab CI（云原生、YAML 配置、更轻量）、Drone、Tekton、ArgoCD（GitOps）。新项目多转向更轻量的方案。

## 我的评价

Jenkins 是一部 CI/CD 的活历史——它用极致的插件化几乎无所不能，却也因此背上了"配置地狱"和维护负担。它的兴衰恰好映照了行业趋势：从"重型自托管 + 无限插件"转向"云原生 + 声明式 YAML + GitOps"。理解 Jenkins 的得失，就理解了自动化工具十余年的演进方向。
