---
name: Gitea
tagline: 轻量自托管 Git 服务，几分钟拥有自己的 GitHub
category: 自托管
language: Go
born: 2016
era: 云原生
stars: 47k+
depth: seed
repo: https://github.com/go-gitea/gitea
website: https://gitea.io
tags: [自托管, Git, 代码托管]
updated: 2026-06-25
---

## 一句话定位

Gitea 是用 Go 编写的轻量级自托管 Git 服务，提供仓库托管、Issue、Pull Request、CI（Actions）等类 GitHub 功能，单个二进制即可运行，资源占用极低，适合个人和团队自建代码平台。

## 诞生背景

2016 年从 Gogs fork 而来，以更开放的社区治理推进开发。相比 GitLab 的重量级，Gitea 主打"轻、快、易部署"，让自建 Git 服务不再需要高配服务器。

## 核心架构

- **单二进制部署**：Go 编译为一个可执行文件，含 Web 服务
- **低资源占用**：树莓派都能流畅运行
- **类 GitHub 功能**：仓库、Issue、PR、Wiki、Release
- **Gitea Actions**：兼容 GitHub Actions 语法的内置 CI
- **多数据库支持**：SQLite（默认）、MySQL、PostgreSQL

## 关键设计决策

1. **轻量优先**：单二进制 + 低占用，把"自建 Git 服务"的门槛降到极低。
2. **兼容心智**：UI 和 Actions 语法贴近 GitHub，迁移和上手成本低。
3. **社区治理**：从 Gogs 分叉正是为了更开放的协作（后又衍生出 Forgejo）。

## 生态位置

轻量自托管 Git 的代表。谱系：Gogs（本源）→ Gitea（社区分叉）→ Forgejo（再分叉，非营利治理）。竞品：GitLab CE（功能全但重）、GitHub（SaaS）。

## 我的评价

Gitea 及其"Gogs → Gitea → Forgejo"的连环分叉史，是观察开源治理的绝佳标本——每一次分叉都源于社区对"如何治理"的不同主张。它也体现了一条规律：在巨头（GitHub）主导的领域，轻量、自主、可掌控的开源替代品永远有其不可替代的价值。数据与工具的自主权，是很多人选择自托管的根本理由。
