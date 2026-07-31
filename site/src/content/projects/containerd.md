---
name: containerd
tagline: 工业标准的容器运行时，Docker 与 K8s 之下的基石
category: 云原生
foundation: CNCF
language: Go
born: 2016
era: 云原生
stars: 18k+
depth: seed
repo: https://github.com/containerd/containerd
website: https://containerd.io
tags: [容器运行时, OCI, CRI, 云原生]
updated: 2026-06-10
---

## 一句话定位

containerd 是一个工业级的核心容器运行时，负责镜像拉取、容器生命周期管理、存储与网络等底层能力。它从 Docker 中拆分而来，如今是 Docker 和 Kubernetes 之下共同的运行时基石，CNCF 毕业项目。

## 诞生背景

2016 年从 Docker 引擎中拆分独立并捐给 CNCF。随着容器生态成熟，业界需要一个中立、标准化、可被不同上层（Docker、K8s）复用的核心运行时，而非绑定在 Docker 这一个产品里。

## 核心架构

- **OCI 兼容**：遵循开放容器倡议（OCI）的镜像与运行时规范
- **CRI 实现**：实现 K8s 的容器运行时接口（CRI），可直接被 kubelet 调用
- **runc**：底层实际创建容器的组件（操作 namespaces/cgroups）
- **镜像管理 + 快照**：拉取、存储、分发镜像
- **精简中立**：只做核心运行时，不含 Docker 的 CLI/构建等上层功能

## 关键设计决策

1. **拆分与标准化**：把运行时从 Docker 产品中剥离为中立组件，让整个生态复用。
2. **遵循 OCI/CRI 标准**：站在开放标准上，与 Kubernetes 等无缝对接。
3. **专注核心**：只做"运行容器"这件事，把构建、编排等交给上层。

## 生态位置

事实上的标准容器运行时。K8s 自 1.20 起弃用 Docker 直连、改用 containerd/CRI-O。Docker 底层也用它。谱系：Docker → containerd（运行时）→ runc（底层）。竞品：CRI-O（K8s 专用）。

## 我的评价

containerd 从 Docker 中拆分的历程，是"产品与标准分离"的经典演绎——当一项技术足够重要，它就会从某个具体产品中解耦出来，下沉为大家共享的中立基础设施。这也是 K8s "弃用 Docker" 新闻背后的真相：不是抛弃容器，而是直接对接更底层、更标准的 containerd。理解这条运行时分层链，是理解容器生态演进的关键。
