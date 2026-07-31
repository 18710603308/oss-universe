---
name: React Native
tagline: 用 React 写原生移动应用，"一次学习，随处编写"
category: 移动开发
foundation: Meta
language: JavaScript
born: 2015
era: 云计算
stars: 121k+
depth: seed
repo: https://github.com/facebook/react-native
website: https://reactnative.dev
tags: [跨平台, 移动, React, 原生]
updated: 2026-06-17
---

## 一句话定位

React Native 是 Meta 开源的跨平台移动开发框架，让开发者用 React 和 JavaScript 编写能渲染为真正原生 UI 组件的 iOS/Android 应用，主打"一次学习，随处编写"。

## 诞生背景

2015 年发布。Facebook 希望复用 Web 的 React 开发经验来做移动端，同时又不满足于 WebView 的性能。React Native 的方案：用 JS 写逻辑，但把 UI 映射为平台的原生控件。

## 核心架构

- **桥接原生控件**：JS 组件映射为真正的 iOS/Android 原生 UI 组件
- **JS 引擎 + Bridge/JSI**：JS 线程与原生线程通信（新架构用 JSI 直连）
- **Fabric 渲染器**：新一代渲染架构，降低通信开销
- **热重载**：改代码即时预览
- **原生模块**：需要时可编写原生代码扩展

## 关键设计决策

1. **原生控件而非自绘**：与 Flutter 的自绘相反，RN 用平台原生控件，获得原生观感与平台一致性。
2. **复用 React 生态**：Web 开发者可低成本转向移动开发。
3. **新架构演进**：用 JSI/Fabric 替代旧 Bridge，解决通信性能瓶颈。

## 生态位置

跨平台移动开发两强之一。竞品：Flutter（自绘引擎，Dart）。RN 以"JS 生态 + 原生控件"见长，Flutter 以"性能与一致性"见长。众多知名 App（Instagram、Discord 等）在用。

## 我的评价

React Native 与 Flutter 的路线之争是移动跨平台的核心命题——RN 选择"桥接原生控件"（贴近平台、复用生态），Flutter 选择"自绘一切"（跨平台一致、性能可控）。没有绝对的对错，只有场景的权衡。RN 的"Learn once, write anywhere"（而非"write once, run anywhere"）也是一个诚实而深刻的定位：它承认平台差异，只承诺经验复用。
