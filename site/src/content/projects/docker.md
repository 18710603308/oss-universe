---
name: Docker
tagline: 容器化革命的开创者，让"构建一次，到处运行"成为现实
category: 云原生
language: Go
born: 2013
stars: 69k+
depth: sprout
repo: https://github.com/moby/moby
website: https://www.docker.com
tags: [容器, 镜像, 虚拟化]
updated: 2026-07-25
---

## 一句话定位

Docker 通过将应用及其依赖打包进标准化的「容器」，解决了「在我机器上能跑」的经典难题，开创了容器化时代。

## 诞生背景

2013 年 dotCloud 公司开源 Docker。它并非发明了容器技术（Linux 早有 cgroups/namespaces），而是用极佳的开发者体验（Dockerfile、镜像分层、Registry）让容器变得人人可用。

## 核心架构

- **Namespaces**：进程隔离（PID/NET/MNT 等）
- **cgroups**：资源限制（CPU/内存）
- **联合文件系统（UnionFS）**：镜像分层、写时复制
- **Docker Engine**：daemon + CLI + REST API

## 关键设计决策

1. **镜像分层**：镜像由只读层叠加，层可缓存复用 —— 构建快、传输省。
2. **Dockerfile 声明式构建**：可复现的镜像构建脚本。
3. **标准化封装**：把「容器」变成可分发、可版本化的标准单元，催生了 OCI 标准。

## 生态位置

容器领域起点。运行时下沉为 containerd（CNCF），编排交给 Kubernetes。Docker 本身聚焦开发者本地体验。

## 快速上手

```bash
docker run -d -p 8080:80 nginx
docker ps
```

## 我的评价

Docker 是「体验创新胜过技术创新」的最佳案例 —— 底层技术早已存在，但 Docker 用 Dockerfile 和镜像分层把它包装成开发者愿意用的形态，从而引爆了整个云原生浪潮。它教会我：降低使用门槛本身就是巨大的价值创造。
