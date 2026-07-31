---
name: Spring
tagline: Java 企业级开发的绝对基石
category: 后端框架
language: Java
born: 2003
era: Web2.0
stars: 57k+
depth: seed
repo: https://github.com/spring-projects/spring-framework
website: https://spring.io
tags: [Web框架, Java, 企业级, 依赖注入]
updated: 2026-05-04
---

## 一句话定位

Spring 是 Java 企业级开发的事实标准框架，以依赖注入（IoC）和面向切面编程（AOP）为核心，把繁琐的企业开发简化为可组合的组件，其 Spring Boot 更让"起一个生产级 Java 服务"变成几分钟的事，统治了 Java 后端生态。

## 诞生背景

2003 年由 Rod Johnson 创建，为对抗当时笨重复杂的 EJB（Enterprise JavaBeans）。Spring 用轻量的依赖注入容器 + POJO（普通 Java 对象）替代重型的企业组件模型，让 Java 企业开发重新变得简单可控。

## 核心架构

- **IoC 容器**：依赖注入，管理对象的创建与装配，解耦组件
- **AOP**：把日志、事务、安全等横切关注点与业务逻辑分离
- **Spring Boot**：约定优于配置 + 内嵌服务器，开箱即用
- **Spring 全家桶**：Data、Security、Cloud（微服务）等一整套
- **庞大生态**：几乎覆盖企业开发所有需求

## 关键设计决策

1. **依赖注入解耦**：用 IoC 容器管理依赖，让组件松耦合、可测试、可替换。
2. **AOP 分离横切关注点**：事务、安全等通用逻辑与业务代码解耦，减少重复。
3. **Spring Boot 约定优于配置**：内嵌服务器 + 自动配置，消灭了传统 Java 项目繁琐的样板。

## 生态位置

Java 后端的绝对霸主，企业级开发的默认选择。竞品：Quarkus、Micronaut（更轻量、云原生启动更快）、以及其他语言的框架。Spring Cloud 还是 Java 微服务的主流方案。

## 我的评价

Spring 的伟大在于它两次拯救了 Java 后端——第一次用依赖注入把开发者从笨重的 EJB 中解放，第二次用 Spring Boot 消灭了 Java "配置地狱"的恶名。它诠释了依赖注入这一深刻思想：**通过把"依赖谁"的决定权从代码内部交给外部容器，实现了前所未有的解耦与可测试性**。这个思想早已超越 Java，影响了几乎所有现代框架的设计。
