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
        text: 'Javascript',
        link: '/front-end/javascript/advanced/1-prototype-chain/',
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
