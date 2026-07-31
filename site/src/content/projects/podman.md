---
name: Podman
tagline: 无守护进程的容器引擎，安全的 Docker 替代
category: 云原生
foundation: 红帽
language: Go
born: 2018
era: 云原生
stars: 26k+
depth: seed
repo: https://github.com/containers/podman
website: https://podman.io
tags: [容器, 无守护进程, rootless, OCI]
updated: 2026-05-28
---

## 一句话定位

Podman 是 Red Hat 主导的容器引擎，命令行几乎与 Docker 完全兼容，但采用无守护进程（daemonless）和无 root（rootless）架构，以更安全的方式管理容器，是 Docker 的直接替代。

## 诞生背景

2018 年发布。Docker 依赖一个以 root 权限运行的常驻守护进程（dockerd），这既是单点故障，也是安全隐患（守护进程被攻破即全盘沦陷）。Podman 提出：容器管理不需要中心化的特权守护进程。

## 核心架构

- **无守护进程**：直接通过 fork-exec 运行容器，无常驻 daemon
- **Rootless**：普通用户即可运行容器，无需 root，大幅提升安全性
- **Docker 兼容 CLI**：`alias docker=podman` 几乎无缝切换
- **Pod 概念**：原生支持类似 K8s Pod 的容器组
- **OCI 标准**：遵循开放容器标准，底层用 runc/crun

## 关键设计决策

1. **去守护进程**：消除 Docker 的中心化特权 daemon，减少单点与攻击面。
2. **Rootless 优先**：默认无 root 运行，从架构上提升安全性。
3. **Docker 兼容**：保持 CLI 一致，降低迁移成本（兼容策略再次奏效）。

## 生态位置

Docker 的安全替代，在企业与 RHEL 生态尤其流行。配套：Buildah（构建镜像）、Skopeo（镜像操作）。底层同样遵循 OCI，与 containerd 同属容器运行时生态。

## 我的评价

Podman 针对的是 Docker 架构中一个真实的痛点——那个以 root 运行的中心化守护进程。它的"无守护进程 + rootless"设计，体现了安全领域"减少攻击面、消除单点特权"的核心思想。它同时保持 Docker CLI 兼容，又一次印证：挑战既有方案时，"兼容 + 针对性改进"比"推倒重来"更容易被接受。
