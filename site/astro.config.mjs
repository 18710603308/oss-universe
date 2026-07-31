// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// 部署到 GitHub Pages 时：
//   - 将 site 改为 https://<你的用户名>.github.io
//   - 若仓库名不是 <用户名>.github.io，需把 base 改为 '/<仓库名>'
// 通过环境变量 DEPLOY_BASE 可在 CI 中注入，本地开发默认根路径。
export default defineConfig({
  site: 'https://your-name.github.io',
  base: process.env.DEPLOY_BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
