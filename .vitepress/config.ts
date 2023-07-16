import { defineConfig } from 'vitepress'
import { nav, sidebar } from './themeConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lushuo's blog",
  description: '一个前端小白的博客，分享工作中的所见所得',
  lang: 'zh',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav,
    sidebar,
    outline: {
      level: [2, 6],
      label: '目录',
    },
    footer: {
      message: 'Never say never',
      copyright: 'Copyright © 2023 Lu Shuo',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/lu-shuo' }],
  },
})
