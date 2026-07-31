---
name: Clojure
tagline: 运行在 JVM 上的现代 Lisp，拥抱不可变
category: 编程语言
language: Clojure
born: 2007
era: Web2.0
stars: 10k+
depth: seed
repo: https://github.com/clojure/clojure
website: https://clojure.org
tags: [编程语言, Lisp, 函数式, 不可变]
updated: 2026-04-23
---

## 一句话定位

Clojure 是运行在 JVM 上的现代 Lisp 方言，以函数式编程、不可变数据结构和强大的并发原语为核心，用极简的语法（代码即数据）和实用主义，让古老的 Lisp 思想在现代工程中焕发新生。

## 诞生背景

2007 年由 Rich Hickey 独立设计。他既欣赏 Lisp 的表达力与宏系统，又希望有一门实用、能利用成熟生态（JVM）、并从语言层面认真对待并发问题的 Lisp。Clojure 就是这份思考的结晶。

## 核心架构

- **不可变数据结构**：默认不可变，从根本上简化并发
- **代码即数据（同像性）**：Lisp 的 S 表达式，强大的宏系统
- **JVM 宿主**：可调用 Java 生态，运行在成熟虚拟机上
- **并发原语**：STM（软件事务内存）、Atom、Agent 等
- **REPL 驱动开发**：交互式、增量式的开发体验

## 关键设计决策

1. **不可变优先**：把不可变作为默认，让并发编程从"共享可变状态的噩梦"中解脱。
2. **实用的 Lisp**：保留 Lisp 的宏与表达力，但寄居 JVM，务实地拥抱现有生态。
3. **认真对待并发**：从语言层面提供 STM 等并发工具，而非事后补丁。

## 生态位置

现代 Lisp 的代表，函数式实用主义的旗帜。有 ClojureScript（编译到 JS）拓展到前端。它对"不可变数据"的推崇深刻影响了整个行业（React 的不可变思想、Redux 等都有其回响）。小众但影响力与忠诚度极高。

## 我的评价

Clojure 是 Rich Hickey 深邃思考的产物——他的演讲《Simple Made Easy》（区分"简单 simple"与"容易 easy"）是软件设计的经典。Clojure 把这种哲学落到语言里：用不可变和函数式追求本质的"简单"。它让人重新认识到 Lisp 半个世纪前的思想（代码即数据、宏）至今仍然先进。它证明：**最深刻的创新，有时是把一个古老而正确的思想，用现代实用的方式重新实现。**
