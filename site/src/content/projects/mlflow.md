---
name: MLflow
tagline: 机器学习全生命周期管理平台
category: AI/ML
foundation: LF AI & Data
language: Python
born: 2018
era: AI原生
stars: 18k+
depth: seed
repo: https://github.com/mlflow/mlflow
website: https://mlflow.org
tags: [MLOps, 实验追踪, 模型管理, 生命周期]
updated: 2026-04-24
---

## 一句话定位

MLflow 是由 Databricks 开源的机器学习全生命周期管理平台，覆盖实验追踪、可复现打包、模型注册与部署等环节，把混乱的 ML 开发流程工程化、规范化，是 MLOps（机器学习运维）领域的代表工具。

## 诞生背景

2018 年发布。ML 开发过程极其混乱——参数、指标、数据版本散落各处，"上周那个效果最好的模型用了什么配置"常常无从追溯，从实验到生产的路径也缺乏规范。MLflow 为 ML 引入了工程化的流程管理。

## 核心架构

- **Tracking**：记录每次实验的参数、指标、产物，可对比
- **Projects**：把 ML 代码打包成可复现的标准格式
- **Models**：统一的模型打包格式，支持多框架、多部署目标
- **Model Registry**：模型的版本管理、阶段流转（staging/production）
- **框架无关**：兼容 scikit-learn、PyTorch、TensorFlow、XGBoost 等

## 关键设计决策

1. **实验可追溯**：把参数/指标/产物系统化记录，解决"最优模型无从复现"的痛点。
2. **框架中立**：不绑定特定 ML 框架，做通用的生命周期管理层。
3. **端到端覆盖**：从实验到注册再到部署，打通 ML 从研发到生产的链路。

## 生态位置

MLOps 的核心工具之一（LF AI & Data 托管）。与实验追踪竞品 Weights & Biases（闭源、体验强）、DVC（数据/模型版本）互有侧重。常与 Ray、Kubeflow、Airflow 等在 ML 平台中组合使用。

## 我的评价

MLflow 把软件工程的严谨引入了常显"作坊式"的 ML 开发——它回答了一个每个 ML 团队都会遇到的尴尬问题："上次那个好模型到底是怎么训出来的？"它代表了 AI 的成熟：**当一项技术从实验走向生产，围绕它的"工程化、可复现、可运维"就会成为刚需**。MLflow 之于 ML，正如 CI/CD 之于软件开发——都是让创造过程变得可靠、可重复的基础设施。
