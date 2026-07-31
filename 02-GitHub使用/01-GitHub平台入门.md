# GitHub 平台入门

> 来源：[GitHub Docs - About GitHub and Git](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git)

---

## 什么是 GitHub

GitHub 是全球最大的代码托管平台，支持软件开发的完整生命周期。它基于 Git 构建，在版本控制之上叠加了丰富的协作工具。

### 软件开发全生命周期支持

| 阶段 | GitHub 提供的能力 |
|------|------------------|
| **计划** | Issues、Projects、Milestones 追踪工作 |
| **创建** | 代码托管、分支开发、变更时间线 |
| **审查** | Pull Requests、Code Review、Discussion |
| **测试** | GitHub Actions 自动化 CI/CD |
| **部署** | 自动部署工作流、Release 管理 |
| **运维** | 依赖管理、安全漏洞扫描（Dependabot） |

---

## 核心功能详解

### 1. 仓库（Repository）

仓库是 GitHub 上项目的容器：
- **Public（公开）**：任何人可见，适合开源项目
- **Private（私有）**：仅指定人员可见，适合商业项目

创建仓库时建议添加：
- `README.md` — 项目介绍
- `.gitignore` — 指定不需要追踪的文件
- `LICENSE` — 开源协议

### 2. Issues（议题）

Issue 用于追踪：
- Bug 报告
- 功能请求
- 讨论和提问

**最佳实践**：
- 使用模板（Issue Template）规范提交格式
- 使用 Labels 分类（如 `bug`、`enhancement`、`good first issue`）
- 使用 Milestones 关联到版本计划

### 3. Pull Requests（拉取请求）

PR 是 GitHub 协作的核心机制：
- 提议将一个分支的修改合并到另一个分支
- 支持代码审查（Review）和讨论
- 可以关联 Issue（如 "Closes #42"）
- 支持 Draft PR（草稿，表示仍在进行中）

### 4. GitHub Actions

GitHub 内置的 CI/CD 平台：
- 自动运行测试
- 自动构建和部署
- 自动发布 Release
- 由 `.github/workflows/` 目录下的 YAML 文件定义

### 5. Projects（项目看板）

类似 Trello/Jira 的项目管理工具：
- 支持看板视图和表格视图
- 可以关联 Issues 和 PRs
- 适合追踪迭代进度

### 6. Discussions（讨论）

用于非结构化的社区交流：
- 问答
- 想法分享
- 公告

### 7. GitHub Pages

免费的静态网站托管：
- 从仓库直接发布网站
- 支持自定义域名
- 常用于项目文档和个人博客

---

## 账号设置建议

### 个人资料

- 添加清晰的头像
- 填写 Bio（简介）
- 添加个人网站链接
- 创建一个同名仓库（如 `username/username`）作为个人主页 README

### SSH 密钥配置

```bash
# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "your@email.com"

# 查看公钥
cat ~/.ssh/id_ed25519.pub

# 测试连接
ssh -T git@github.com
```

将公钥添加到 GitHub → Settings → SSH and GPG keys

### 双因素认证（2FA）

强烈建议开启：Settings → Password and authentication → Two-factor authentication

---

## 常用 GitHub 功能快捷键

| 快捷键 | 功能 |
|--------|------|
| `.` | 在网页上打开 VS Code 编辑器（github.dev） |
| `t` | 在仓库中搜索文件 |
| `l` | 跳转到指定行 |
| `w` | 切换分支 |
| `s` | 聚焦到搜索框 |
| `g` + `n` | 跳转到通知页 |

---

## GitHub 上的重要文件

| 文件 | 作用 |
|------|------|
| `README.md` | 项目说明书，仓库首页展示 |
| `LICENSE` | 开源协议声明 |
| `CONTRIBUTING.md` | 贡献指南 |
| `CODE_OF_CONDUCT.md` | 行为准则 |
| `.gitignore` | 告诉 Git 忽略哪些文件 |
| `CHANGELOG.md` | 版本变更记录 |
| `.github/ISSUE_TEMPLATE/` | Issue 模板 |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR 模板 |
| `.github/workflows/` | GitHub Actions 工作流 |

---

## 谁在使用 GitHub

- 学生和个人开发者
- 开源社区（Linux、React、VS Code 等）
- 企业团队（微软、Google、Meta 等）
- 数据科学家和研究人员
- 技术文档作者

---

## 下一步

了解了 GitHub 平台后，请继续学习 [GitHub Flow 工作流](./02-GitHub-Flow工作流.md)，掌握标准的协作开发流程。
