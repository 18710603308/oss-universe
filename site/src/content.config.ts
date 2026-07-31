import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 项目卡片：网站的原子单位
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(), // 一句话定位
    foundation: z.string().optional(), // 所属基金会
    category: z.string(), // 领域分类
    language: z.string().optional(), // 主要编程语言
    born: z.number().optional(), // 诞生年份
    stars: z.string().optional(), // Star 数（近似）
    // 学习深度：seed 了解 / sprout 上手 / tree 深研 / peak 贡献过
    depth: z.enum(['seed', 'sprout', 'tree', 'peak']).default('seed'),
    repo: z.string().optional(),
    website: z.string().optional(),
    tags: z.array(z.string()).default([]),
    updated: z.coerce.date().optional(),
  }),
});

// 基金会百科
const foundations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/foundations' }),
  schema: z.object({
    name: z.string(),
    fullName: z.string().optional(),
    founded: z.number().optional(),
    license: z.string().optional(),
    projectCount: z.string().optional(),
    focus: z.string(), // 侧重领域
    order: z.number().default(99), // 学习顺序
    logo: z.string().optional(),
  }),
});

// 深度剖析：旗舰长文
const deepdives = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/deepdives' }),
  schema: z.object({
    title: z.string(),
    project: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    readingTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// 学习路线（阶段化）
const roadmap = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/roadmap' }),
  schema: z.object({
    stage: z.string(),
    title: z.string(),
    order: z.number(),
    period: z.string().optional(),
    goal: z.string(),
    status: z.enum(['done', 'active', 'todo']).default('todo'),
  }),
});

export const collections = { projects, foundations, deepdives, roadmap };
