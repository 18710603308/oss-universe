---
name: Ansible
tagline: 无 Agent 的自动化配置管理工具，用 YAML 驯服基础设施
category: DevOps
language: Python
born: 2012
era: DevOps
stars: 63k+
depth: seed
repo: https://github.com/ansible/ansible
website: https://www.ansible.com
tags: [配置管理, 自动化, 无Agent]
updated: 2026-07-14
---

## 一句话定位

Ansible 是 Red Hat 旗下的自动化配置管理工具，用简单的 YAML「Playbook」描述任务，通过 SSH 无需在目标机器安装 Agent 即可批量配置服务器、部署应用。

## 诞生背景

2012 年由 Michael DeHaan 创造。当时 Puppet/Chef 需要在每台机器安装 Agent 并学习专门的 DSL，门槛高。Ansible 主打「无 Agent + YAML + 幂等」，极大降低了自动化运维的门槛。

## 核心架构

- **Inventory**：管理的主机清单
- **Playbook**：YAML 描述的任务剧本
- **Module**：完成具体操作的单元（安装包、拷贝文件等）
- **无 Agent**：通过 SSH 直接连接，目标机器无需预装软件
- **幂等性**：重复执行结果一致，只在需要时才改变

## 关键设计决策

1. **无 Agent 架构**：只需 SSH，无需在被管机器部署常驻进程，运维负担极低。
2. **YAML 而非 DSL**：用人人可读的 YAML 替代专门的编程语言，降低门槛。
3. **幂等设计**：描述"期望状态"而非"执行步骤"，可安全地重复运行。

## 生态位置

配置管理领域最流行工具。竞品：Puppet、Chef（需 Agent、用 Ruby DSL）、SaltStack。常与 Terraform 配合（Terraform 建基础设施，Ansible 配置软件）。

## 我的评价

Ansible 的胜出再次印证了"降低门槛 = 扩大采用"的规律——它没有比 Puppet/Chef 功能更强，而是用"无 Agent + YAML"把配置管理的入门成本降到最低。在工具选型中，简单和可读性往往比功能全面更能赢得广泛采用。这与 Docker、Ollama 的成功逻辑一脉相承。
