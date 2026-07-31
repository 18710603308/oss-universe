// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// 部署到 GitHub Pages 项目页（https://18710603308.github.io/oss-universe/）：
//   - site 为用户/组织主页域名
//   - base 为仓库名；本地开发默认 '/'，CI 构建时由 DEPLOY_BASE 注入 '/oss-universe'
export default defineConfig({
  site: 'https://18710603308.github.io',
  base: process.env.DEPLOY_BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
