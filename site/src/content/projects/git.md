---
name: Git
tagline: 分布式版本控制系统，现代软件协作的基石
category: 开发工具
language: C
born: 2005
stars: 52k+
depth: tree
repo: https://github.com/git/git
website: https://git-scm.com
tags: [版本控制, DVCS, Linus]
updated: 2026-07-25
---

## 一句话定位

Git 是由 Linus Torvalds 为管理 Linux 内核开发而创建的分布式版本控制系统，如今是几乎所有开源协作的底层基础设施。

## 诞生背景

2005 年，Linux 内核团队与商业版本控制工具 BitKeeper 的授权破裂。Linus 用两周时间写出了 Git，核心诉求：**速度、分布式、数据完整性**。它取代了 CVS、SVN 等集中式方案。

## 核心架构

Git 本质是一个**内容寻址文件系统**，之上包装了版本控制 UI：

- **Blob**：文件内容快照
- **Tree**：目录结构（指向 blob 和子 tree）
- **Commit**：指向一个 tree + 父 commit + 元信息
- **Ref**：分支/标签，本质是指向 commit 的可变指针

所有对象以 SHA-1（现迁移 SHA-256）哈希寻址，存于 `.git/objects`。

## 关键设计决策

1. **快照而非差异**：每次提交存整棵树的快照（未变文件复用引用），而非增量 diff —— 换来了极快的分支和合并。
2. **分布式**：每个克隆都是完整仓库，离线可用、天然备份。
3. **廉价分支**：分支只是一个 40 字节的指针文件，创建/切换近乎零成本。

## 生态位置

Git 是 GitHub/GitLab/Gitea 等所有代码托管平台的底层协议。竞品 Mercurial、SVN 已基本退居边缘。

## 快速上手

```bash
git init && echo "# demo" > README.md
git add README.md && git commit -m "init"
git log --oneline --graph
# 查看底层对象
git cat-file -p HEAD
```

## 深度阅读

- [Pro Git 中文版](https://git-scm.com/book/zh/v2)（尤其第 10 章 Git Internals）
- `.git` 目录结构探索

## 我的评价

Git 的精妙在于「用简单的对象模型 + 指针，组合出复杂的版本控制语义」。理解了 blob/tree/commit/ref 四种对象，几乎所有看似玄学的 Git 操作（rebase、reset、cherry-pick）都变得可推理。这是「简单基元组合出强大系统」的教科书案例。
