# Git 入门与核心概念

> 来源：[GitHub Docs - About Git](https://docs.github.com/en/get-started/using-git/about-git)

---

## 什么是版本控制

版本控制系统（VCS, Version Control System）用于追踪文件的变更历史。它让团队成员能够：

- 查看**谁**做了什么修改
- 修改是**何时**发生的
- **为什么**需要这些修改
- 随时**恢复**到任何历史版本

## 什么是 Git

Git 是目前最流行的**分布式版本控制系统（DVCS）**。

### 分布式 vs 集中式

| 特性 | 集中式（SVN 等） | 分布式（Git） |
|------|-----------------|--------------|
| 仓库位置 | 仅在中央服务器 | 每个开发者都有完整副本 |
| 离线工作 | 不支持 | 完全支持 |
| 速度 | 依赖网络 | 本地操作极快 |
| 安全性 | 单点故障风险 | 天然备份 |

### Git 的核心优势

1. **完整历史**：每个开发者都拥有项目的完整时间线
2. **时区无关**：分布式设计让全球协作成为可能
3. **分支安全**：通过分支机制安全地进行实验性开发
4. **开源与商业通用**：从个人项目到大型企业都在使用

---

## 核心概念

### 1. 仓库（Repository）

仓库是 Git 管理的项目的完整集合，包含：
- 所有文件和文件夹
- 每个文件的修订历史
- 配置信息

```bash
# 创建新仓库
git init my-project

# 克隆已有仓库
git clone https://github.com/owner/repo.git
```

### 2. 提交（Commit）

提交是项目在某个时间点的**快照**。每次提交包含：
- 变更的内容
- 提交者信息
- 时间戳
- 提交说明（commit message）
- 父提交的引用

```bash
# 暂存文件
git add file1.md file2.md

# 创建提交
git commit -m "描述这次改了什么"
```

### 3. 分支（Branch）

分支是独立的开发线。你可以：
- 在分支上安全地进行修改而不影响主线
- 同时进行多个功能的并行开发
- 完成后将分支合并回主线

```bash
# 查看所有分支
git branch

# 创建并切换到新分支
git checkout -b feature-login

# 合并分支
git checkout main
git merge feature-login
```

### 4. 暂存区（Staging Area）

Git 有一个独特的中间区域叫"暂存区"，让你可以精确控制哪些修改进入下一次提交：

```
工作区 (Working Directory)
    ↓ git add
暂存区 (Staging Area)
    ↓ git commit
仓库 (Repository)
```

### 5. 远程仓库（Remote）

远程仓库是托管在服务器上的仓库副本（如 GitHub）：

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin https://github.com/user/repo.git

# 推送到远程
git push origin main

# 从远程拉取
git pull origin main
```

---

## Git 的三种文件状态

| 状态 | 含义 | 操作 |
|------|------|------|
| **已修改**（Modified） | 文件已被修改但未暂存 | `git add` 来暂存 |
| **已暂存**（Staged） | 已标记为下次提交的内容 | `git commit` 来提交 |
| **已提交**（Committed） | 已安全存储在本地仓库中 | 数据安全 |

---

## 协作开发模式

### 模式一：共享仓库（Shared Repository）

- 团队成员被授予仓库的读/写权限
- 适合公司内部或小型团队
- 使用受保护分支来管理质量

### 模式二：Fork & Pull（开源常用）

- 任何人都可以 Fork（复制）项目到自己的账户
- 在自己的 Fork 中自由修改
- 通过 Pull Request 向原项目提议合并
- 适合开源项目，任何人都可以贡献

---

## 下一步

掌握了核心概念后，请继续学习 [Git 常用命令速查](./02-Git常用命令速查.md)，在实践中巩固理解。
