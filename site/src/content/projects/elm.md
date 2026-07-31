---
name: Elm
tagline: 没有运行时异常的前端函数式语言
category: 编程语言
language: Elm
born: 2012
era: 云计算
stars: 7k+
depth: seed
repo: https://github.com/elm/compiler
website: https://elm-lang.org
tags: [编程语言, 前端, 函数式, 无运行时异常]
updated: 2026-03-21
---

## 一句话定位

Elm 是一门专为前端设计的纯函数式语言，编译到 JavaScript，以"没有运行时异常"的承诺、友好到极致的编译器错误提示和优雅的架构（The Elm Architecture）著称，为前端开发带来了函数式的可靠与愉悦。

## 诞生背景

2012 年由 Evan Czaplicki 作为毕业设计创造。当时前端充斥着运行时错误（undefined is not a function）、状态管理混乱。Elm 想用纯函数式和强类型，从语言层面消除这类错误，让前端应用可靠、可预测。

## 核心架构

- **纯函数式 + 强类型**：无副作用、编译期类型检查，杜绝运行时异常
- **The Elm Architecture（TEA）**：Model-Update-View 的单向数据流架构
- **编译到 JS**：产物在浏览器运行
- **著名的友好编译器**：错误提示清晰友好，被公认为业界标杆
- **不可变数据**：一切不可变，状态可预测

## 关键设计决策

1. **消灭运行时异常**：用纯函数 + 强类型，把一大类前端错误消灭在编译期。
2. **The Elm Architecture**：Model/Update/View 单向数据流——它直接启发了 Redux！
3. **编译器体验优先**：把错误提示做到极其友好，降低函数式的学习门槛。

## 生态位置

前端函数式语言的先驱与思想源头。虽自身小众（生态、更新节奏受限），但它的 The Elm Architecture 直接启发了 Redux，进而影响了整个前端状态管理；它对"友好编译器错误"的追求也被 Rust 等广泛学习。

## 我的评价

Elm 是"影响力远超使用量"的典范——它本身小众，但它的 The Elm Architecture 直接催生了 Redux，从而深刻影响了整个前端状态管理的演进。它对"友好编译器错误信息"的执着也重塑了行业预期（Rust 等纷纷效仿）。它再次印证了本站反复出现的规律：**一个项目最大的遗产，常常不是它自己的市场份额，而是它贡献给整个行业的思想**——正如 Elm 之于单向数据流、Backbone 之于前端 MVC。
