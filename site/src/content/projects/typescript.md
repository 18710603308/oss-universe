---
name: TypeScript
tagline: JavaScript 的超集，为大型前端工程带来类型安全
category: 编程语言
foundation: Microsoft
language: TypeScript
born: 2012
era: 云计算
stars: 100k+
depth: sprout
repo: https://github.com/microsoft/TypeScript
website: https://www.typescriptlang.org
tags: [编程语言, 类型系统, JS超集]
updated: 2026-07-02
---

## 一句话定位

TypeScript 是微软开发的 JavaScript 超集，通过静态类型系统在编译期捕获错误、提供智能提示，让 JavaScript 能够胜任大型工程，如今已成为前端和 Node.js 开发的事实标准。

## 诞生背景

2012 年由 Anders Hejlsberg（C# 之父）主导发布。JavaScript 动态弱类型，在大型项目中难以维护、重构风险高。TypeScript 在不破坏 JS 生态的前提下，叠加了一层可选的静态类型。

## 核心架构

- **超集设计**：所有合法 JS 都是合法 TS，编译后产出纯 JS
- **结构化类型系统**：基于"形状"而非名义的类型兼容
- **类型推断**：大量场景无需显式标注
- **渐进采用**：可从 JS 逐步迁移，类型可松可严
- **强大的类型工具**：泛型、联合类型、条件类型、模板字面量类型

## 关键设计决策

1. **JS 超集 + 编译到 JS**：不另起炉灶，完全兼容 JS 生态，这是它能普及的关键。
2. **可选渐进的类型**：允许从松散到严格逐步收紧，降低迁移门槛。
3. **服务于工具**：类型信息驱动了 IDE 的智能提示与重构（配合 LSP）。

## 生态位置

现代前端的默认语言，主流框架（Angular/Vue/React 生态）全面拥抱。Deno、Bun 原生支持。本学习网站也用 TS 编写。竞品：纯 JS（渐被取代）、JSDoc（轻量类型）。

## 我的评价

TypeScript 的成功策略极具启发性——它没有试图取代 JavaScript，而是选择做它的"超集"，完全兼容既有生态再叠加价值。这种"拥抱而非颠覆"的路线，让它避开了无数新语言"生态从零开始"的死亡陷阱。想改造一个庞大的现存生态，兼容性往往比先进性更重要。
