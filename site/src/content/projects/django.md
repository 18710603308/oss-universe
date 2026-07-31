---
name: Django
tagline: Python 的"全能"Web 框架，为完美主义者的截稿日而生
category: 后端框架
language: Python
born: 2005
era: Web2.0
stars: 82k+
depth: seed
repo: https://github.com/django/django
website: https://www.djangoproject.com
tags: [Web框架, 全功能, ORM, MVC]
updated: 2026-07-01
---

## 一句话定位

Django 是 Python 的高级 Web 框架，秉持「电池全含」理念，内置 ORM、Admin 后台、认证、表单、模板等全套能力，让开发者快速构建功能完整、安全可靠的 Web 应用。

## 诞生背景

2005 年从美国劳伦斯出版集团的新闻网站项目中提炼开源。口号是「为有截稿日的完美主义者服务」——即在快速开发的同时保证代码质量与安全。

## 核心架构

- **ORM**：用 Python 类映射数据库表，屏蔽 SQL 差异
- **MTV 模式**：Model-Template-View（Django 版 MVC）
- **自动 Admin**：根据模型自动生成管理后台
- **中间件**：请求/响应处理管道
- **电池全含**：认证、缓存、国际化、安全防护开箱即用

## 关键设计决策

1. **电池全含（Batteries Included）**：把 Web 开发的常见需求全部内置，减少选型和拼装成本。
2. **自动化 Admin**：仅凭数据模型即生成后台管理界面，极大提升开发效率。
3. **安全默认**：内置防 CSRF、XSS、SQL 注入等，安全是默认而非选配。

## 生态位置

Python 全功能 Web 框架的代表。适合内容驱动、后台系统。对比：Flask（微框架，灵活）、FastAPI（现代异步 API）。三者共同构成 Python Web 生态。

## 我的评价

Django 与 Flask 的对比是"全能 vs 极简"的经典哲学分野——Django 替你做好所有决定（约定优于配置），Flask 把选择权交给你。Django 的"电池全含"在标准化的业务开发中极大提效，而它的 Admin 后台更是"用元数据自动生成 UI"的绝佳范例，至今仍是 Web 框架效率的标杆。
