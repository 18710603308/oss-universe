# 🌌 开源宇宙 OSS Universe

> 一个为期 3 年的开源产品深度学习系统 —— 知识库 · 学习系统 · 作品集，三位一体。
> 以「建站」为方法，以「学习」为目的：通过构建这个网站的过程本身，完成对开源生态的深度学习。

[![Deploy to Pages](https://github.com/your-name/oss-universe/actions/workflows/deploy.yml/badge.svg)](../../actions)

---

## 📖 这是什么

本仓库包含两部分：

1. **规划与知识文档**（仓库根目录的 Markdown）
   - [开源产品学习网站规划大纲](./开源产品学习网站规划大纲.md)
   - [GitHub 经典项目与开源工具进化史](./GitHub经典项目与开源工具进化史.md)
   - [全球开源平台与基金会全景盘点](./全球开源平台与基金会全景盘点.md)
   - [开源学习路线](./README.md) 及 `01~05` 分阶段文档

2. **网站源码**（`site/` 目录）—— 用 Astro 构建的「开源宇宙」网站，把上述知识变成可交互、可追踪的学习系统。

---

## 🧭 网站功能

| 模块 | 路径 | 说明 |
|------|------|------|
| 🏠 仪表盘 | `/` | 学习进度、深度分布、最近学习 |
| 🗂️ 项目库 | `/projects` | 结构化项目卡片，支持领域筛选 |
| 🏛️ 基金会百科 | `/foundations` | Apache/CNCF/Linux 基金会等 |
| 🗺️ 生态图谱 | `/graph` | ECharts 力导向关系图（数据自动生成） |
| 🛤️ 学习路线 | `/roadmap` | 3 年分阶段计划 |
| 📜 编年史 | `/timeline` | 开源技术里程碑时间轴 |
| 🔬 深度剖析 | `/deepdives` | 顶级项目的架构与源码长文 |

---

## 🚀 本地开发

```bash
cd site
npm install       # 安装依赖
npm run dev       # 启动开发服务器 http://localhost:4321
npm run build     # 构建到 site/dist
npm run preview   # 本地预览构建产物
```

> 环境要求：Node.js 18+（推荐 20+）

---

## ✍️ 如何添加内容

网站是**内容驱动**的（Astro Content Collections），新增内容 = 新增一个 Markdown 文件，页面与统计自动更新。

### 新增一个项目卡片

在 `site/src/content/projects/` 下创建 `xxx.md`：

```markdown
---
name: 项目名
tagline: 一句话定位
category: 领域分类
foundation: 所属基金会（可选）
language: 主要语言（可选）
born: 诞生年份（可选）
stars: Star 数（可选）
depth: seed | sprout | tree | peak   # 学习深度
repo: 仓库地址（可选）
website: 官网（可选）
tags: [标签1, 标签2]
updated: 2026-07-25
---

## 一句话定位
## 诞生背景
## 核心架构
## 关键设计决策
## 生态位置
## 快速上手
## 我的评价   ← 强制填写，写不出来说明还没真正学会
```

### 新增基金会 / 深度剖析 / 学习路线

分别在 `site/src/content/foundations|deepdives|roadmap/` 下新增 Markdown，字段定义见 [`site/src/content.config.ts`](./site/src/content.config.ts)。

---

## 🌐 部署到 GitHub Pages

本仓库已配置自动部署工作流 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)。

### 步骤

1. 在 GitHub 创建仓库并推送本项目
2. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**
3. 修改 [`site/astro.config.mjs`](./site/astro.config.mjs) 中的 `site` 为你的地址
4. 推送到 `main` 分支即自动构建部署（也可在 Actions 页面手动触发）

### 关于 base 路径

- **部署为用户/组织主页**（仓库名为 `<用户名>.github.io`）：无需额外配置，`base` 默认 `/`
- **部署为项目页**（其他仓库名）：在仓库 **Settings → Secrets and variables → Actions → Variables** 新增变量 `DEPLOY_BASE`，值为 `"/<仓库名>/"`

---

## 🛠️ 技术栈

- **框架**：[Astro 5](https://astro.build)（内容优先、静态优先）
- **样式**：[Tailwind CSS 4](https://tailwindcss.com)
- **可视化**：[Apache ECharts](https://echarts.apache.org)
- **内容**：Markdown + Content Collections（Zod 强类型校验）
- **部署**：GitHub Actions + GitHub Pages

> 技术栈本身也是学习对象 —— 随学习进度，网站架构会从静态站演进到动态、再到云原生（详见规划大纲的"阶段 A/B/C"）。

---

## 📅 3 年目标

| 指标 | 目标 |
|------|------|
| 项目卡片 | 500+ |
| 深度剖析 | 36+（每月 1 篇） |
| 基金会百科 | 12 |
| 生态图谱 | 12 张 |
| 合并 PR | 20+ |

---

*以建促学，公开学习。Learning in Public + Building to Learn.*
