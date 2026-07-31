---
name: WireGuard
tagline: 极简高效的现代 VPN 协议，仅数千行代码
category: 安全
foundation: 独立
language: C
born: 2018
era: 云原生
stars: 开放标准
depth: seed
repo: https://github.com/WireGuard/wireguard-linux
website: https://www.wireguard.com
tags: [VPN, 加密, 网络, 极简]
updated: 2026-05-22
---

## 一句话定位

WireGuard 是新一代 VPN 协议与实现，以极简的代码量（核心仅约 4000 行，对比 OpenVPN/IPsec 的数十万行）、现代密码学和出色性能著称，已被合并进 Linux 内核，正在成为 VPN 的新标准。

## 诞生背景

2018 年由 Jason Donenfeld 发布。传统 VPN（OpenVPN、IPsec）代码庞大、配置复杂、难以审计，性能也不理想。WireGuard 的理念：用极简的设计、固定的现代密码学套件，做一个"小到可以审计、快到可以随处用"的 VPN。

## 核心架构

- **极简代码**：核心约 4000 行，便于安全审计
- **现代密码学**：固定使用 Curve25519、ChaCha20、Poly1305 等（不给弱算法选项）
- **基于公钥**：像 SSH 一样用公私钥配置对等连接
- **内核态实现**：已并入 Linux 内核，性能优异
- **无状态设计**：连接建立快，漫游友好

## 关键设计决策

1. **极简即安全**：代码越少，攻击面越小、越易审计——用简洁性直接提升安全性。
2. **不给弱选项**：固定一套现代密码学算法，杜绝"配置出弱加密"的可能。
3. **内核集成**：并入 Linux 内核，获得原生性能与广泛可用性。

## 生态位置

现代 VPN 的新标准，已被 Linux 内核收录。衍生：Tailscale、Netbird 等在其之上做易用的组网产品。竞品：OpenVPN、IPsec（老一代，重而复杂）。

## 我的评价

WireGuard 是"简洁即安全"哲学的极致体现——它用约 4000 行代码做到了传统 VPN 数十万行的事，而更少的代码意味着更小的攻击面、更容易的审计。它"不提供弱算法选项"的决策也极具启发：**在安全领域，减少用户的选择反而能减少犯错**。它被并入 Linux 内核，是对其设计的最高认可。
