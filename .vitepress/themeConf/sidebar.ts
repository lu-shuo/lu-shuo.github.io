import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/front-end/javascript': [
    {
      text: '高级',
      items: [
        {
          text: '原型链',
          link: '/front-end/javascript/advanced/1-prototype-chain/',
        },
        { text: '作用域', link: '/front-end/javascript/advanced/2.scoping/' },
      ],
    },
  ],
}
