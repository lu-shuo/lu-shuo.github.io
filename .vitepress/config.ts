import { defineConfig } from 'vitepress'
import { nav, sidebar } from './blogConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lushuo's blog",
  description: '一位前端开发者的博客，记录工作学习中的一点心得',
  lang: 'zh',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
      message: 'Either outstanding or out',
      copyright: 'Copyright © 2023 Lu Shuo',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/lu-shuo' }],
  },
})
