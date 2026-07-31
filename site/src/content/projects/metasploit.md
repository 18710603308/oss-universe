---
name: Metasploit
tagline: 最著名的开源渗透测试框架，攻防安全的必备武器库
category: 安全
language: Ruby
born: 2003
era: Web2.0
stars: 35k+
depth: seed
repo: https://github.com/rapid7/metasploit-framework
website: https://www.metasploit.com
tags: [渗透测试, 漏洞利用, 红队]
updated: 2026-07-06
---

## 一句话定位

Metasploit 是最著名的开源渗透测试框架，把漏洞探测、利用（exploit）、载荷（payload）投递标准化、模块化，是安全研究、授权渗透测试和红队演练的核心工具。

> ⚠️ 仅用于授权的安全测试、CTF 竞赛与安全研究。未经授权对他人系统使用属违法行为。

## 诞生背景

2003 年由 HD Moore 创建。此前漏洞利用代码零散、难复用。Metasploit 提出统一框架：把 exploit、payload、编码器等做成可组合的模块，让安全测试可复现、可协作。

## 核心架构

- **Module**：exploit（漏洞利用）、payload（攻击载荷）、auxiliary（辅助扫描）等
- **Meterpreter**：功能强大的内存驻留载荷，用于后渗透
- **msfconsole**：统一的命令行操作界面
- **模块化组合**：漏洞 + 载荷 + 编码器自由搭配

## 关键设计决策

1. **模块化框架**：把攻击的各环节解耦为可组合模块，极大提升复用性——这一思想深刻影响了整个安全工具生态。
2. **社区共享漏洞库**：全球研究者贡献 exploit 模块，形成庞大知识库。
3. **防御视角**：帮助防御方复现攻击、验证补丁，攻防一体。

## 生态位置

渗透测试领域的事实标准框架。防御方也用它做安全验证。配套：Nmap（扫描）、Burp Suite（Web）、Wireshark（抓包）。

## 我的评价

Metasploit 把"漏洞利用"从手工作坊变成了工程化的模块体系，这是安全领域的一次范式革命。它也体现了安全工具的双刃性——同一套框架，攻击者用来入侵，防御者用来加固。理解攻击才能更好地防御，这正是学习安全的核心逻辑：以攻促防。
