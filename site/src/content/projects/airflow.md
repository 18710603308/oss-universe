---
name: Apache Airflow
tagline: 用代码编排工作流，数据管道调度的事实标准
category: 大数据
foundation: Apache
language: Python
born: 2016
era: 云原生
stars: 37k+
depth: seed
repo: https://github.com/apache/airflow
website: https://airflow.apache.org
tags: [工作流, 调度, 数据管道, DAG]
updated: 2026-05-31
---

## 一句话定位

Apache Airflow 是用 Python 代码定义、调度和监控工作流的平台，把数据管道表达为有向无环图（DAG），成为数据工程领域批处理任务编排的事实标准。

## 诞生背景

2014 年由 Airbnb 创建，2016 年进入 Apache。数据团队有大量需要按依赖顺序、定时执行的任务（ETL、报表、模型训练），此前靠 cron + 脚本管理，脆弱且难以观测。Airflow 提出"工作流即代码"。

## 核心架构

- **DAG（有向无环图）**：用 Python 代码定义任务及其依赖关系
- **Operator**：任务的执行单元（Bash、Python、SQL、K8s 等）
- **Scheduler**：按依赖与时间调度任务
- **Executor**：任务执行后端（本地、Celery、K8s）
- **Web UI**：可视化 DAG、运行状态与日志

## 关键设计决策

1. **工作流即代码**：用 Python 定义 DAG，让管道可版本化、可测试、可复用，告别脆弱的 cron 脚本。
2. **依赖驱动调度**：显式声明任务依赖，调度器据此编排执行顺序。
3. **可插拔执行器**：调度与执行分离，可从单机扩展到 K8s 集群。

## 生态位置

数据工程工作流编排的事实标准。常调度 Spark/Flink 作业、dbt、ML 管道。竞品/后辈：Dagster、Prefect（更现代的数据编排）、Argo Workflows（K8s 原生）、Temporal（通用工作流）。

## 我的评价

Airflow 把"工作流即代码"的理念带入数据工程，其意义类似 Terraform 之于基础设施——都是把"原本靠手工/脚本管理的东西"变成可版本化、可复现的代码。它用 DAG 显式表达任务依赖，让复杂数据管道变得可观测、可维护。理解 DAG 编排，是数据工程从"脚本作坊"走向"工程化"的分水岭。
