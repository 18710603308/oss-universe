---
name: MySQL
tagline: 世界上最流行的开源关系型数据库，Web 应用的基石
category: 数据库
language: C++
born: 1995
era: Web2.0
stars: 11k+
depth: seed
repo: https://github.com/mysql/mysql-server
website: https://www.mysql.com
tags: [关系型数据库, SQL, LAMP]
updated: 2026-06-29
---

## 一句话定位

MySQL 是世界上使用最广泛的开源关系型数据库，以易用、快速、可靠著称，作为 LAMP（Linux+Apache+MySQL+PHP）技术栈的一环，支撑了互联网时代无数网站与应用。

## 诞生背景

1995 年由 MySQL AB 发布。在商业数据库昂贵的年代，MySQL 提供了一个免费、够用、易上手的选择，随着 Web 浪潮成为互联网应用的默认数据库。后被 Sun 收购，再随 Sun 并入 Oracle。

## 核心架构

- **存储引擎可插拔**：InnoDB（事务、行锁，默认）、MyISAM（早期）等
- **InnoDB**：支持 ACID 事务、MVCC、外键、崩溃恢复
- **主从复制**：binlog 驱动的复制，实现读写分离与高可用
- **SQL 标准**：广泛兼容，生态工具丰富

## 关键设计决策

1. **可插拔存储引擎**：把 SQL 层与存储层解耦，同一数据库可按需选择引擎——这是 MySQL 独特的架构灵活性。
2. **易用优先**：安装简单、上手快，契合 Web 开发者的需求。
3. **复制机制**：基于 binlog 的主从复制，成为大规模读扩展的经典方案。

## 生态位置

关系型数据库的国民级选择。分支/衍生：MariaDB（社区分支，因 Oracle 收购而生）、Percona、以及 TiDB 等兼容 MySQL 协议的 NewSQL。竞品：PostgreSQL（功能更强）。

## 我的评价

MySQL 的历史与 PostgreSQL 形成有趣对照：MySQL 以"易用、够快"赢得了互联网草莽时代的普及，PostgreSQL 以"严谨、强大"在复杂场景后来居上。而它被 Oracle 收购后催生 MariaDB 分支的故事，则是开源社区"用脚投票、以分叉捍卫自由"的经典一课——开源协议保证了：即使母公司易主，社区依然能延续项目的自由。
