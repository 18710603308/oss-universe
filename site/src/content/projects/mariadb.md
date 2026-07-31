---
name: MariaDB
tagline: MySQL 的社区分支，捍卫开源的关系型数据库
category: 数据库
foundation: MariaDB 基金会
language: C/C++
born: 2009
era: Web2.0
stars: 6k+
depth: seed
repo: https://github.com/MariaDB/server
website: https://mariadb.org
tags: [关系型数据库, MySQL分支, 开源]
updated: 2026-05-20
---

## 一句话定位

MariaDB 是 MySQL 的社区驱动分支，由 MySQL 原作者 Monty（Michael Widenius）在 Oracle 收购 MySQL 后创建，保持与 MySQL 高度兼容的同时坚持完全开源，是许多 Linux 发行版默认的 MySQL 替代。

## 诞生背景

2009 年，Sun（拥有 MySQL）被 Oracle 收购，社区担忧 MySQL 的开源前景。MySQL 之父 Monty 随即 fork 出 MariaDB（以女儿名字命名），确保这个关系型数据库继续在社区手中自由演进。

## 核心架构

- **MySQL 兼容**：协议、SQL、数据文件高度兼容，多数场景可直接替换
- **可插拔存储引擎**：InnoDB、Aria、ColumnStore（列存）等
- **社区治理**：由 MariaDB 基金会中立管理，而非单一公司
- **额外特性**：并行复制、更多存储引擎、部分性能优化
- **持续开源**：坚持 GPL，不搞开源核心 + 闭源功能的套路

## 关键设计决策

1. **兼容优先**：作为 MySQL 的"drop-in replacement"，迁移成本极低。
2. **fork 以捍卫开源**：面对收购带来的不确定性，用分叉保住社区的自由。
3. **基金会中立治理**：交给 MariaDB 基金会，避免重蹈单一公司控制的覆辙。

## 生态位置

MySQL 最主要的开源分支，Debian/Fedora 等发行版已将其作为默认的"MySQL"。与 MySQL（Oracle）、PostgreSQL（功能更强）同属关系型数据库。是"协议/所有权变更催生分叉"的早期经典案例。

## 我的评价

MariaDB 是"社区用分叉守护开源"的先驱案例——早在 OpenTofu、Valkey、OpenSearch 之前，它就示范了：当一个开源项目的前途因收购而不确定，社区（尤其原作者）可以 fork 出来另立门户。它与后来的这些分叉一脉相承，共同说明：**开源协议赋予的"分叉权"，是社区对抗商业不确定性的根本保障**。
