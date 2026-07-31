---
name: gRPC
tagline: Google 的高性能 RPC 框架，微服务通信的现代标准
category: 网络通信
foundation: CNCF
language: 多语言
born: 2015
era: 云原生
stars: 42k+
depth: seed
repo: https://github.com/grpc/grpc
website: https://grpc.io
tags: [RPC, Protobuf, HTTP2, 微服务]
updated: 2026-06-19
---

## 一句话定位

gRPC 是 Google 开源的高性能远程过程调用（RPC）框架，基于 HTTP/2 和 Protocol Buffers，提供跨语言、强类型、高效的服务间通信，是云原生微服务内部通信的主流选择。

## 诞生背景

2015 年由 Google 开源，源自其内部的 Stubby。微服务间用 REST/JSON 通信虽通用但低效（文本序列化、无强类型契约）。gRPC 用二进制协议 + IDL 定义，追求高性能和强契约。

## 核心架构

- **Protocol Buffers**：用 .proto 文件定义服务接口与消息（IDL），跨语言生成代码
- **HTTP/2 传输**：多路复用、双向流、头部压缩
- **四种调用模式**：一元、服务端流、客户端流、双向流
- **强类型契约**：接口即代码，编译期校验
- **多语言**：一份 proto 生成多语言客户端/服务端

## 关键设计决策

1. **IDL + 代码生成**：用 .proto 作为语言无关的接口契约，自动生成各语言代码，保证强类型与一致性。
2. **HTTP/2 + 二进制**：相比 REST/JSON，性能与效率大幅提升，支持流式通信。
3. **契约优先**：先定义接口再实现，天然适合大规模服务协作。

## 生态位置

微服务内部通信的主流方案（对外 API 仍多用 REST/GraphQL）。CNCF 项目。相关：Protobuf（序列化）、gRPC-Web（浏览器）、Connect（现代替代）。竞品：REST、GraphQL、Thrift。

## 我的评价

gRPC 体现了"契约优先"的工程智慧——用 .proto 这个语言无关的接口定义作为唯一真相，各语言的实现都从它生成，从根本上杜绝了前后端接口不一致的经典难题。它与 REST 的分工也很清晰：对外用 REST/GraphQL（通用、易调试），对内用 gRPC（高效、强类型）。理解这种"内外有别"的通信选型，是微服务架构的基本功。
