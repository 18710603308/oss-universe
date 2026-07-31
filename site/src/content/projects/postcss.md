---
name: PostCSS
tagline: 用 JS 插件转换 CSS 的工具平台
category: CSS框架
language: JavaScript
born: 2013
era: 云计算
stars: 28k+
depth: seed
repo: https://github.com/postcss/postcss
website: https://postcss.org
tags: [CSS工具, 插件化, 转换, 构建]
updated: 2026-04-07
---

## 一句话定位

PostCSS 是用 JavaScript 插件转换 CSS 的工具平台，它本身不定义语法，而是把 CSS 解析成抽象语法树（AST），交给插件去做各种转换——自动加浏览器前缀、支持未来 CSS 语法、压缩优化等，是现代前端构建链中处理 CSS 的核心引擎。

## 诞生背景

2013 年由 Andrey Sitnik（也是 Autoprefixer 作者）创建。Sass/Less 是"大而全"的预处理器，功能固定。PostCSS 反其道而行：做一个极简的"CSS 转换平台"，具体做什么由插件决定——像 Babel 之于 JS，是可插拔的转换工具。

## 核心架构

- **CSS → AST → CSS**：把 CSS 解析成语法树，转换后再输出
- **插件化架构**：核心极小，能力全部来自插件
- **明星插件**：Autoprefixer（自动加前缀）、postcss-preset-env（用未来 CSS）、cssnano（压缩）
- **可组合**：按需组合多个插件成转换流水线
- **构建集成**：深度集成于 Vite、Webpack 等（本站 Tailwind v4 底层也经 PostCSS 生态）

## 关键设计决策

1. **平台而非预处理器**：不定义固定语法，只做 CSS 转换的引擎，能力交给插件。
2. **插件化可组合**：像 Babel 一样，用户按需拼装转换能力，灵活极致。
3. **务实工具链定位**：专注做好"转换"这一环，融入现代构建流水线。

## 生态位置

现代 CSS 工具链的核心引擎。Autoprefixer、Tailwind CSS、cssnano 等都构建在它之上。与 Sass/Less（预处理器、固定语法）定位不同：PostCSS 是"可插拔的转换平台"，二者常配合使用。几乎所有现代前端项目的构建都间接用到它。

## 我的评价

PostCSS 之于 CSS，正如 Babel 之于 JavaScript——都是"可插拔的转换平台"这一模式的体现。它的智慧在于极致克制：**自己不做任何具体功能，只提供一个解析-转换-输出的框架，把无限可能留给插件生态**。这种"做平台而非做产品"的定位，让它成了整个 CSS 工具链的隐形基石。它诠释了：有时最强大的工具，是那个让别人能造工具的工具。
