---
name: Capacitor
tagline: 现代原生运行时，给 Web 应用装上原生能力
category: 移动开发
language: TypeScript
born: 2018
era: 云原生
stars: 13k+
depth: seed
repo: https://github.com/ionic-team/capacitor
website: https://capacitorjs.com
tags: [移动开发, 原生桥接, 跨平台, Web]
updated: 2026-04-13
---

## 一句话定位

Capacitor 是 Ionic 团队打造的现代原生运行时，把任意 Web 应用打包成 iOS、Android 和桌面原生应用，并通过统一的插件 API 访问相机、GPS、文件等原生设备能力，是 Cordova 的现代继任者。

## 诞生背景

2018 年发布。老一代方案 Cordova 架构陈旧、插件生态混乱、对原生项目控制弱。Capacitor 重新设计：把原生项目当作"一等公民"（可直接用 Xcode/Android Studio 打开修改），并提供现代化的插件 API 和更好的开发体验。

## 核心架构

- **Web 到原生打包**：把 Web 应用装进原生容器
- **原生项目一等公民**：生成的原生工程可直接用原生 IDE 打开、定制
- **统一插件 API**：相机、地理位置、文件系统等一致接口
- **框架无关**：任何 Web 应用（React/Vue/Angular/原生）都能用
- **渐进式**：可与现有原生代码混合

## 关键设计决策

1. **原生项目一等公民**：不隐藏原生工程，让开发者能自由用原生工具定制，控制力更强。
2. **现代插件模型**：重新设计插件 API，比 Cordova 更清晰、易维护。
3. **框架无关 + 渐进式**：任意 Web 应用可用，也能与原生代码共存，迁移平滑。

## 生态位置

现代混合应用的原生运行时，Cordova 的继任者。它是 Ionic 的底层桥接层，但也可独立于 Ionic 使用（配任意 Web 框架）。与 React Native 的原生桥、Flutter 的引擎属于不同技术路线的"Web 到原生"方案。

## 我的评价

Capacitor 是"重做前辈"的典范——它没有另起炉灶发明新范式，而是针对 Cordova 的痛点（架构老、控制弱）做了一次彻底的现代化重构。它"把原生项目当一等公民"的决策尤其明智：承认"有时你就是需要碰原生代码"，于是不隐藏、不阻拦，反而提供更好的协作。这体现了成熟工具的态度：**不追求把一切都抽象掉，而是在抽象与直接控制之间给出务实的平衡。**
