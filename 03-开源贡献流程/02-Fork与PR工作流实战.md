# Fork 与 PR 工作流实战

> 来源：[GitHub Docs - Contributing to a project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)

---

## 概述

Fork & Pull Request 是向开源项目贡献的标准流程。当你没有仓库的直接写入权限时，通过创建自己的副本（Fork）来进行修改，然后提交 Pull Request 让维护者审查并合并。

---

## 完整流程

```
原始仓库 (upstream)
    ↓ Fork
你的 Fork (origin)
    ↓ Clone
本地仓库
    ↓ Branch + Commit
本地功能分支
    ↓ Push
你的 Fork 远程分支
    ↓ Pull Request
原始仓库审查 → 合并
```

---

## 第一步：Fork 仓库

1. 在 GitHub 上打开目标仓库
2. 点击右上角的 **"Fork"** 按钮
3. 选择 Owner（你的账户）
4. 可以选择 "Copy the DEFAULT branch only"（通常够用）
5. 点击 **"Create fork"**

---

## 第二步：克隆 Fork 到本地

```bash
# 克隆你的 Fork
git clone https://github.com/YOUR-USERNAME/repo-name.git
cd repo-name

# 添加原始仓库为 upstream（方便后续同步）
git remote add upstream https://github.com/ORIGINAL-OWNER/repo-name.git

# 验证远程仓库配置
git remote -v
# origin    https://github.com/YOUR-USERNAME/repo-name.git (fetch)
# origin    https://github.com/YOUR-USERNAME/repo-name.git (push)
# upstream  https://github.com/ORIGINAL-OWNER/repo-name.git (fetch)
# upstream  https://github.com/ORIGINAL-OWNER/repo-name.git (push)
```

---

## 第三步：创建功能分支

```bash
# 确保在最新的 main 分支上
git checkout main
git pull upstream main

# 创建并切换到功能分支
git checkout -b fix-typo-in-readme
```

**分支命名建议**：
- `fix/` — 修复 bug：`fix/login-redirect`
- `feat/` — 新功能：`feat/dark-mode`
- `docs/` — 文档更新：`docs/api-examples`
- `refactor/` — 重构：`refactor/user-service`

---

## 第四步：进行修改并提交

```bash
# 编辑文件...
# 例如修复 README 中的错别字

# 查看修改内容
git diff

# 暂存修改
git add README.md

# 提交修改
git commit -m "docs: fix typo in installation section"
```

**提交信息规范**：
- 使用英文（很多国际项目要求）
- 简短明了，不超过 72 个字符
- 使用现在时态和祈使句："Fix bug" 而不是 "Fixed bug"

---

## 第五步：推送到你的 Fork

```bash
git push origin fix-typo-in-readme
```

---

## 第六步：创建 Pull Request

1. 打开你的 Fork 仓库页面
2. GitHub 会显示一个提示条：你的分支比原仓库新
3. 点击 **"Compare & pull request"** 或 **"Contribute → Open a pull request"**
4. 填写 PR 信息：
   - **标题**：清晰描述修改内容
   - **正文**：说明为什么需要这个修改，如何测试
   - **关联 Issue**：如 `Fixes #42` 或 `Closes #42`
5. 点击 **"Create pull request"**

---

## 第七步：响应 Review

维护者可能会：
- 提出建议或要求修改
- 提问以了解更多背景

你只需在同一分支上继续提交，PR 会自动更新：

```bash
# 根据 review 意见修改
git add .
git commit -m "address review: add input validation"
git push origin fix-typo-in-readme
```

---

## 保持 Fork 与上游同步

随着时间推移，原始仓库会有新的提交。你需要定期同步：

```bash
# 获取上游更新
git fetch upstream

# 切换到 main 分支
git checkout main

# 合并上游的 main
git merge upstream/main

# 推送到你的 Fork
git push origin main
```

如果你的功能分支需要合并上游最新代码：

```bash
git checkout fix-typo-in-readme
git rebase main
# 如果有冲突，解决后：
git add .
git rebase --continue
git push origin fix-typo-in-readme --force-with-lease
```

---

## 实战练习：用 first-contributions 仓库

[first-contributions](https://github.com/firstcontributions/first-contributions) 是一个专门为新手设计的练习仓库：

```bash
# 1. Fork 仓库（在 GitHub 网页上操作）

# 2. 克隆
git clone https://github.com/YOUR-USERNAME/first-contributions.git
cd first-contributions

# 3. 创建分支
git checkout -b add-your-name

# 4. 编辑 Contributors.md，添加你的名字

# 5. 提交
git add Contributors.md
git commit -m "Add YOUR-NAME to Contributors list"

# 6. 推送
git push origin add-your-name

# 7. 在 GitHub 上创建 PR
```

---

## 常见错误和解决

| 问题 | 解决方案 |
|------|----------|
| Fork 过时了 | `git fetch upstream && git merge upstream/main` |
| PR 有冲突 | 在本地 merge/rebase main 后 push |
| 推送到了 main 分支 | 创建新分支，把修改移过去 |
| 提交信息写错了 | `git commit --amend`（未 push 时） |
| 需要 squash 提交 | `git rebase -i HEAD~N` |

---

## 下一步

学习 [如何寻找适合的开源项目](./03-寻找适合的开源项目.md)。
