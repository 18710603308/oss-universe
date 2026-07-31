---
name: NumPy
tagline: Python 科学计算的基石，多维数组的通用语言
category: 数据科学
foundation: NumFOCUS
language: Python/C
born: 2006
era: Web2.0
stars: 28k+
depth: seed
repo: https://github.com/numpy/numpy
website: https://numpy.org
tags: [科学计算, 数组, 向量化, 数值]
updated: 2026-06-15
---

## 一句话定位

NumPy 是 Python 科学计算的基础库，提供高效的多维数组（ndarray）和丰富的数值运算，几乎所有 Python 数据科学与 AI 库（Pandas、SciPy、PyTorch 等）都建立在它之上。

## 诞生背景

2006 年由 Travis Oliphant 整合早期的 Numeric 与 Numarray 而成。Python 原生列表做数值计算又慢又占内存，NumPy 用连续内存的数组 + C 实现的向量化运算，让 Python 具备了媲美 MATLAB 的科学计算能力。

## 核心架构

- **ndarray**：连续内存的同类型多维数组，是核心数据结构
- **向量化运算**：对整个数组批量操作，避免 Python 循环
- **广播（Broadcasting）**：不同形状数组间的自动对齐运算
- **C/Fortran 底层**：数值密集运算下沉到编译代码
- **通用数据交换格式**：成为科学 Python 生态的数组标准

## 关键设计决策

1. **连续内存 ndarray**：用紧凑的定型数组替代 Python 列表，性能与内存效率大增。
2. **向量化 + 广播**：用数组级操作替代逐元素循环，代码简洁且快。
3. **做生态地基**：定义了数组这一通用接口，让整个科学栈围绕它协作。

## 生态位置

Python 科学计算与 AI 的绝对地基（NumFOCUS 旗舰项目）。Pandas、SciPy、scikit-learn、Matplotlib、PyTorch 等都依赖或兼容它的数组接口。

## 我的评价

NumPy 是"定义通用数据结构"的力量典范——它最大的贡献不是某个算法，而是让"多维数组"成为整个 Python 科学生态的通用语言。所有库都能围绕 ndarray 互操作，这种"共享的数据抽象"是生态繁荣的地基。没有 NumPy，就没有今天 Python 在数据科学和 AI 领域的统治地位。
