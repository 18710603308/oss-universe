---
name: Kubernetes
tagline: 容器编排的事实标准，云原生时代的操作系统
category: 云原生
foundation: CNCF
language: Go
born: 2014
era: 云原生
stars: 110k+
depth: tree
repo: https://github.com/kubernetes/kubernetes
website: https://kubernetes.io
tags: [容器编排, K8s, 云原生]
updated: 2026-07-25
---

## 一句话定位

Kubernetes（K8s）是 Google 基于内部 Borg 系统经验开源的容器编排平台，负责自动化容器的部署、扩缩容与运维，是 CNCF 的首个毕业项目。

## 诞生背景

2014 年 Google 开源 K8s，将十余年大规模容器调度经验开放给社区。它在与 Docker Swarm、Mesos 的竞争中胜出，成为编排领域的绝对标准。

## 核心架构

**控制平面（Control Plane）**：
- `kube-apiserver`：所有操作的唯一入口（REST API）
- `etcd`：分布式 KV 存储，集群唯一真相来源
- `kube-scheduler`：决定 Pod 调度到哪个节点
- `kube-controller-manager`：运行各种控制器，驱动实际状态趋近期望状态

**数据平面（Node）**：
- `kubelet`：节点代理，管理 Pod 生命周期
- `kube-proxy`：维护网络规则

## 关键设计决策

1. **声明式 API + 控制循环**：你声明「期望状态」，控制器持续调和（reconcile）实际状态 —— 这是 K8s 最核心的思想。
2. **一切皆对象**：Pod/Service/Deployment 等资源统一由 API Server 管理。
3. **可扩展性**：CRD + Operator 让用户扩展 K8s 自身的 API。

## 生态位置

K8s 是整个 CNCF Landscape 的中心。Helm（包管理）、Prometheus（监控）、Istio（服务网格）、ArgoCD（GitOps）都围绕它构建。

## 快速上手

```bash
# 用 K3s 或 kind 起一个本地集群
kind create cluster
kubectl create deployment nginx --image=nginx
kubectl get pods -w
```

## 我的评价

K8s 真正的思想内核是「声明式 + 调和循环」这一控制论模型 —— 它把运维从「执行命令序列」变成「描述目标状态」。理解了 reconcile loop，就理解了整个云原生生态的设计范式。复杂度是其代价，但这是分布式系统本质复杂度的体现。
