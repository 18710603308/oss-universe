# GitHub Flow 工作流

> 来源：[GitHub Docs - GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)

---

## 什么是 GitHub Flow

GitHub Flow 是一种轻量级的、基于分支的工作流。它不仅适用于开发者，也适用于任何需要协作的场景（文档、设计、策略等）。

---

## 流程概览

```
main 分支 ─────────────────────────────────────────────── (稳定)
         \                                              /
          └── feature 分支 → 提交 → PR → Review → 合并 ┘
```

完整步骤：

```
1. 创建分支 (Create a branch)
       ↓
2. 进行修改 (Make changes)
       ↓
3. 创建 Pull Request (Create a PR)
       ↓
4. 处理审查意见 (Address review comments)
       ↓
5. 合并 PR (Merge your PR)
       ↓
6. 删除分支 (Delete your branch)
```

---

## 详细步骤

### 第一步：创建分支

```bash
# 确保在最新的 main 分支上
git checkout main
git pull origin main

# 创建并切换到新分支
git checkout -b add-user-authentication
```

**命名建议**：
- 使用描述性名称，让他人一眼就能理解
- 好的例子：`increase-test-timeout`、`add-code-of-conduct`、`fix-login-redirect`
- 避免：`my-branch`、`test`、`update`

### 第二步：进行修改

在你的分支上进行代码修改，并频繁提交：

```bash
# 编辑代码...

# 暂存修改
git add .

# 提交（每次提交应是一个完整的逻辑单元）
git commit -m "feat(auth): add JWT token validation"

# 推送到远程
git push origin add-user-authentication
```

**提交的最佳实践**：
- 每个提交包含一个**独立完整**的修改
- 这样方便在需要时单独回退某个修改
- 提交信息要清晰描述改了什么

### 第三步：创建 Pull Request

在 GitHub 上创建 PR：

1. 访问仓库页面，点击 "Compare & pull request"
2. 填写 PR 标题和描述：
   - 说明做了什么修改
   - 为什么需要这个修改
   - 如何测试
3. 关联 Issue：在描述中写 `Closes #123`（合并时自动关闭 Issue）
4. 如果还没完成，可以标记为 **Draft PR**

**PR 描述模板**：
```markdown
## 修改内容
简述本次 PR 做了什么

## 修改原因
解释为什么需要这个修改

## 测试方式
描述如何验证修改的正确性

## 相关 Issue
Closes #123
```

### 第四步：处理审查意见

审查者可能会：
- 提出问题
- 建议修改
- 要求补充测试

你需要：
1. 及时回复评论
2. 根据建议进行修改
3. 推送新的提交（PR 会自动更新）

```bash
# 根据 review 意见修改后
git add .
git commit -m "fix: address review comments"
git push origin add-user-authentication
```

### 第五步：合并 Pull Request

PR 获得批准后，点击 **"Merge pull request"** 按钮。

GitHub 提供三种合并方式：

| 方式 | 效果 | 适用场景 |
|------|------|----------|
| **Merge commit** | 保留所有提交 + 创建合并提交 | 需要完整历史 |
| **Squash and merge** | 将所有提交压缩为一个 | 功能分支有很多琐碎提交 |
| **Rebase and merge** | 线性历史，无合并提交 | 追求清洁的提交线 |

### 第六步：删除分支

合并后立即删除分支：
- 表明该分支的工作已完成
- 防止他人误用旧分支
- 不会丢失任何信息（PR 和提交历史都保留）

```bash
# 本地删除
git branch -d add-user-authentication

# 远程删除（或在 GitHub PR 页面点击 "Delete branch"）
git push origin --delete add-user-authentication
```

---

## 完整实战示例

```bash
# 1. 更新 main
git checkout main
git pull origin main

# 2. 创建功能分支
git checkout -b fix-navbar-responsive

# 3. 开发和提交
# ... 编辑代码 ...
git add src/components/Navbar.css
git commit -m "fix(ui): 修复导航栏在移动端的溢出问题"

git add src/components/Navbar.tsx
git commit -m "refactor(ui): 使用 flex 布局替代 float"

# 4. 推送到远程
git push -u origin fix-navbar-responsive

# 5. 在 GitHub 上创建 PR、等待 Review、合并

# 6. 合并后清理
git checkout main
git pull origin main
git branch -d fix-navbar-responsive
```

---

## 常见问题

### PR 出现冲突怎么办？

```bash
# 在你的分支上拉取最新的 main
git checkout fix-navbar-responsive
git fetch origin
git merge origin/main

# 解决冲突后
git add .
git commit -m "resolve merge conflicts with main"
git push
```

### 如何保持 Fork 与上游同步？

```bash
# 添加上游仓库
git remote add upstream https://github.com/original/repo.git

# 获取上游更新
git fetch upstream

# 合并到本地 main
git checkout main
git merge upstream/main

# 推送到自己的 Fork
git push origin main
```

---

## 下一步

掌握了 GitHub Flow 后，请进入 [如何贡献开源项目](../03-开源贡献流程/01-如何贡献开源项目.md)，学习向开源社区提交贡献的完整流程。
