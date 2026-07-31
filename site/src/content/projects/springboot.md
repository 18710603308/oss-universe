---
name: Spring Boot
tagline: Java 企业级开发的事实标准，约定优于配置
category: 后端框架
language: Java
born: 2014
era: DevOps
stars: 75k+
depth: seed
repo: https://github.com/spring-projects/spring-boot
website: https://spring.io/projects/spring-boot
tags: [Java, 企业级, 微服务, 自动配置]
updated: 2026-06-20
---

## 一句话定位

Spring Boot 是构建在 Spring 框架之上的快速开发脚手架，通过"自动配置"和"起步依赖"消除了 Spring 繁琐的 XML 配置，让 Java 企业级应用和微服务开发变得开箱即用。

## 诞生背景

2014 年发布。Spring 框架强大但配置繁琐（大量 XML、样板代码），上手门槛高。Spring Boot 提出"约定优于配置"，用合理的默认值和自动装配，让开发者几分钟就能跑起一个生产级应用。

## 核心架构

- **自动配置（Auto-configuration）**：根据类路径依赖自动装配 Bean
- **起步依赖（Starter）**：一个依赖引入一整套相关组件
- **内嵌服务器**：内置 Tomcat/Jetty，打成可执行 jar 直接运行
- **Actuator**：内置健康检查、指标等生产级监控端点
- **依赖注入（IoC）**：继承 Spring 的核心控制反转

## 关键设计决策

1. **约定优于配置**：用智能默认值替代显式配置，大幅减少样板代码。
2. **自动装配**：按依赖自动配置组件，"引入即可用"。
3. **可独立运行**：内嵌服务器 + 可执行 jar，契合容器化与微服务部署。

## 生态位置

Java 后端与微服务的绝对主流。庞大的 Spring 生态（Spring Cloud、Security、Data）。竞品：Quarkus/Micronaut（云原生、更轻量、启动更快）、以及其他语言的框架。

## 我的评价

Spring Boot 是"约定优于配置"理念的集大成者——它没有削弱 Spring 的强大，而是用自动配置把复杂性藏了起来，让开发者默认走在正确的路上。它揭示了成熟框架进化的方向：**能力不变，但把默认体验做到极致**。这与 Ruby on Rails 开创的"约定优于配置"一脉相承，是企业级框架易用化的标杆。
