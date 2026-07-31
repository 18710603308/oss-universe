---
name: Playwright
tagline: 微软的现代端到端测试框架，跨浏览器自动化
category: 测试
foundation: Microsoft
language: TypeScript
born: 2020
era: 云原生
stars: 67k+
depth: seed
repo: https://github.com/microsoft/playwright
website: https://playwright.dev
tags: [E2E测试, 浏览器自动化, 跨浏览器]
updated: 2026-06-09
---

## 一句话定位

Playwright 是微软开源的端到端（E2E）测试与浏览器自动化框架，用一套 API 驱动 Chromium、Firefox、WebKit 三大引擎，以自动等待、可靠性和多语言支持，成为现代 Web 测试的主流选择。

## 诞生背景

2020 年由原 Puppeteer 团队在微软打造。Web E2E 测试长期饱受"不稳定（flaky）"困扰——元素还没加载就操作导致随机失败。Playwright 用"自动等待"和更可靠的执行模型系统性地解决了这一顽疾。

## 核心架构

- **跨浏览器**：一套 API 统一驱动 Chromium/Firefox/WebKit
- **自动等待（auto-wait）**：操作前自动等元素就绪，消除 flaky
- **Locator 定位**：稳健的元素定位策略
- **多语言**：支持 TS/JS、Python、Java、.NET
- **Trace Viewer**：失败时回放完整执行轨迹，便于调试

## 关键设计决策

1. **自动等待**：把"等元素就绪"内建到每个操作，从根本上治理测试不稳定问题。
2. **跨浏览器统一 API**：一次编写，三引擎运行，覆盖真实浏览器差异。
3. **面向可调试性**：Trace Viewer、录制回放让排查失败变得直观。

## 生态位置

现代 E2E 测试的领导者。前身/相关：Puppeteer（仅 Chrome）。竞品：Cypress（DX 好但单浏览器进程模型）、Selenium（老牌、生态大但重）。本站的浏览器验证也常用同类工具。

## 我的评价

Playwright 的成功在于它精准打击了 E2E 测试最大的痛点——不稳定。通过"自动等待"这一设计，它把测试从"玄学般的随机失败"变得可靠可信。它印证了一条产品哲学：与其堆砌功能，不如彻底解决用户最痛的那一个问题。测试稳定了，团队才敢真正依赖自动化测试。
