# Git 常用命令速查

> 按使用场景分类，覆盖日常开发所需的绝大部分操作。

---

## 配置

```bash
# 设置用户名和邮箱（全局）
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 查看当前配置
git config --list

# 设置默认编辑器
git config --global core.editor "code --wait"

# 设置默认分支名为 main
git config --global init.defaultBranch main
```

---

## 创建与克隆

```bash
# 初始化新仓库
git init

# 在指定目录初始化
git init my-project

# 克隆远程仓库
git clone https://github.com/owner/repo.git

# 克隆到指定目录
git clone https://github.com/owner/repo.git my-folder

# 浅克隆（只获取最新历史，适合大型仓库）
git clone --depth 1 https://github.com/owner/repo.git
```

---

## 日常工作流

```bash
# 查看工作区状态
git status

# 查看简洁状态
git status -s

# 暂存单个文件
git add file.txt

# 暂存所有修改
git add .
git add -A

# 交互式暂存（选择性暂存部分修改）
git add -p

# 提交
git commit -m "feat: 添加用户登录功能"

# 暂存并提交（仅对已追踪文件生效）
git commit -am "fix: 修复空指针异常"

# 修改上一次提交的信息
git commit --amend -m "新的提交信息"

# 将新修改追加到上一次提交（不改变信息）
git commit --amend --no-edit
```

---

## 分支操作

```bash
# 查看本地分支
git branch

# 查看所有分支（包括远程）
git branch -a

# 创建新分支
git branch feature-login

# 切换分支
git checkout feature-login
# 或使用新语法
git switch feature-login

# 创建并切换（推荐）
git checkout -b feature-login
git switch -c feature-login

# 删除已合并的分支
git branch -d feature-login

# 强制删除分支
git branch -D feature-login

# 重命名当前分支
git branch -m new-name
```

---

## 合并与变基

```bash
# 合并分支到当前分支
git merge feature-login

# 合并时不使用快进（保留合并记录）
git merge --no-ff feature-login

# 变基（将当前分支的提交重新应用到目标分支之上）
git rebase main

# 交互式变基（整理提交历史）
git rebase -i HEAD~3

# 中止合并（出现冲突时）
git merge --abort

# 中止变基
git rebase --abort
```

---

## 远程操作

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin https://github.com/user/repo.git

# 添加上游仓库（Fork 场景）
git remote add upstream https://github.com/original/repo.git

# 推送到远程
git push origin main

# 首次推送并设置上游关联
git push -u origin main

# 推送所有分支
git push --all origin

# 从远程拉取并合并
git pull origin main

# 仅获取远程更新（不合并）
git fetch origin

# 获取所有远程仓库的更新
git fetch --all

# 删除远程分支
git push origin --delete feature-old
```

---

## 查看历史

```bash
# 查看提交历史
git log

# 简洁格式
git log --oneline

# 图形化显示分支
git log --oneline --graph --all

# 查看某个文件的历史
git log --follow file.txt

# 查看最近 N 次提交
git log -5

# 查看某次提交的详细内容
git show abc1234

# 查看两次提交之间的差异
git diff commit1..commit2

# 查看工作区与暂存区的差异
git diff

# 查看暂存区与最新提交的差异
git diff --staged
```

---

## 撤销与回退

```bash
# 撤销工作区的修改（恢复到最后一次提交的状态）
git checkout -- file.txt
git restore file.txt

# 取消暂存
git reset HEAD file.txt
git restore --staged file.txt

# 回退到某次提交（保留修改在工作区）
git reset --soft HEAD~1

# 回退到某次提交（保留修改在暂存区之外）
git reset --mixed HEAD~1

# 回退到某次提交（丢弃所有修改⚠️）
git reset --hard HEAD~1

# 创建一个"反向提交"来撤销某次提交（安全，推荐用于公共分支）
git revert abc1234
```

---

## 暂存工作区（Stash）

```bash
# 暂时保存当前工作区修改
git stash

# 带说明的 stash
git stash save "正在做的功能"

# 查看 stash 列表
git stash list

# 恢复最近的 stash（保留 stash 记录）
git stash apply

# 恢复并删除最近的 stash
git stash pop

# 删除特定 stash
git stash drop stash@{0}

# 清空所有 stash
git stash clear
```

---

## 标签（Tag）

```bash
# 查看所有标签
git tag

# 创建轻量标签
git tag v1.0.0

# 创建附注标签（推荐）
git tag -a v1.0.0 -m "正式版本 1.0.0"

# 推送标签到远程
git push origin v1.0.0

# 推送所有标签
git push origin --tags
```

---

## 实用技巧

```bash
# 查找引入 bug 的提交（二分查找）
git bisect start
git bisect bad          # 标记当前为有问题
git bisect good abc123  # 标记某次提交为正常

# 查看某行代码是谁写的
git blame file.txt

# 创建归档（不含 .git）
git archive --format=zip HEAD > project.zip

# 清理未追踪的文件
git clean -fd

# 查看引用日志（找回"丢失"的提交）
git reflog
```

---

## Commit Message 规范（推荐）

建议使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<类型>(<范围>): <简短描述>

<详细说明>（可选）

<BREAKING CHANGE>（可选）
```

常用类型：
| 类型 | 含义 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `docs` | 文档修改 |
| `style` | 代码格式调整（不影响逻辑） |
| `refactor` | 重构（不增加功能/不修复 bug） |
| `test` | 添加或修改测试 |
| `chore` | 构建/工具相关的修改 |

示例：
```bash
git commit -m "feat(auth): 添加 OAuth2.0 第三方登录"
git commit -m "fix(api): 修复用户列表分页参数缺失"
git commit -m "docs: 更新 API 接口文档"
```

---

## 下一步

熟练掌握这些命令后，请进入 [GitHub 平台入门](../02-GitHub使用/01-GitHub平台入门.md)，学习如何在 GitHub 上进行协作。
