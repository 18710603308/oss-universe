---
name: Solidity
tagline: 智能合约的主流编程语言，为 EVM 而生
category: 区块链
language: C++
born: 2014
era: 云原生
stars: 24k+
depth: seed
repo: https://github.com/ethereum/solidity
website: https://soliditylang.org
tags: [智能合约, 编程语言, EVM, Web3]
updated: 2026-06-24
---

## 一句话定位

Solidity 是为以太坊虚拟机（EVM）设计的静态类型编程语言，语法接近 JavaScript/C++，是编写智能合约的主流语言，支撑着 DeFi、NFT 等绝大多数链上应用。

## 诞生背景

2014 年由以太坊团队 Gavin Wood 等设计。以太坊需要一门专门语言来编写在 EVM 上运行的智能合约，Solidity 借鉴主流语言语法，降低了合约开发的门槛。

## 核心架构

- **合约（Contract）**：类似类，包含状态变量与函数
- **编译到 EVM 字节码**：solc 编译器产出可上链的字节码
- **状态与 Gas**：状态存储在链上，每步执行消耗 Gas
- **类型系统**：静态类型，含地址、映射等区块链特有类型
- **事件（Event）**：向链外发出可监听的日志

## 关键设计决策

1. **贴近主流语法**：类 JS/C++ 语法降低学习成本，快速吸引开发者。
2. **面向合约的抽象**：内置 address、payable、msg.sender 等区块链原语。
3. **确定性执行**：合约必须在所有节点产生相同结果，语言层面约束不确定性。

## 生态位置

智能合约语言的事实标准。工具链：Hardhat、Foundry（开发框架）、OpenZeppelin（安全合约库）。竞品：Vyper（更简洁安全）、Rust（用于 Solana）。

## 我的评价

Solidity 是"新计算平台催生新语言"的典型——正如 GPU 有 CUDA、浏览器有 JS，可编程区块链也需要自己的语言。但它也暴露了新领域的代价：因语言与 EVM 的特性（如重入、整数溢出），智能合约漏洞屡致巨额损失。这警示我们：在一个错误代价极高（不可篡改、直接对应资金）的环境里，安全性必须是语言与工程的第一考量。
