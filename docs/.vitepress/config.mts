import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogs/',
  title: "Just Coding",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],
  // lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    // logo: '',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/javascript/intro' }
    ],
    sidebar: [
      {
        text: 'Javascript',
        collapsed: true,
        items: [
          { text: '简介', link: '/javascript/intro' },
          { text: '数据类型', link: '/javascript/data-types' },
          { text: '闭包', link: '/javascript/closures' },
          { text: '继承与原型链', link: '/javascript/inheritance-and-the-prototype-chain' },
          { text: '事件', link: '/javascript/event' },
        ]
      },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/fansOnly/blogs/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/fansOnly">FansOnly</a>'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fansOnly' }
    ],
    editLink: {
      pattern: 'https://github.com/fansOnly/blogs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
  }
})
