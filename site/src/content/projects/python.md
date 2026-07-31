---
name: Python
tagline: 优雅易读的通用语言，AI 时代的第一语言
category: 编程语言
foundation: Python 软件基金会
language: C
born: 1991
era: Web2.0
stars: 63k+
depth: sprout
repo: https://github.com/python/cpython
website: https://www.python.org
tags: [编程语言, 脚本, AI, 胶水语言]
updated: 2026-07-02
---

## 一句话定位

Python 是 Guido van Rossum 于 1991 年创造的通用编程语言，以简洁优雅、易读易学著称，凭借强大的生态在数据科学、AI、Web、自动化等领域全面开花，是当今最流行的语言之一。

## 诞生背景

1991 年诞生，设计哲学是「优雅、明确、简单」（The Zen of Python）。它刻意追求代码可读性（用缩进表示代码块），让编程更接近自然表达。CPython 是其官方参考实现，由 Python 软件基金会（PSF）维护。

## 核心架构

- **CPython**：官方解释器，字节码 + 虚拟机
- **动态类型 + 鸭子类型**：灵活但需注意运行时错误
- **GIL（全局解释器锁）**：简化了 C 扩展，但限制了多线程并行
- **丰富的标准库 + PyPI**：40 万+ 第三方包
- **C 扩展**：性能关键部分可用 C 实现（NumPy 等）

## 关键设计决策

1. **可读性优先**：用缩进强制统一代码风格，"代码是给人读的"这一理念深入语言设计。
2. **胶水语言定位**：轻松调用 C/C++ 库，成为科学计算和 AI 的粘合层。
3. **电池全含**：强大的标准库让常见任务开箱即用。

## 生态位置

AI/数据科学的第一语言（PyTorch、TensorFlow、Pandas 均以它为主接口）。也广泛用于 Web（Django/FastAPI）、自动化、教育。竞品视场景而定：Julia（科学计算）、Go/Rust（性能）。

## 我的评价

Python 的成功是「以人为本」的胜利——它牺牲了一部分运行性能，换来了无与伦比的开发效率和可读性，而这恰好契合了"人的时间比机器时间更贵"的现代趋势。它在 AI 时代登顶，则印证了一个道理：一门语言的命运，往往取决于它承载了哪个时代最重要的生态。
