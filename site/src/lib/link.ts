/**
 * 生成 base 感知的站内链接。
 * 本地开发 base='/'，GitHub Pages 项目页 base='/oss-universe/'。
 * 用 import.meta.env.BASE_URL（Astro 自动注入，始终以 / 结尾）拼接，
 * 保证站内链接在两种环境下都正确。
 * 同时可在 .astro 前置脚本与客户端 <script> 中使用（Vite 会注入 BASE_URL）。
 */
export function link(path = '/'): string {
  const base = import.meta.env.BASE_URL || '/';
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : '/' + path;
  const result = trimmedBase + p;
  return result === '' ? '/' : result;
}
