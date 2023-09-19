import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '前端',
    items: [
      {
        text: 'JavaScript',
        link: '/front-end/javascript/base/1.数组.md',
      },
      {
        text: 'TypeScript',
        link: '/front-end/typescript/base/1.常用类型/',
      },
      {
        text: 'Vue',
        link: '/front-end/vue/use/1.不定高度的过渡动画组件',
      },
      {
        text: 'Css',
        link: '/front-end/css/use/1.常用css技巧/',
      },
      {
        text: '浏览器与网络',
        link: '/front-end/browserAndNetwork/howBrowserWork/1.宏观视角下的浏览器/1.1chrome架构/',
      },
    ],
  },
  // {
  //   text: '关于我',
  //   items: [
  //     { text: 'Github', link: 'https://github.com/Jacqueline712' },
  //     {
  //       text: '掘金',
  //       link: 'https://juejin.cn/user/3131845139247960/posts',
  //     },
  //     {
  //       text: '飞书社区',
  //       link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink',
  //     },
  //   ],
  // },
]
