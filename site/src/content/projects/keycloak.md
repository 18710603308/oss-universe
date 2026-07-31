---
name: Keycloak
tagline: 开源身份与访问管理，一站式解决认证授权
category: 安全
foundation: CNCF
language: Java
born: 2014
era: 云原生
stars: 26k+
depth: seed
repo: https://github.com/keycloak/keycloak
website: https://www.keycloak.org
tags: [身份认证, SSO, OAuth, IAM]
updated: 2026-04-15
---

## 一句话定位

Keycloak 是 Red Hat 开源的身份与访问管理（IAM）解决方案，提供单点登录（SSO）、多因素认证、社交登录、用户联合等能力，实现主流认证协议（OAuth 2.0、OIDC、SAML），让应用无需自建复杂的认证系统。

## 诞生背景

2014 年由 Red Hat 发起（现为 CNCF 项目）。认证授权是每个应用都要面对、却极难做对做安全的横切需求——自己实现登录、权限、SSO 既费力又易出安全漏洞。Keycloak 把这套复杂能力做成可复用的独立服务。

## 核心架构

- **标准协议**：完整实现 OAuth 2.0、OpenID Connect、SAML 2.0
- **单点登录（SSO）**：一次登录，访问多个应用
- **身份联合**：对接 LDAP、Active Directory、社交账号
- **多因素认证**：TOTP、WebAuthn 等
- **管理控制台**：可视化管理用户、角色、客户端、权限

## 关键设计决策

1. **认证即服务**：把认证授权从应用中抽离成独立服务，应用只需对接，不再自己实现。
2. **拥抱标准协议**：全面支持 OAuth/OIDC/SAML，与任意兼容标准的应用互通。
3. **企业级联合**：对接 LDAP/AD/社交登录，适配企业既有身份体系。

## 生态位置

开源 IAM 的代表（CNCF 孵化）。竞品：Auth0、Okta（商业 SaaS）、Authentik、Ory（云原生新秀）、Authelia（轻量）。在需要自托管、数据自主的企业身份认证场景，Keycloak 是主流选择。

## 我的评价

Keycloak 体现了"横切关注点服务化"的智慧——认证授权是几乎每个应用都需要、却极难做安全的功能，与其人人重复造轮子（还容易造出漏洞），不如用一个经过千锤百炼的专业服务。它和 Vault（密钥）、Bitwarden（密码）共同构成开源安全基础设施。它印证了一条铁律：**安全相关的功能，最不应该自己从零实现——复用经过审计的成熟方案，本身就是最重要的安全实践。**
