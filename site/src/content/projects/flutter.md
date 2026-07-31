---
name: Flutter
tagline: Google 的跨平台 UI 工具包，一套代码多端运行
category: 移动开发
foundation: Google
language: Dart
born: 2017
era: 云原生
stars: 165k+
depth: seed
repo: https://github.com/flutter/flutter
website: https://flutter.dev
tags: [跨平台, 移动, UI, Dart]
updated: 2026-06-30
---

## 一句话定位

Flutter 是 Google 开源的 UI 工具包，用 Dart 语言编写一套代码即可编译到 iOS、Android、Web、桌面等多个平台，以自绘引擎带来一致的高性能界面体验。

## 诞生背景

2017 年发布。跨平台方案要么用 WebView（性能差），要么桥接原生组件（一致性差、桥接开销）。Flutter 另辟蹊径：不用平台原生控件，而是用自己的渲染引擎（Skia/Impeller）直接绘制每一个像素。

## 核心架构

- **自绘引擎**：用 Skia/Impeller 直接绘制 UI，不依赖平台控件
- **一切皆 Widget**：UI 由可组合的 Widget 树声明式构建
- **Dart 语言**：AOT 编译到原生代码，性能好；JIT 支持热重载
- **响应式框架**：状态变化驱动 UI 重建

## 关键设计决策

1. **自绘而非桥接**：抛弃平台原生控件，自己画所有像素，换来跨平台的高度一致性与性能。
2. **声明式 Widget**：受 React 启发的声明式 UI，一切皆 Widget，组合灵活。
3. **热重载**：Dart 的 JIT 让开发时能秒级看到修改效果。

## 生态位置

跨平台移动开发的两强之一。竞品：React Native（桥接原生，JS 生态）。Flutter 以性能和一致性见长，React Native 以 JS 生态和原生观感见长。

## 我的评价

Flutter 的"自绘引擎"路线是一个大胆的架构赌注——它放弃了复用平台原生控件的便利，选择自己掌控每一个像素。代价是包体积和与原生的融合成本，回报是无与伦比的跨平台一致性。这体现了架构设计的本质：没有免费的午餐，每个选择都是一组权衡的取舍。理解 Flutter vs RN 的分歧，就理解了跨平台的核心矛盾。
