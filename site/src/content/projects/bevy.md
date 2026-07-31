---
name: Bevy
tagline: 数据驱动的 Rust 游戏引擎，ECS 架构的现代实践
category: 游戏引擎
language: Rust
born: 2020
era: 云原生
stars: 36k+
depth: seed
repo: https://github.com/bevyengine/bevy
website: https://bevyengine.org
tags: [游戏引擎, Rust, ECS, 数据驱动]
updated: 2026-05-31
---

## 一句话定位

Bevy 是用 Rust 编写的数据驱动游戏引擎，以简洁而强大的 ECS（实体-组件-系统）架构、模块化设计和 Rust 的安全与性能，成为 Rust 游戏开发生态中最受瞩目的引擎。

## 诞生背景

2020 年由 Carter Anderson 创建。Rust 生态缺少一个易用且现代的游戏引擎，而主流引擎（Unity/Unreal）用 C#/C++。Bevy 用 Rust 从零打造，把现代的 ECS 架构作为核心，追求"简单、模块化、快"。

## 核心架构

- **ECS（实体-组件-系统）**：数据（组件）与逻辑（系统）分离，是引擎的核心范式
- **Rust 编写**：内存安全 + 无 GC 的高性能
- **模块化插件**：功能以插件组织，按需组合
- **数据驱动**：游戏世界由组件数据描述，系统并行处理
- **跨平台**：桌面、Web（WASM）、移动

## 关键设计决策

1. **ECS 为核心**：以数据驱动的 ECS 组织游戏逻辑，天然利于并行与解耦，是现代引擎的趋势。
2. **Rust 安全 + 性能**：用 Rust 兼得内存安全与接近 C++ 的性能，避免了游戏开发常见的内存 bug。
3. **模块化 + 开源社区**：一切皆插件，社区驱动快速演进。

## 生态位置

Rust 游戏引擎的领头羊。竞品：Godot（开源、成熟、GDScript）、Unity/Unreal（商业、生态大）。Bevy 尚年轻，但代表了"用现代语言 + ECS 重做游戏引擎"的方向，社区活跃度极高。

## 我的评价

Bevy 是"Rust 重写浪潮"在游戏引擎领域的代表，也是 ECS 架构现代实践的绝佳范本——它把"数据与逻辑分离、系统并行处理"的 ECS 思想做得优雅而彻底。它与 Godot 的对比（ECS+Rust vs 节点树+GDScript）展现了游戏引擎架构的不同取向。虽然仍在成长，但它证明了 Rust 生态正从系统软件向更广阔的应用领域扩张。
