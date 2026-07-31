---
name: RabbitMQ
tagline: 老牌可靠消息代理，AMQP 协议的标杆实现
category: 消息与流处理
language: Erlang
born: 2007
era: Web2.0
stars: 12k+
depth: seed
repo: https://github.com/rabbitmq/rabbitmq-server
website: https://www.rabbitmq.com
tags: [消息队列, AMQP, 解耦]
updated: 2026-07-12
---

## 一句话定位

RabbitMQ 是基于 Erlang 编写的开源消息代理，实现了 AMQP 协议，以灵活的路由、可靠的投递和成熟稳定，成为传统企业应用解耦与异步通信的经典选择。

## 诞生背景

2007 年发布。企业系统需要可靠的异步通信来解耦服务、削峰填谷。RabbitMQ 基于电信级可靠性的 Erlang 语言实现，主打"消息不丢、路由灵活"。

## 核心架构

- **Exchange（交换机）**：接收消息并按规则路由
- **Queue（队列）**：存储消息等待消费
- **Binding**：连接 Exchange 与 Queue 的路由规则
- **路由模式**：direct、topic、fanout、headers 四种灵活路由
- **确认机制**：生产者确认 + 消费者 ACK，保证可靠投递

## 关键设计决策

1. **灵活路由**：通过 Exchange 类型和 Binding 实现复杂的消息分发逻辑。
2. **可靠优先**：消息持久化、确认机制、镜像队列，主打"不丢消息"。
3. **Erlang 基础**：借助 Erlang/OTP 的并发与容错能力实现高可用。

## 生态位置

传统消息队列代表，适合复杂路由、任务队列场景。与 Kafka 定位不同：RabbitMQ 强于灵活路由与低延迟，Kafka 强于高吞吐与日志流。竞品：NATS、ActiveMQ。

## 我的评价

RabbitMQ 与 Kafka 的对比是一堂精彩的架构选型课——它们不是谁取代谁，而是面向不同场景的不同抽象：RabbitMQ 是"智能代理 + 灵活路由"，Kafka 是"哑代理 + 持久日志"。理解这种差异，比记住 API 更重要。选型的本质是理解每个工具背后的设计取舍。
