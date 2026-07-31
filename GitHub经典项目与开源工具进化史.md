# GitHub 经典项目与开源工具进化史

> 从 2008 年 GitHub 建站至今，系统盘点各领域顶级开源项目的诞生、演进与影响。  
> 覆盖编程语言、前后端框架、数据库、DevOps、容器化、AI/ML、编辑器、操作系统等全部主要类别。

---

## 目录

1. [GitHub 里程碑与 Stars 殿堂](#github-里程碑与-stars-殿堂)
2. [编程语言](#编程语言)
3. [前端框架与工具链](#前端框架与工具链)
4. [后端框架](#后端框架)
5. [数据库与存储](#数据库与存储)
6. [DevOps 与 CI/CD](#devops-与-cicd)
7. [容器与云原生](#容器与云原生)
8. [AI / 机器学习 / 深度学习](#ai--机器学习--深度学习)
9. [编辑器与 IDE](#编辑器与-ide)
10. [操作系统与内核](#操作系统与内核)
11. [移动开发](#移动开发)
12. [网络与通信](#网络与通信)
13. [安全工具](#安全工具)
14. [包管理与构建工具](#包管理与构建工具)
15. [测试工具](#测试工具)
16. [监控与可观测性](#监控与可观测性)
17. [消息队列与流处理](#消息队列与流处理)
18. [搜索引擎](#搜索引擎)
19. [Web 服务器与代理](#web-服务器与代理)
20. [文档与知识管理](#文档与知识管理)
21. [设计与多媒体](#设计与多媒体)
22. [区块链与 Web3](#区块链与-web3)
23. [命令行工具](#命令行工具)
24. [其他经典项目](#其他经典项目)

---

## GitHub 里程碑与 Stars 殿堂

### GitHub 平台发展时间线

| 年份 | 里程碑事件 |
|------|-----------|
| 2008 | GitHub 正式上线，Git 托管平台诞生 |
| 2009 | 用户突破 10 万，jQuery 迁移至 GitHub |
| 2010 | 用户突破 100 万，Rails/Node.js 社区入驻 |
| 2011 | GitHub Enterprise 发布 |
| 2012 | 用户突破 300 万，仓库数超 350 万 |
| 2013 | 仓库数突破 1000 万 |
| 2014 | GitHub Atom 编辑器发布 |
| 2015 | GitHub Desktop 发布，Electron 开源 |
| 2016 | 用户突破 2000 万 |
| 2017 | GitHub Marketplace 上线 |
| 2018 | 微软以 75 亿美元收购 GitHub |
| 2019 | GitHub Actions 正式发布，GitHub Package Registry |
| 2020 | GitHub 免费账户无限私有仓库，Codespaces 发布 |
| 2021 | GitHub Copilot 预览版发布 |
| 2022 | GitHub Copilot 正式商用 |
| 2023 | GitHub Copilot X 发布，全面 AI 化 |
| 2024 | GitHub Copilot Workspace、多模型支持 |
| 2025 | GitHub Copilot Agent 模式、Coding Agent |

### Stars 排行榜 Top 30（截至 2025 年）

| 排名 | 项目 | Stars | 类别 | 诞生年 |
|------|------|-------|------|--------|
| 1 | freeCodeCamp | 400k+ | 教育 | 2014 |
| 2 | free-programming-books | 340k+ | 教育 | 2013 |
| 3 | awesome | 320k+ | 资源列表 | 2014 |
| 4 | public-apis | 310k+ | API 集合 | 2016 |
| 5 | coding-interview-university | 300k+ | 教育 | 2016 |
| 6 | system-design-primer | 270k+ | 教育 | 2017 |
| 7 | build-your-own-x | 260k+ | 教育 | 2018 |
| 8 | developer-roadmap | 250k+ | 教育 | 2017 |
| 9 | React | 230k+ | 前端框架 | 2013 |
| 10 | Vue.js | 210k+ | 前端框架 | 2014 |
| 11 | tensorflow | 185k+ | AI/ML | 2015 |
| 12 | javascript-algorithms | 185k+ | 教育 | 2018 |
| 13 | You-Dont-Know-JS | 180k+ | 教育 | 2013 |
| 14 | CS-Notes | 175k+ | 教育(中文) | 2018 |
| 15 | linux | 170k+ | 操作系统 | 2011 |
| 16 | Bootstrap | 170k+ | CSS框架 | 2011 |
| 17 | ohmyzsh | 170k+ | Shell 工具 | 2009 |
| 18 | Python-100-Days | 155k+ | 教育(中文) | 2018 |
| 19 | vscode | 165k+ | 编辑器 | 2015 |
| 20 | Flutter | 165k+ | 移动开发 | 2017 |
| 21 | TypeScript | 100k+ | 编程语言 | 2012 |
| 22 | Node.js | 107k+ | 运行时 | 2009 |
| 23 | three.js | 102k+ | 3D图形 | 2010 |
| 24 | next.js | 127k+ | Web框架 | 2016 |
| 25 | deno | 95k+ | 运行时 | 2018 |
| 26 | rust | 98k+ | 编程语言 | 2010 |
| 27 | go | 125k+ | 编程语言 | 2009 |
| 28 | transformers | 135k+ | AI/NLP | 2018 |
| 29 | electron | 114k+ | 桌面框架 | 2013 |
| 30 | kubernetes | 110k+ | 容器编排 | 2014 |

---

## 编程语言

### 编程语言在 GitHub 上的进化

```
2008-2010: Ruby 时代（GitHub 自身用 Ruby 写成）
2010-2013: JavaScript/Node.js 崛起
2012-2015: Go、Rust、TypeScript 诞生并开源
2015-2018: Swift、Kotlin 进入主流
2019-2025: Rust 生态爆发、Zig/Mojo 新秀
```

### 开源编程语言一览

| 语言 | GitHub 开源年 | 创造者 | 定位 | 仓库 |
|------|-------------|--------|------|------|
| **Ruby** | 2008 (迁入) | Matz | 动态脚本，Web 开发 | ruby/ruby |
| **Node.js** | 2009 | Ryan Dahl | JS 服务端运行时 | nodejs/node |
| **CoffeeScript** | 2009 | Jeremy Ashkenas | JS 语法糖（已式微） | jashkenas/coffeescript |
| **Go** | 2009 | Google (Rob Pike等) | 系统编程、云原生 | golang/go |
| **Rust** | 2010 | Mozilla (Graydon Hoare) | 系统编程、内存安全 | rust-lang/rust |
| **Dart** | 2011 | Google | Web+移动开发 | dart-lang/sdk |
| **Elixir** | 2011 | José Valim | 并发、容错 | elixir-lang/elixir |
| **Julia** | 2012 | MIT | 科学计算 | JuliaLang/julia |
| **TypeScript** | 2012 | Microsoft | JS 超集、类型安全 | microsoft/TypeScript |
| **Swift** | 2015 | Apple | iOS/macOS 开发 | apple/swift |
| **Kotlin** | 2016 (开源) | JetBrains | JVM、Android 开发 | JetBrains/kotlin |
| **Zig** | 2016 | Andrew Kelley | C 替代品、底层开发 | ziglang/zig |
| **Deno** | 2018 | Ryan Dahl | Node.js 继任者 | denoland/deno |
| **Carbon** | 2022 | Google | C++ 继任者（实验性） | carbon-language/carbon-lang |
| **Mojo** | 2023 | Modular | Python 超集、AI 专用 | modularml/mojo |

---

## 前端框架与工具链

### 前端框架进化史

```
2006: jQuery 诞生（2009迁入GitHub）
2010: Backbone.js / Knockout.js — MVC 模式引入前端
2010: AngularJS — Google 的第一代前端框架
2013: React — Facebook 的 UI 库革命
2014: Vue.js — 渐进式框架
2016: Angular 2+ — 完全重写
2016: Svelte — 编译时框架
2019: Svelte 3 — 无虚拟DOM革命
2020: SolidJS — 精细响应式
2022: Qwik — 可恢复性框架
```

### 前端框架详细列表

| 项目 | 诞生年 | Stars | 创造者 | 关键特性 |
|------|--------|-------|--------|---------|
| **jQuery** | 2006 | 59k+ | John Resig | DOM 操作简化，开创前端生态 |
| **Backbone.js** | 2010 | 28k+ | Jeremy Ashkenas | 最早的前端 MVC |
| **AngularJS** | 2010 | 59k+ | Google | 双向绑定、依赖注入 |
| **Ember.js** | 2011 | 22k+ | Yehuda Katz | 约定优于配置 |
| **Meteor** | 2012 | 44k+ | MDG | 全栈实时框架 |
| **React** | 2013 | 230k+ | Facebook | 虚拟 DOM、组件化、单向数据流 |
| **Vue.js** | 2014 | 210k+ | 尤雨溪 | 渐进式、模板+响应式 |
| **Angular** (2+) | 2016 | 96k+ | Google | TypeScript、完整企业方案 |
| **Svelte** | 2016 | 80k+ | Rich Harris | 编译时、无运行时框架 |
| **Preact** | 2015 | 37k+ | Jason Miller | 3kB 的 React 替代 |
| **SolidJS** | 2020 | 32k+ | Ryan Carniato | 精细响应式、无虚拟DOM |
| **Qwik** | 2022 | 21k+ | Builder.io | 可恢复性、极致首屏性能 |
| **htmx** | 2020 | 38k+ | Big Sky Software | HTML 属性驱动交互 |

### CSS 框架与 UI 库

| 项目 | 诞生年 | Stars | 定位 |
|------|--------|-------|------|
| **Bootstrap** | 2011 | 170k+ | 最流行的 CSS 框架 |
| **Foundation** | 2011 | 30k+ | 响应式前端框架 |
| **Semantic UI** | 2013 | 51k+ | 语义化 CSS 框架 |
| **Materialize** | 2014 | 39k+ | Material Design CSS |
| **Bulma** | 2016 | 49k+ | 现代 CSS 框架(无JS) |
| **Tailwind CSS** | 2017 | 83k+ | 原子化 CSS 革命 |
| **Ant Design** | 2015 | 92k+ | 蚂蚁金服企业级 UI |
| **Material-UI (MUI)** | 2014 | 94k+ | React Material Design |
| **Element UI/Plus** | 2016 | 54k+ | 饿了么 Vue UI 库 |
| **shadcn/ui** | 2023 | 72k+ | 可复制粘贴的组件 |
| **Chakra UI** | 2019 | 38k+ | React 无障碍 UI |
| **DaisyUI** | 2021 | 34k+ | Tailwind 组件库 |
| **Radix UI** | 2020 | 16k+ | 无样式可访问组件 |

### 前端构建工具进化

| 工具 | 诞生年 | Stars | 代次 | 说明 |
|------|--------|-------|------|------|
| **Grunt** | 2012 | 12k+ | 第一代 | 任务运行器 |
| **Gulp** | 2013 | 33k+ | 第一代 | 流式构建 |
| **Browserify** | 2011 | 15k+ | 第一代 | 浏览器端 require() |
| **Webpack** | 2014 | 65k+ | 第二代 | 模块打包器之王 |
| **Rollup** | 2015 | 25k+ | 第二代 | ES Module 打包、库打包首选 |
| **Parcel** | 2017 | 43k+ | 第二代 | 零配置打包 |
| **Snowpack** | 2019 | 20k+ | 第三代 | ESM 原生开发（已停维） |
| **Vite** | 2020 | 69k+ | 第三代 | 极速开发服务器、尤雨溪作品 |
| **esbuild** | 2020 | 38k+ | 第三代 | Go 写的超快打包器 |
| **SWC** | 2020 | 31k+ | 第三代 | Rust 写的 JS/TS 编译器 |
| **Turbopack** | 2022 | 26k+ | 第四代 | Vercel/Rust 写的增量打包 |
| **Rspack** | 2023 | 10k+ | 第四代 | 字节跳动/Rust 写的 Webpack 兼容 |
| **Bun** | 2022 | 74k+ | 全栈 | JS 运行时+打包+包管理一体化 |
| **Biome** | 2023 | 15k+ | 工具链 | Rust 写的 Lint+Format 一体化 |

### 前端状态管理

| 工具 | 诞生年 | 关联框架 | 说明 |
|------|--------|---------|------|
| **Flux** | 2014 | React | 单向数据流架构 |
| **Redux** | 2015 | React | 可预测状态容器 |
| **MobX** | 2015 | React | 响应式状态管理 |
| **Vuex** | 2015 | Vue | Vue 官方状态管理 |
| **Pinia** | 2019 | Vue | Vuex 5 / Vue3 官方状态管理 |
| **Zustand** | 2019 | React | 极简状态管理 |
| **Jotai** | 2020 | React | 原子化状态 |
| **Recoil** | 2020 | React | Facebook 实验性状态管理 |
| **XState** | 2018 | 通用 | 状态机驱动 |

### 元框架（Meta-Framework）

| 项目 | 诞生年 | Stars | 基于 | 说明 |
|------|--------|-------|------|------|
| **Next.js** | 2016 | 127k+ | React | SSR/SSG/ISR 全栈框架 |
| **Nuxt.js** | 2016 | 55k+ | Vue | Vue 的全栈框架 |
| **Gatsby** | 2015 | 55k+ | React | 静态站点生成（已式微） |
| **Remix** | 2021 | 30k+ | React | Web 标准优先的全栈框架 |
| **Astro** | 2021 | 47k+ | 多框架 | 内容优先、Island 架构 |
| **SvelteKit** | 2021 | 18k+ | Svelte | Svelte 官方全栈 |
| **SolidStart** | 2022 | 5k+ | Solid | Solid 的元框架 |

---

## 后端框架

### 后端框架进化总览

```
2004: Ruby on Rails 诞生（2008迁入GitHub）— 开创Web框架黄金时代
2005: Django (Python)
2009: Express.js (Node.js) — JS后端时代开启
2010: Flask (Python) — 微框架兴起
2013: Koa (Node.js)
2014: Spring Boot (Java) — 企业级简化
2016: Fastify (Node.js)
2018: Gin (Go) 流行爆发
2019: FastAPI (Python) — 现代异步Python
2021: tRPC — 端到端类型安全
```

### 各语言后端框架

#### Python

| 框架 | 诞生年 | Stars | 特点 |
|------|--------|-------|------|
| **Django** | 2005 | 80k+ | 全功能、电池全含、ORM |
| **Flask** | 2010 | 68k+ | 微框架、灵活 |
| **Tornado** | 2009 | 22k+ | 异步非阻塞 |
| **FastAPI** | 2019 | 78k+ | 高性能异步、自动文档 |
| **Sanic** | 2016 | 18k+ | 异步 HTTP |
| **Starlette** | 2018 | 10k+ | ASGI 微框架 |

#### JavaScript / TypeScript (Node.js)

| 框架 | 诞生年 | Stars | 特点 |
|------|--------|-------|------|
| **Express.js** | 2009 | 65k+ | 最老牌、最轻量 |
| **Koa** | 2013 | 35k+ | Express 作者新作、中间件 |
| **Hapi** | 2012 | 15k+ | 配置驱动 |
| **NestJS** | 2017 | 68k+ | 企业级、装饰器、DI |
| **Fastify** | 2016 | 32k+ | 高性能、插件体系 |
| **Adonis.js** | 2015 | 17k+ | Laravel 风格 |
| **tRPC** | 2021 | 35k+ | 端到端类型安全 RPC |
| **Hono** | 2022 | 20k+ | 超轻量、多运行时兼容 |
| **Elysia** | 2022 | 10k+ | Bun 原生、极高性能 |

#### Ruby

| 框架 | 诞生年 | Stars | 特点 |
|------|--------|-------|------|
| **Ruby on Rails** | 2004 | 56k+ | 开创 MVC Web 框架时代 |
| **Sinatra** | 2007 | 12k+ | 极简 DSL 微框架 |
| **Hanami** | 2014 | 6k+ | 现代、模块化 |

#### Go

| 框架 | 诞生年 | Stars | 特点 |
|------|--------|-------|------|
| **Gin** | 2014 | 79k+ | 最流行、高性能路由 |
| **Echo** | 2015 | 30k+ | 极简高性能 |
| **Fiber** | 2020 | 34k+ | Express 风格、极快 |
| **Chi** | 2016 | 18k+ | 轻量路由 |
| **Beego** | 2012 | 31k+ | 全功能（中国出品） |

#### Java / JVM

| 框架 | 诞生年 | Stars | 特点 |
|------|--------|-------|------|
| **Spring Framework** | 2003 | 56k+ | 企业级标准 |
| **Spring Boot** | 2014 | 75k+ | 简化 Spring 配置 |
| **Vert.x** | 2012 | 14k+ | 响应式、事件驱动 |
| **Quarkus** | 2019 | 14k+ | 云原生 Java、GraalVM |
| **Micronaut** | 2018 | 6k+ | 轻量级、AOT 编译 |

#### Rust

| 框架 | 诞生年 | Stars | 特点 |
|------|--------|-------|------|
| **Actix Web** | 2017 | 22k+ | 极高性能 |
| **Axum** | 2021 | 19k+ | Tokio 官方、模块化 |
| **Rocket** | 2016 | 24k+ | 开发体验优先 |
| **Warp** | 2018 | 10k+ | Filter 组合式 |

#### PHP

| 框架 | 诞生年 | Stars | 特点 |
|------|--------|-------|------|
| **Laravel** | 2011 | 79k+ | 最流行的 PHP 框架 |
| **Symfony** | 2005 | 30k+ | 企业级、组件化 |
| **Slim** | 2011 | 12k+ | 微框架 |

---

## 数据库与存储

### 数据库进化

```
传统关系型: MySQL (1995) → PostgreSQL 复兴 → CockroachDB/TiDB (NewSQL)
NoSQL 浪潮: MongoDB (2009) → Redis → Cassandra → 各种时序/图数据库
嵌入式: SQLite → DuckDB → LevelDB → RocksDB
云原生: PlanetScale → Supabase → Neon → Turso
向量数据库: 2022-2025 AI 时代爆发
```

### 关系型数据库

| 项目 | 开源年 | Stars | 说明 |
|------|--------|-------|------|
| **MySQL** | 1995 | 开源经典 | 最广泛使用的关系型数据库 |
| **PostgreSQL** | 1996 | 16k+ | 最先进的开源关系型数据库 |
| **MariaDB** | 2009 | 5k+ | MySQL 分支、社区驱动 |
| **SQLite** | 2000 | 7k+ | 嵌入式、单文件、无服务器 |
| **CockroachDB** | 2015 | 30k+ | 分布式 SQL、强一致性 |
| **TiDB** | 2015 | 37k+ | 分布式 NewSQL（PingCAP/中国） |
| **Vitess** | 2012 | 18k+ | MySQL 水平扩展中间件 |
| **DuckDB** | 2018 | 24k+ | 嵌入式分析型数据库（OLAP） |
| **Neon** | 2022 | 15k+ | Serverless PostgreSQL |

### NoSQL 数据库

| 项目 | 开源年 | Stars | 类型 | 说明 |
|------|--------|-------|------|------|
| **MongoDB** | 2009 | 26k+ | 文档 | JSON 文档存储 |
| **Redis** | 2009 | 67k+ | KV/缓存 | 内存数据结构存储 |
| **Cassandra** | 2008 | 9k+ | 宽列 | Facebook 开源、高可用 |
| **CouchDB** | 2008 | 6k+ | 文档 | HTTP API、离线优先 |
| **Neo4j** | 2010 | 13k+ | 图 | 图数据库标杆 |
| **RethinkDB** | 2012 | 27k+ | 文档 | 实时推送查询 |
| **ArangoDB** | 2012 | 14k+ | 多模型 | 文档+图+KV |
| **InfluxDB** | 2013 | 29k+ | 时序 | 时间序列数据库 |
| **RocksDB** | 2013 | 29k+ | KV引擎 | Facebook 高性能存储引擎 |
| **ScyllaDB** | 2015 | 14k+ | 宽列 | C++ 重写 Cassandra |
| **SurrealDB** | 2022 | 27k+ | 多模型 | 新一代多模型数据库 |
| **Valkey** | 2024 | 17k+ | KV/缓存 | Redis 开源分支(Linux Foundation) |

### 向量数据库（AI 时代）

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Milvus** | 2019 | 30k+ | 最早的开源向量数据库 |
| **Qdrant** | 2021 | 21k+ | Rust 写的向量搜索引擎 |
| **Weaviate** | 2019 | 11k+ | AI 原生向量数据库 |
| **Chroma** | 2022 | 15k+ | 轻量 AI 嵌入数据库 |
| **pgvector** | 2021 | 12k+ | PostgreSQL 向量扩展 |

### ORM 与数据库工具

| 项目 | 语言 | Stars | 说明 |
|------|------|-------|------|
| **Prisma** | TypeScript | 40k+ | 现代 ORM、类型安全 |
| **TypeORM** | TypeScript | 34k+ | 装饰器风格 ORM |
| **Sequelize** | JavaScript | 29k+ | 老牌 Node.js ORM |
| **Drizzle** | TypeScript | 25k+ | 轻量型安全 ORM |
| **SQLAlchemy** | Python | 9k+ | Python ORM 标准 |
| **GORM** | Go | 37k+ | Go 最流行 ORM |
| **Hibernate** | Java | 开源经典 | Java ORM 鼻祖 |

---

## DevOps 与 CI/CD

### DevOps 工具进化

```
2005: Puppet — 配置管理开山
2006: Chef — Ruby DSL 配置管理
2011: Ansible — 无Agent、YAML 
2011: Jenkins — CI 服务器标杆
2013: Terraform — 基础设施即代码
2014: GitLab CI — 内置 CI/CD
2016: Drone — 容器原生 CI
2018: Tekton — K8s 原生 CI/CD
2019: GitHub Actions — GitHub 内置
2020: Dagger — 可编程 CI/CD
```

### 配置管理与自动化

| 工具 | 诞生年 | Stars | 语言 | 说明 |
|------|--------|-------|------|------|
| **Puppet** | 2005 | 7k+ | Ruby | 配置管理先驱 |
| **Chef** | 2009 | 8k+ | Ruby | DSL 配置管理 |
| **Ansible** | 2012 | 63k+ | Python | 无 Agent、YAML、最流行 |
| **SaltStack** | 2011 | 14k+ | Python | 事件驱动自动化 |

### 基础设施即代码（IaC）

| 工具 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Terraform** | 2014 | 43k+ | HashiCorp、多云 IaC 标准 |
| **OpenTofu** | 2023 | 23k+ | Terraform 开源分支(Linux Foundation) |
| **Pulumi** | 2018 | 22k+ | 用真正编程语言写 IaC |
| **Crossplane** | 2018 | 9k+ | K8s 原生基础设施管理 |
| **CDK (AWS)** | 2018 | 12k+ | AWS 基础设施即代码 |

### CI/CD 平台

| 工具 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Jenkins** | 2011 | 23k+ | CI/CD 服务器鼻祖 |
| **GitLab CI** | 2014 | (内置) | GitLab 内置 CI/CD |
| **Travis CI** | 2011 | 8k+ | 最早的 SaaS CI（已式微） |
| **CircleCI** | 2011 | — | SaaS CI |
| **Drone** | 2014 | 32k+ | 容器原生 CI |
| **Concourse** | 2014 | 7k+ | 管道即代码 |
| **Woodpecker** | 2019 | 4k+ | Drone 社区分支 |
| **Tekton** | 2018 | 8k+ | K8s 原生 CI/CD 管道 |
| **GitHub Actions** | 2019 | (内置) | GitHub 内置工作流 |
| **Dagger** | 2022 | 11k+ | 可编程 CI/CD 引擎 |
| **Argo Workflows** | 2017 | 15k+ | K8s 原生工作流引擎 |

### GitOps

| 工具 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **ArgoCD** | 2018 | 18k+ | K8s GitOps 标杆 |
| **Flux** | 2016 | 6k+ | CNCF GitOps 工具 |

---

## 容器与云原生

### 容器化革命时间线

```
2008: LXC — Linux 容器前身
2013: Docker — 容器化革命开始
2014: Kubernetes — 容器编排标准
2015: CNCF 成立
2016: containerd — 容器运行时标准化
2017: Istio — Service Mesh
2019: K3s — 轻量 K8s
2020: Podman — 无守护进程容器
```

### 容器运行时与工具

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Docker** (Moby) | 2013 | 69k+ | 容器化革命的开创者 |
| **containerd** | 2016 | 17k+ | 工业标准容器运行时 |
| **Podman** | 2018 | 24k+ | 无守护进程、rootless 容器 |
| **CRI-O** | 2016 | 5k+ | K8s 专用轻量运行时 |
| **BuildKit** | 2017 | 8k+ | 下一代镜像构建引擎 |
| **Docker Compose** | 2013 | 34k+ | 多容器编排定义 |
| **Kaniko** | 2018 | 15k+ | 无 Docker 守护进程的镜像构建 |

### 容器编排

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Kubernetes** | 2014 | 110k+ | 容器编排事实标准 |
| **Docker Swarm** | 2014 | (内置) | Docker 原生编排（已式微） |
| **Apache Mesos** | 2009 | 5k+ | 分布式资源管理（已式微） |
| **Nomad** | 2015 | 15k+ | HashiCorp 简化编排 |
| **K3s** | 2019 | 28k+ | 轻量级 K8s（IoT/边缘） |
| **K0s** | 2020 | 8k+ | 零摩擦 K8s |
| **MicroK8s** | 2018 | 8k+ | Canonical 单节点 K8s |

### Service Mesh

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Istio** | 2017 | 36k+ | 最知名的服务网格 |
| **Linkerd** | 2016 | 11k+ | 最早的服务网格（轻量） |
| **Envoy** | 2016 | 25k+ | 高性能代理（Istio 数据面） |
| **Cilium** | 2016 | 20k+ | eBPF 网络+安全+可观测 |

### 云原生生态

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Helm** | 2015 | 27k+ | K8s 包管理器 |
| **Kustomize** | 2018 | 11k+ | K8s 配置定制化 |
| **Operator Framework** | 2018 | 9k+ | K8s 应用生命周期管理 |
| **KEDA** | 2019 | 8k+ | K8s 事件驱动自动伸缩 |
| **Dapr** | 2019 | 24k+ | 分布式应用运行时 |
| **KubeVirt** | 2017 | 6k+ | K8s 上运行虚拟机 |
| **Knative** | 2018 | 5k+ | K8s Serverless 平台 |
| **OpenFaaS** | 2016 | 25k+ | 容器化函数即服务 |

---

## AI / 机器学习 / 深度学习

### AI 开源进化史

```
2007: Scikit-learn — 传统 ML 标准库
2015: TensorFlow — Google 开启深度学习开源潮
2015: Keras — 高层 API 简化深度学习
2016: PyTorch — Facebook 动态图框架
2017: Transformer 论文 — 注意力机制革命
2018: BERT — NLP 预训练时代
2018: Hugging Face Transformers — NLP 民主化
2020: GPT-3 — 大语言模型时代（闭源）
2022: Stable Diffusion — AI 图像生成开源
2023: LLaMA — Meta 开源大模型
2023: ChatGPT 引爆 LLM 生态开源潮
2024: Llama 3、Mistral、开源模型百花齐放
2025: 开源 Agent 框架、多模态模型爆发
```

### 深度学习框架

| 项目 | 诞生年 | Stars | 创造者 | 说明 |
|------|--------|-------|--------|------|
| **Theano** | 2007 | 10k+ | 蒙特利尔大学 | 先驱（已停维） |
| **Caffe** | 2013 | 34k+ | Berkeley | CNN 框架先驱（已式微） |
| **TensorFlow** | 2015 | 185k+ | Google | 工业级深度学习框架 |
| **Keras** | 2015 | 62k+ | François Chollet | 高层 API（现为 TF 子项目） |
| **PyTorch** | 2016 | 84k+ | Meta/Facebook | 研究首选、动态图 |
| **MXNet** | 2015 | 21k+ | Apache/Amazon | 多语言支持（已式微） |
| **PaddlePaddle** | 2016 | 22k+ | 百度 | 中国最大深度学习平台 |
| **JAX** | 2018 | 30k+ | Google | 函数式+自动微分+XLA |
| **ONNX** | 2017 | 18k+ | MS+Meta | 模型互通格式 |
| **MLX** | 2023 | 17k+ | Apple | Apple Silicon 原生ML框架 |

### 大语言模型（LLM）

| 项目 | 发布年 | Stars | 说明 |
|------|--------|-------|------|
| **Hugging Face Transformers** | 2018 | 135k+ | NLP/LLM 模型库标准 |
| **LLaMA / Llama 2/3** | 2023 | 67k+ | Meta 开源大模型 |
| **Mistral** | 2023 | 很多 | 欧洲开源大模型 |
| **Ollama** | 2023 | 100k+ | 本地运行 LLM 最简方案 |
| **llama.cpp** | 2023 | 70k+ | C++ 本地 LLM 推理 |
| **vLLM** | 2023 | 35k+ | 高效 LLM 推理引擎 |
| **LocalAI** | 2023 | 25k+ | 本地 AI API 兼容层 |
| **LangChain** | 2022 | 95k+ | LLM 应用开发框架 |
| **LlamaIndex** | 2022 | 37k+ | LLM 数据连接框架 |
| **AutoGPT** | 2023 | 168k+ | AI Agent 先驱 |
| **CrewAI** | 2023 | 22k+ | 多 Agent 协作框架 |
| **Open WebUI** | 2023 | 50k+ | LLM Web 聊天界面 |
| **ChatGPT-Next-Web** | 2023 | 77k+ | ChatGPT Web 客户端(中国) |
| **Dify** | 2023 | 50k+ | LLM 应用开发平台(中国) |
| **FastGPT** | 2023 | 18k+ | 知识库 QA 平台(中国) |

### AI 图像生成

| 项目 | 发布年 | Stars | 说明 |
|------|--------|-------|------|
| **Stable Diffusion** | 2022 | 38k+ | 开源图像生成模型 |
| **AUTOMATIC1111 WebUI** | 2022 | 142k+ | SD 最流行的 Web 界面 |
| **ComfyUI** | 2023 | 60k+ | 节点式 SD 工作流 |
| **Midjourney** | 2022 | — | 闭源但生态影响大 |
| **DALL-E** | 2021 | — | OpenAI（闭源） |
| **Fooocus** | 2023 | 40k+ | 简化版 SD 界面 |

### 传统 ML 与数据科学

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Scikit-learn** | 2007 | 60k+ | Python ML 标准库 |
| **XGBoost** | 2014 | 26k+ | 梯度提升树（比赛神器） |
| **LightGBM** | 2016 | 17k+ | 微软轻量级 GBDT |
| **CatBoost** | 2017 | 8k+ | Yandex、处理类别特征 |
| **Pandas** | 2008 | 44k+ | Python 数据分析基础 |
| **NumPy** | 2006 | 28k+ | Python 数值计算基础 |
| **Jupyter** | 2014 | 16k+ | 交互式笔记本 |
| **Apache Spark** | 2010 | 40k+ | 大数据处理引擎 |
| **Ray** | 2017 | 34k+ | 分布式计算框架 |
| **MLflow** | 2018 | 19k+ | ML 实验追踪与部署 |
| **DVC** | 2017 | 14k+ | ML 数据版本控制 |
| **Weights & Biases** | 2017 | — | ML 实验追踪(SaaS) |
| **Polars** | 2021 | 30k+ | Rust 写的极快 DataFrame |

---

## 编辑器与 IDE

### 编辑器进化

```
1976: Emacs / 1991: Vim — 永恒的编辑器战争
2008: Sublime Text — 现代GUI编辑器
2014: Atom — GitHub 出品、Electron 开创者
2015: VS Code — 微软出品、统治编辑器市场
2018: Xi Editor — Google 实验性（已停维）
2021: Lapce — Rust 写的高性能编辑器
2022: Helix — 终端 Vim 替代
2023: Zed — Rust 写的 GPU 加速编辑器
```

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Vim** | 1991 | 37k+ | 终端编辑器之王 |
| **Neovim** | 2014 | 83k+ | Vim 现代化重构 |
| **Emacs** | 1976 | 4k+ | 可扩展编辑器/操作系统 |
| **Atom** | 2014 | 60k+ | GitHub 出品（2022 停维） |
| **VS Code** | 2015 | 165k+ | 当今最流行的编辑器 |
| **Sublime Text** | 2008 | — | 闭源但经典 |
| **Helix** | 2021 | 34k+ | 终端编辑器、Kakoune 启发 |
| **Zed** | 2023 | 50k+ | GPU 加速协作编辑器 |
| **Lapce** | 2021 | 34k+ | Rust 写的高性能编辑器 |

### IDE

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Eclipse** | 2001 | 开源经典 | Java IDE 元老 |
| **IntelliJ IDEA CE** | 2009 | 17k+ | JetBrains 社区版 |
| **Android Studio** | 2013 | — | 基于 IntelliJ、Android 官方 |
| **Theia** | 2017 | 20k+ | 云端 IDE 框架（Eclipse 出品） |
| **code-server** | 2018 | 69k+ | VS Code 的 Web 版 |
| **Gitpod** | 2018 | 13k+ | 云端开发环境 |
| **GitHub Codespaces** | 2020 | — | GitHub 云端 IDE |

---

## 操作系统与内核

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Linux Kernel** | 1991/2011(GitHub) | 170k+ | 开源操作系统内核 |
| **FreeBSD** | 1993 | 8k+ | Unix 衍生操作系统 |
| **Android (AOSP)** | 2008 | — | 移动操作系统（镜像在GitHub） |
| **ChromeOS (Chromium OS)** | 2009 | — | Google 轻量 OS |
| **ReactOS** | 1998 | 14k+ | Windows 兼容开源 OS |
| **Redox** | 2015 | 15k+ | Rust 写的微内核 OS |
| **SerenityOS** | 2018 | 30k+ | 从零构建的类 Unix OS |
| **Fuchsia** | 2016 | 8k+ | Google 微内核 OS |

### Linux 发行版

| 发行版 | 诞生年 | 定位 |
|--------|--------|------|
| **Debian** | 1993 | 社区驱动、稳定 |
| **Ubuntu** | 2004 | 最流行的桌面/服务器 Linux |
| **Fedora** | 2003 | 新技术试验场 |
| **Arch Linux** | 2002 | 滚动更新、极客 |
| **Alpine Linux** | 2005 | 轻量（Docker 基础镜像首选） |
| **NixOS** | 2003 | 声明式配置、可重现 |

---

## 移动开发

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **React Native** | 2015 | 119k+ | Facebook、JS 跨平台移动 |
| **Flutter** | 2017 | 165k+ | Google、Dart、高性能跨平台 |
| **Ionic** | 2013 | 51k+ | Web 技术跨平台 |
| **Xamarin** | 2011 | — | C# 跨平台（现为 .NET MAUI） |
| **Expo** | 2015 | 34k+ | React Native 开发平台 |
| **Capacitor** | 2018 | 12k+ | Web 应用转原生 |
| **Kotlin Multiplatform** | 2020 | — | JetBrains 跨平台方案 |

---

## 网络与通信

### HTTP 客户端与网络库

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **curl** | 1996 | 36k+ | 命令行 HTTP 工具之王 |
| **requests** | 2011 | 52k+ | Python HTTP 库 |
| **axios** | 2014 | 106k+ | JS HTTP 客户端 |
| **httpx** | 2019 | 13k+ | Python 现代异步 HTTP |
| **got** | 2014 | 14k+ | Node.js HTTP 请求 |

### RPC 与 API 工具

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **gRPC** | 2015 | 42k+ | Google 高性能 RPC |
| **GraphQL** | 2015 | 14k+ | Facebook 查询语言 |
| **Apollo GraphQL** | 2016 | 19k+ | GraphQL 客户端/服务端 |
| **Swagger/OpenAPI** | 2011 | 开源标准 | REST API 规范 |
| **Postman** | 2014 | — | API 测试工具（闭源） |
| **Insomnia** | 2016 | 34k+ | API 客户端 |
| **Hoppscotch** | 2019 | 66k+ | 开源 API 测试工具 |

### WebSocket / 实时通信

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Socket.io** | 2010 | 61k+ | 实时双向通信 |
| **WebRTC** | 2011 | 开源标准 | P2P 实时通信 |
| **SignalR** | 2012 | 9k+ | .NET 实时通信 |

---

## 安全工具

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Metasploit** | 2003 | 34k+ | 渗透测试框架 |
| **Nmap** | 1997 | 10k+ | 网络扫描工具 |
| **Wireshark** | 1998 | 7k+ | 网络协议分析 |
| **OWASP ZAP** | 2010 | 13k+ | Web 应用安全扫描 |
| **Vault** | 2015 | 31k+ | HashiCorp 密钥管理 |
| **Trivy** | 2019 | 24k+ | 容器/IaC 漏洞扫描 |
| **Snyk** | 2015 | — | 依赖漏洞扫描（SaaS） |
| **ClamAV** | 2001 | 4k+ | 开源杀毒引擎 |
| **Falco** | 2016 | 7k+ | 运行时安全检测 |
| **WireGuard** | 2018 | 内核集成 | 下一代 VPN 协议 |
| **OpenZeppelin** | 2016 | 25k+ | 智能合约安全库 |

---

## 包管理与构建工具

### 语言包管理器

| 工具 | 语言 | 诞生年 | 说明 |
|------|------|--------|------|
| **npm** | JavaScript | 2010 | JS 包管理标准 |
| **Yarn** | JavaScript | 2016 | Facebook 出品、快速可靠 |
| **pnpm** | JavaScript | 2017 | 高效磁盘利用 |
| **pip** | Python | 2008 | Python 包管理 |
| **Poetry** | Python | 2018 | 现代 Python 包管理 |
| **uv** | Python | 2024 | Rust 写的极快 Python 包管理 |
| **Cargo** | Rust | 2014 | Rust 官方包管理（最佳体验） |
| **Go Modules** | Go | 2018 | Go 官方依赖管理 |
| **Maven** | Java | 2002 | Java 构建+依赖标准 |
| **Gradle** | JVM | 2008 | 灵活的 JVM 构建工具 |
| **Homebrew** | macOS | 2009 | macOS 包管理器(🍺) |
| **Chocolatey** | Windows | 2011 | Windows 包管理 |
| **Nix** | 通用 | 2003 | 可重现的包管理 |

### 版本管理

| 工具 | 用途 | Stars | 说明 |
|------|------|-------|------|
| **nvm** | Node.js | 80k+ | Node 版本管理 |
| **pyenv** | Python | 39k+ | Python 版本管理 |
| **rbenv** | Ruby | 16k+ | Ruby 版本管理 |
| **asdf** | 多语言 | 22k+ | 统一版本管理 |
| **mise** | 多语言 | 10k+ | asdf 的 Rust 重写 |
| **fnm** | Node.js | 18k+ | 快速 Node 版本管理(Rust) |

---

## 测试工具

| 项目 | 诞生年 | 语言/框架 | Stars | 说明 |
|------|--------|----------|-------|------|
| **Selenium** | 2004 | 多语言 | 31k+ | 浏览器自动化鼻祖 |
| **Jest** | 2014 | JavaScript | 44k+ | Facebook JS 测试框架 |
| **Mocha** | 2011 | JavaScript | 23k+ | 老牌 JS 测试 |
| **Cypress** | 2017 | JavaScript | 47k+ | 现代 E2E 测试 |
| **Playwright** | 2020 | 多语言 | 67k+ | 微软跨浏览器测试 |
| **Puppeteer** | 2017 | JavaScript | 89k+ | Chrome 自动化 |
| **Vitest** | 2021 | JavaScript | 13k+ | Vite 生态单元测试 |
| **pytest** | 2004 | Python | 12k+ | Python 测试标准 |
| **JUnit** | 1997 | Java | — | Java 单元测试标准 |
| **k6** | 2017 | Go | 26k+ | 现代负载测试 |
| **Locust** | 2011 | Python | 25k+ | 分布式负载测试 |
| **Storybook** | 2016 | JavaScript | 85k+ | UI 组件开发环境 |

---

## 监控与可观测性

### 监控进化

```
2008: Nagios/Zabbix 时代 — 传统基础设施监控
2012: Prometheus 诞生 — 拉取式指标收集
2015: Grafana 流行 — 可视化仪表板
2016: Jaeger — 分布式链路追踪
2019: OpenTelemetry — 统一可观测性标准
```

| 项目 | 诞生年 | Stars | 类型 | 说明 |
|------|--------|-------|------|------|
| **Nagios** | 1999 | 2k+ | 监控 | 传统监控鼻祖 |
| **Zabbix** | 2001 | 4k+ | 监控 | 企业级监控 |
| **Prometheus** | 2012 | 56k+ | 指标 | 云原生监控标准 |
| **Grafana** | 2014 | 65k+ | 可视化 | 监控仪表板标准 |
| **Jaeger** | 2016 | 20k+ | 追踪 | 分布式链路追踪 |
| **Zipkin** | 2012 | 17k+ | 追踪 | Twitter 链路追踪 |
| **ELK Stack** | 2010 | 很多 | 日志 | Elasticsearch+Logstash+Kibana |
| **Loki** | 2018 | 24k+ | 日志 | Grafana 出品、轻量日志 |
| **OpenTelemetry** | 2019 | 19k+ | 统一 | 可观测性统一标准 |
| **Sentry** | 2012 | 39k+ | 错误 | 应用错误追踪 |
| **Uptime Kuma** | 2021 | 60k+ | 监控 | 简洁的在线状态监控 |
| **Netdata** | 2013 | 72k+ | 监控 | 实时性能监控 |

---

## 消息队列与流处理

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **RabbitMQ** | 2007 | 12k+ | AMQP 标准消息代理 |
| **Apache Kafka** | 2011 | 28k+ | 分布式事件流平台 |
| **ZeroMQ** | 2007 | 10k+ | 轻量消息库 |
| **NATS** | 2012 | 16k+ | 云原生消息系统 |
| **Pulsar** | 2016 | 14k+ | 分布式消息+流 |
| **Redis Streams** | 2018 | (Redis内) | 轻量级流处理 |
| **Apache Flink** | 2014 | 24k+ | 实时流处理引擎 |
| **RocketMQ** | 2016 | 21k+ | 阿里巴巴消息队列 |

---

## 搜索引擎

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Elasticsearch** | 2010 | 70k+ | 分布式搜索引擎标杆 |
| **Apache Solr** | 2004 | 开源经典 | 早期搜索引擎标准 |
| **Meilisearch** | 2018 | 47k+ | 轻量即时搜索(Rust) |
| **Typesense** | 2017 | 21k+ | 简单高效的搜索 |
| **Zinc** | 2021 | 17k+ | 轻量 ES 替代(Go) |
| **OpenSearch** | 2021 | 10k+ | AWS ES 分支(Apache 2.0) |

---

## Web 服务器与代理

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Apache HTTP Server** | 1995 | 开源经典 | Web 服务器鼻祖 |
| **Nginx** | 2004 | 25k+ | 高性能反向代理/Web 服务器 |
| **HAProxy** | 2001 | 5k+ | 高性能负载均衡器 |
| **Caddy** | 2015 | 59k+ | 自动 HTTPS、Go 语言 |
| **Traefik** | 2015 | 51k+ | 云原生反向代理 |
| **OpenResty** | 2011 | 12k+ | Nginx + Lua |
| **Tengine** | 2011 | 13k+ | 阿里巴巴 Nginx 分支 |

---

## 文档与知识管理

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **GitBook** | 2014 | 27k+ | Git + Markdown 文档（已SaaS化） |
| **MkDocs** | 2014 | 20k+ | Python 静态文档 |
| **Docusaurus** | 2017 | 57k+ | Meta 出品静态文档站 |
| **VuePress** | 2018 | 22k+ | Vue 静态文档 |
| **VitePress** | 2020 | 13k+ | VuePress 下一代 |
| **Sphinx** | 2008 | 6k+ | Python 文档标准 |
| **Notion** | 2016 | — | 闭源但影响生态 |
| **Outline** | 2017 | 28k+ | 开源 Notion 替代 |
| **BookStack** | 2015 | 15k+ | Wiki 风格文档 |
| **Logseq** | 2020 | 33k+ | 开源双链笔记 |
| **Obsidian** | 2020 | — | 闭源本地知识库(插件开源) |

---

## 设计与多媒体

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Blender** | 1994 | 14k+ | 3D 建模/动画/渲染 |
| **GIMP** | 1996 | 开源经典 | 图像编辑（开源 Photoshop） |
| **Inkscape** | 2003 | 开源经典 | 矢量图编辑 |
| **FFmpeg** | 2000 | 46k+ | 音视频处理瑞士军刀 |
| **OBS Studio** | 2012 | 60k+ | 直播/录屏软件 |
| **Kdenlive** | 2002 | 3k+ | 视频编辑 |
| **Audacity** | 2000 | 12k+ | 音频编辑 |
| **Figma** | 2016 | — | 闭源设计工具（影响力巨大） |
| **Penpot** | 2020 | 33k+ | 开源设计工具（Figma替代） |
| **Excalidraw** | 2020 | 85k+ | 手绘风格白板 |
| **D3.js** | 2011 | 109k+ | 数据可视化标准库 |
| **Chart.js** | 2013 | 65k+ | 简单图表库 |
| **ECharts** | 2013 | 61k+ | 百度出品可视化库 |
| **Three.js** | 2010 | 102k+ | Web 3D 图形 |
| **PixiJS** | 2013 | 44k+ | 2D WebGL 引擎 |

---

## 区块链与 Web3

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Bitcoin** | 2009 | 79k+ | 比特币核心 |
| **Ethereum (go-ethereum)** | 2013 | 48k+ | 以太坊 Go 客户端 |
| **Solidity** | 2014 | 23k+ | 智能合约语言 |
| **Truffle** | 2015 | 14k+ | 以太坊开发框架（已停维） |
| **Hardhat** | 2019 | 7k+ | 以太坊开发环境 |
| **Foundry** | 2021 | 8k+ | Rust Solidity 工具链 |
| **Polkadot** | 2017 | 7k+ | 跨链协议 |
| **Solana** | 2020 | 13k+ | 高性能公链 |
| **IPFS** | 2015 | 23k+ | 分布式文件系统 |
| **Web3.js** | 2015 | 19k+ | 以太坊 JS SDK |
| **ethers.js** | 2016 | 8k+ | 轻量以太坊库 |
| **viem** | 2023 | 3k+ | 现代以太坊交互库 |

---

## 命令行工具

### 终端增强

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Oh My Zsh** | 2009 | 175k+ | Zsh 配置框架 |
| **tmux** | 2007 | 35k+ | 终端复用器 |
| **fish** | 2012 | 26k+ | 友好的交互式 Shell |
| **starship** | 2019 | 46k+ | Rust 跨 Shell 提示符 |
| **zoxide** | 2020 | 23k+ | 智能 cd 命令(Rust) |
| **Warp** | 2022 | 21k+ | 现代终端模拟器 |
| **Alacritty** | 2017 | 56k+ | GPU 加速终端(Rust) |
| **WezTerm** | 2018 | 18k+ | Rust GPU 终端 |
| **kitty** | 2017 | 25k+ | 快速终端模拟器 |

### 现代 CLI 工具（Rust 重写时代）

| 新工具 | 替代 | Stars | 说明 |
|--------|------|-------|------|
| **bat** | cat | 50k+ | 带语法高亮的 cat |
| **exa/eza** | ls | 24k+ | 现代文件列表 |
| **fd** | find | 34k+ | 现代文件查找 |
| **ripgrep (rg)** | grep | 49k+ | 极快的文本搜索 |
| **fzf** | — | 66k+ | 模糊搜索神器 |
| **tldr** | man | 51k+ | 简化版命令手册 |
| **dust** | du | 9k+ | 磁盘使用可视化 |
| **bottom (btm)** | top | 10k+ | 系统监控(Rust) |
| **procs** | ps | 5k+ | 现代进程查看 |
| **sd** | sed | 6k+ | 直觉化文本替换 |
| **tokei** | cloc | 11k+ | 代码统计(Rust) |
| **hyperfine** | time | 22k+ | 命令行基准测试 |
| **jq** | — | 31k+ | JSON 命令行处理 |

---

## 其他经典项目

### 自托管服务（Self-hosted）

| 项目 | Stars | 说明 |
|------|-------|------|
| **Nextcloud** | 27k+ | 开源 Google Drive/Dropbox |
| **Bitwarden** | 16k+ | 开源密码管理器 |
| **Home Assistant** | 75k+ | 智能家居自动化 |
| **Pi-hole** | 49k+ | DNS 广告拦截 |
| **Immich** | 50k+ | 开源 Google Photos |
| **Jellyfin** | 36k+ | 开源媒体服务器 |
| **Gitea** | 45k+ | 轻量 Git 服务 |
| **GitLab CE** | 24k+ | 完整 DevOps 平台 |
| **Mattermost** | 30k+ | 开源 Slack 替代 |
| **Rocket.Chat** | 40k+ | 开源团队聊天 |
| **Plausible** | 20k+ | 隐私优先的网站分析 |
| **Umami** | 23k+ | 简洁的网站分析 |
| **Authentik** | 13k+ | 身份认证平台 |
| **n8n** | 49k+ | 工作流自动化（开源 Zapier） |

### CMS 与建站

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **WordPress** | 2003 | 19k+ | 全球 40% 网站的 CMS |
| **Ghost** | 2013 | 47k+ | 现代发布平台 |
| **Strapi** | 2015 | 64k+ | Headless CMS 标杆 |
| **Directus** | 2016 | 28k+ | 数据库优先 Headless CMS |
| **Payload** | 2021 | 28k+ | TypeScript Headless CMS |
| **Hugo** | 2013 | 76k+ | Go 写的静态站生成器（最快） |
| **Jekyll** | 2008 | 49k+ | Ruby 静态站（GitHub Pages 默认） |
| **Hexo** | 2012 | 39k+ | Node.js 博客框架 |
| **11ty** | 2018 | 17k+ | 简洁的静态站生成器 |

### 游戏引擎

| 项目 | 诞生年 | Stars | 说明 |
|------|--------|-------|------|
| **Godot** | 2014 | 90k+ | 开源游戏引擎之王 |
| **Bevy** | 2020 | 36k+ | Rust ECS 游戏引擎 |
| **Raylib** | 2013 | 23k+ | 简单的游戏编程库 |
| **Phaser** | 2013 | 37k+ | HTML5 游戏框架 |
| **libGDX** | 2010 | 23k+ | Java 游戏框架 |

---

## 总结：开源进化时代划分

| 时代 | 年份 | 特征 | 代表项目 |
|------|------|------|----------|
| **Web 2.0 时代** | 2008-2012 | Ruby/JS 主导，MVC 框架 | Rails, jQuery, Node.js, Bootstrap |
| **云计算时代** | 2012-2015 | 容器化、微服务 | Docker, Kubernetes, Go, React |
| **DevOps 时代** | 2015-2018 | 自动化、GitOps | Terraform, Ansible, GitLab CI |
| **云原生时代** | 2018-2022 | K8s 生态、Serverless、Rust重写 | Istio, Vite, Deno, Tauri |
| **AI 原生时代** | 2022-2025 | LLM、Agent、AI编程 | GPT, LLaMA, Copilot, LangChain |

---

*最后更新：2025-07-25*  
*注：Stars 数据为近似值，实际数字持续变化。*
