import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/front-end/javascript': [
     {
      text: '基础',
      items: [
        { text: '原型链', link: '/front-end/javascript/base/1-prototype-chain/' },
        { text: '作用域', link: '/front-end/javascript/base/2.scoping/' },
      ]
    }
  ]
}