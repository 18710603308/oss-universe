# GitHub 开源学习路线

> 一份系统性的 GitHub 开源学习路线图，从零基础到成为活跃的开源贡献者。  
> 所有资料已离线保存，避免链接失效。

---

## 学习路线总览

```
阶段一：Git 基础        →  掌握版本控制核心概念和命令
    ↓
阶段二：GitHub 使用     →  熟悉平台功能与协作工作流
    ↓
阶段三：开源贡献流程    →  学会 Fork/PR 工作流，提交你的第一个贡献
    ↓
阶段四：开源协议与社区  →  理解许可证、社区文化、维护者最佳实践
    ↓
阶段五：持续成长        →  推荐资源、进阶工具、社区参与
```

---

## 目录结构

```
开源学习路线/
├── README.md                          ← 你正在阅读的总路线图
├── 01-Git基础/
│   ├── 01-Git入门与核心概念.md         ← 版本控制、仓库、分支、提交
│   └── 02-Git常用命令速查.md           ← 日常开发命令速查表
├── 02-GitHub使用/
│   ├── 01-GitHub平台入门.md            ← 平台功能、账号设置、仓库管理
│   └── 02-GitHub-Flow工作流.md         ← 分支-PR-合并的标准协作流程
├── 03-开源贡献流程/
│   ├── 01-如何贡献开源项目.md          ← 完整贡献指南（含非代码贡献）
│   ├── 02-Fork与PR工作流实战.md        ← Fork、Clone、Branch、PR 全流程
│   └── 03-寻找适合的开源项目.md        ← 发现并评估项目的方法
├── 04-开源协议与社区/
│   ├── 01-开源协议详解.md              ← MIT/Apache/GPL 等协议对比
│   ├── 02-启动自己的开源项目.md        ← 从零创建开源项目的完整指南
│   └── 03-维护者最佳实践.md            ← 社区管理、自动化、可持续维护
└── 05-推荐资源与工具/
    └── 01-推荐学习资源与工具.md        ← 精选仓库、工具、社区、在线课程
```

---

## 阶段一：Git 基础（建议 1-2 周）

### 学习目标
- 理解版本控制系统（VCS）的核心思想
- 掌握 Git 的基本概念：仓库、提交、分支、合并
- 能独立完成日常代码管理操作

### 学习资料
| 文档 | 说明 |
|------|------|
| [01-Git入门与核心概念](./01-Git基础/01-Git入门与核心概念.md) | 版本控制原理、Git 架构、核心概念详解 |
| [02-Git常用命令速查](./01-Git基础/02-Git常用命令速查.md) | 按场景分类的命令参考，随用随查 |

### 实践建议
1. 在本地创建一个练习仓库，尝试 init、add、commit、branch、merge
2. 故意制造冲突并练习解决
3. 尝试使用 `git log --graph` 可视化提交历史

---

## 阶段二：GitHub 使用（建议 1-2 周）

### 学习目标
- 熟悉 GitHub 平台核心功能（Issues、PR、Actions、Projects）
- 掌握 GitHub Flow 标准工作流
- 能将本地仓库推送到 GitHub 并管理远程分支

### 学习资料
| 文档 | 说明 |
|------|------|
| [01-GitHub平台入门](./02-GitHub使用/01-GitHub平台入门.md) | 平台功能全景、账号配置、仓库管理 |
| [02-GitHub-Flow工作流](./02-GitHub使用/02-GitHub-Flow工作流.md) | 创建分支→提交→PR→Review→合并的完整流程 |

### 实践建议
1. 创建一个 GitHub 账号并完善个人资料
2. 创建第一个公开仓库，添加 README 和 LICENSE
3. 尝试完整的 GitHub Flow：创建分支、提交、发起 PR、自我 Review、合并

---

## 阶段三：开源贡献流程（建议 2-3 周）

### 学习目标
- 理解开源项目的组织结构和角色分工
- 掌握 Fork & Pull Request 工作流
- 能发现适合新手的 Issue 并提交第一个贡献

### 学习资料
| 文档 | 说明 |
|------|------|
| [01-如何贡献开源项目](./03-开源贡献流程/01-如何贡献开源项目.md) | 贡献类型、沟通技巧、提交流程全指南 |
| [02-Fork与PR工作流实战](./03-开源贡献流程/02-Fork与PR工作流实战.md) | 从 Fork 到 PR 被合并的完整操作步骤 |
| [03-寻找适合的开源项目](./03-开源贡献流程/03-寻找适合的开源项目.md) | 发现项目的渠道与评估项目的清单 |

### 实践建议
1. 在 [First Contributions](https://github.com/firstcontributions/first-contributions) 仓库完成你的第一个 PR
2. 使用 `good first issue` 标签在感兴趣的项目中找到入门任务
3. 先从文档修复、typo 修正开始，逐渐过渡到代码贡献

---

## 阶段四：开源协议与社区（建议 1-2 周）

### 学习目标
- 理解主流开源协议的区别和选择依据
- 了解如何启动和维护自己的开源项目
- 掌握社区管理和维护者最佳实践

### 学习资料
| 文档 | 说明 |
|------|------|
| [01-开源协议详解](./04-开源协议与社区/01-开源协议详解.md) | MIT/Apache/GPL 对比、选择指南 |
| [02-启动自己的开源项目](./04-开源协议与社区/02-启动自己的开源项目.md) | LICENSE/README/CONTRIBUTING/CODE_OF_CONDUCT |
| [03-维护者最佳实践](./04-开源协议与社区/03-维护者最佳实践.md) | 流程文档化、社区管理、自动化工具 |

### 实践建议
1. 为你的个人项目选择并添加合适的开源协议
2. 编写一份规范的 CONTRIBUTING.md 贡献指南
3. 配置 Issue 模板和 PR 模板

---

## 阶段五：持续成长

### 学习资料
| 文档 | 说明 |
|------|------|
| [01-推荐学习资源与工具](./05-推荐资源与工具/01-推荐学习资源与工具.md) | 精选仓库、在线课程、社区、工具推荐 |

### 进阶方向
- **CI/CD 自动化**：学习 GitHub Actions，为项目添加自动测试和部署
- **代码审查**：参与其他人 PR 的 Review，提升代码质量意识
- **社区建设**：运营 Discussions、写技术博客、组织线下活动
- **开源治理**：了解 CNCF、Apache Foundation 等基金会的项目治理模式

---

## 学习原则

1. **边学边做**：每学一个概念就立即实践，不要只看不练
2. **从小处开始**：第一个贡献可以只是修一个 typo
3. **坚持公开**：保持沟通公开透明，这是开源精神的核心
4. **尊重社区**：遵守项目的行为准则，礼貌交流
5. **持续积累**：每周至少参与一次开源活动（review、issue、PR）

---

## 原始资料来源

以下是本路线图参考的主要资料来源（均已离线保存至本仓库）：

- [GitHub Docs - About Git](https://docs.github.com/en/get-started/using-git/about-git)
- [GitHub Docs - GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [GitHub Docs - Contributing to a project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
- [Open Source Guides - How to Contribute](https://opensource.guide/how-to-contribute/)
- [Open Source Guides - Starting a Project](https://opensource.guide/starting-a-project/)
- [Open Source Guides - The Legal Side](https://opensource.guide/legal/)
- [Open Source Guides - Best Practices for Maintainers](https://opensource.guide/best-practices/)

---

*最后更新：2026-07-25*
