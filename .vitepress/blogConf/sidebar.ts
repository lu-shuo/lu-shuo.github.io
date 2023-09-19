import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/front-end/javascript': [
    {
      text: '基础',
      items: [
        {
          text: '数组',
          link: '/front-end/javascript/base/1.数组.md',
        },
      ],
    },
    {
      text: '高级',
      items: [
        {
          text: '原型链',
          link: '/front-end/javascript/advanced/1.prototype-chain/',
        },
      ],
    },
  ],
  '/front-end/typescript': [
    {
      text: '手册',
      items: [
        {
          text: '常用类型',
          link: '/front-end/typescript/base/1.常用类型/',
        },
        {
          text: '类型收缩',
          link: '/front-end/typescript/base/2.类型收缩（TODO）.md',
        },
        {
          text: '函数扩展',
          link: '/front-end/typescript/base/3.函数扩展.md',
        },
        {
          text: '对象扩展',
          link: '/front-end/typescript/base/4.对象扩展.md',
        },
        {
          text: '从类型中创造类型',
          link: '/front-end/typescript/base/5.从类型中创造类型.md',
        },
        {
          text: 'Class',
          link: '/front-end/typescript/base/6.Class.md',
        },
        {
          text: 'Modules',
          link: '/front-end/typescript/base/7.Modules.md',
        },
        {
          text: '类型声明',
          link: '/front-end/typescript/base/8.类型声明.md',
        },
        {
          text: '工具类型',
          link: '/front-end/typescript/base/9.工具类型.md',
        },
      ],
    },
  ],
  '/front-end/vue': [
    {
      text: '应用',
      items: [
        {
          text: '不定高度的过渡动画组件',
          link: '/front-end/vue/use/1.不定高度的过渡动画组件',
        },
      ],
    },
  ],
  '/front-end/css': [
    {
      text: '应用',
      items: [
        {
          text: '常用css技巧',
          link: '/front-end/css/use/1.常用css技巧/',
        },
      ],
    },
  ],
  '/front-end/browserAndNetwork': [
    {
      text: '浏览器工作原理与实践',
      items: [
        {
          text: '宏观视角的浏览器',
          items: [
            {
              text: 'Chrome架构',
              link: '/front-end/browserAndNetwork/howBrowserWork/1.宏观视角下的浏览器/1.1chrome架构/',
            },
            {
              text: 'TCP简述',
              link: '/front-end/browserAndNetwork/howBrowserWork/1.宏观视角下的浏览器/1.2TCP协议/',
            },
            {
              text: 'HTTP简述',
              link: '/front-end/browserAndNetwork/howBrowserWork/1.宏观视角下的浏览器/1.3HTTP简述/',
            },
            {
              text: '导航流程',
              link: '/front-end/browserAndNetwork/howBrowserWork/1.宏观视角下的浏览器/1.4导航流程/',
            },
          ],
        },
      ],
    },
  ],
}
