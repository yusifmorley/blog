// @ts-ignore
import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    base:"/blog/",
    plugins: [
      AutoSidebar({
        path:"./src",
        titleFromFile:true,
        beforeCreateSideBarItems:(data: string[]) => data
        // You can also set options to adjust sidebar data
        // 需要修改默认配置，请自行参照仓库的配置表
      })
    ]
  },
  title: "YusifMorley的博客",
  description: "Telegram主题相关",
  srcDir:"./src",
  themeConfig: {
    logo: '/avator.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'blog', link: '/theme/theme/all.md' }
    ],

    // sidebar: [
    //   {
    //     text: '主题参数介绍',
    //     items: [
    //       { text: '安卓', link: '/theme/all.md' },
    //       { text: '桌面', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yusifmorley/TelegramBot' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yusifmorley">YusifMorley</a>'
    }
  }
})
