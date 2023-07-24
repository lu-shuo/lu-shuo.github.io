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
        link: '/front-end/javascript/base/数组.md',
      },
      {
        text: 'TypeScript',
        link: '/front-end/typescript/base/1.常用类型/',
      },
      {
        text: 'Vue',
        link: '/front-end/vue/apply/不定高度的过渡动画组件',
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
