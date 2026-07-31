---
name: Flask
tagline: Python 微框架，简单即自由
category: 后端框架
language: Python
born: 2010
era: Web2.0
stars: 68k+
depth: seed
repo: https://github.com/pallets/flask
website: https://flask.palletsprojects.com
tags: [Web框架, Python, 微框架, 轻量]
updated: 2026-05-04
---

## 一句话定位

Flask 是 Python 的轻量级"微框架"，只提供路由、请求处理、模板等核心功能，其余能力（数据库、认证等）由开发者自由选择扩展，以简单、灵活、易上手著称，是 Python Web 开发的经典入门与中小项目首选。

## 诞生背景

2010 年由 Armin Ronacher 发布（最初是个愚人节玩笑）。与"全功能全内建"的 Django 相对，Flask 主张"框架应该小而精，把选择权交给开发者"——你需要什么就加什么，而非一开始就背上一堆约定。

## 核心架构

- **微内核**：核心只含路由、请求/响应、模板（Jinja2）
- **扩展生态**：Flask-SQLAlchemy、Flask-Login 等按需添加
- **WSGI + Werkzeug**：基于成熟的 WSGI 与 Werkzeug 工具库
- **蓝图（Blueprint）**：组织大型应用的模块化机制
- **装饰器路由**：`@app.route` 直观声明路由

## 关键设计决策

1. **微框架哲学**：只做核心，不做全部，把技术选型的自由留给开发者。
2. **显式优于隐式**：几乎没有"魔法"，代码行为清晰可控。
3. **渐进式扩展**：从几行的小应用到复杂系统，按需增加扩展。

## 生态位置

Python Web 的两极之一——与 Django（全功能、约定多）形成"微 vs 全"的经典对照。同类：FastAPI（现代异步、主打 API）。Flask 常用于中小型应用、API、原型和教学。

## 我的评价

Flask 与 Django 的对比是 Web 框架哲学的必修课——Django "自带一切、约定优先"，Flask "只给核心、自由组合"。没有谁对谁错，只有场景匹配：快速搭建标准化应用选 Django，追求灵活可控选 Flask。Flask 证明了"少即是多"在框架设计中同样成立：**克制的核心 + 开放的扩展，往往比大包大揽更有生命力**。
