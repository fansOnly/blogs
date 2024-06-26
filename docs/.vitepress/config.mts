import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogs/',
  title: "Just Coding",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
    outline: {
      level: [3, 4],
      label: '页面导航',
    },
    // logo: '',
    nav: [
      // { text: '首页', link: '/' },
      { text: '前端基础', link: '/articles/html/introduction', activeMatch: '/articles/' },
      { text: '面试题库', link: '/interview/javascript', activeMatch: '/interview/' },
    ],
    sidebar: {
      '/articles/': [
        {
          text: 'HTML',
          collapsed: true,
          items: [
            { text: 'HTML 简介', link: '/articles/html/introduction' },
            { text: '重绘和重排', link: '/articles/html/repaint-and-reflow' },
            { text: '页面渲染', link: '/articles/html/render' },
          ]
        },
        {
          text: 'CSS',
          collapsed: true,
          items: [
            { text: 'CSS 简介', link: '/articles/css/introduction' },
            { text: '加载方式', link: '/articles/css/load-mode' },
            { text: 'CSS 选择器', link: '/articles/css/css-selectors' },
            { text: 'CSS 盒模型', link: '/articles/css/box-model' },
            { text: '块级格式上下文', link: '/articles/css/bfc' },
          ]
        },
        {
          text: 'Javascript',
          collapsed: true,
          items: [
            { text: 'JS 简介', link: '/articles/javascript/intro' },
            { text: '数据类型', link: '/articles/javascript/data-types' },
            { text: '作用域', link: '/articles/javascript/scope' },
            { text: '闭包', link: '/articles/javascript/closures' },
            { text: '继承与原型链', link: '/articles/javascript/inheritance-and-the-prototype-chain' },
            { text: '事件', link: '/articles/javascript/event' },
            { text: '函数式编程', link: '/articles/javascript/functional-programming' },
            { text: '斐波那契专题', link: '/articles/javascript/fibonacci' },
            { text: '题目汇总', link: '/articles/javascript/questions' },
          ]
        },
      ],
      '/interview/': [
        {
          text: '面试题库',
          // collapsed: true,
          items: [
            { text: 'javascript 系列', link: '/interview/javascript' },
          ]
        },
      ]
    },
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
