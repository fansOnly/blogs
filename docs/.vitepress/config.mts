import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogs/',
  title: 'Just Coding',
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  // ignoreDeadLinks: true, // 死链检测
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    outline: {
      level: [3, 4],
      label: '页面导航',
    },
    // logo: '',
    nav: [
      // { text: '首页', link: '/' },
      { text: '前端基础', link: '/articles/javascript/introduction', activeMatch: '/articles/' },
      { text: 'ES6 专题', link: '/es6/introduction', activeMatch: '/es6/' },
      { text: '面试题库', link: '/interview/javascript', activeMatch: '/interview/' },
      // { text: '线上资源', link: '/online/files', activeMatch: '/online/' },
    ],
    sidebar: {
      '/articles/': [
        {
          text: 'Javascript',
          collapsed: true,
          items: [
            { text: 'JS 简介', link: '/articles/javascript/introduction' },
            { text: '数据类型', link: '/articles/javascript/data-types' },
            { text: '作用域', link: '/articles/javascript/scope' },
            { text: '闭包', link: '/articles/javascript/closures' },
            { text: '继承与原型链', link: '/articles/javascript/inheritance-and-the-prototype-chain' },
            { text: '事件', link: '/articles/javascript/event' },
            { text: '函数式编程', link: '/articles/javascript/functional-programming' },
            { text: '斐波那契专题', link: '/articles/javascript/fibonacci' },
            { text: '题目汇总', link: '/articles/javascript/questions' },
          ],
        },
        {
          text: 'HTML',
          collapsed: true,
          items: [
            { text: 'HTML 简介', link: '/articles/html/introduction' },
            { text: '重绘和重排', link: '/articles/html/repaint-and-reflow' },
            { text: '页面渲染', link: '/articles/html/render' },
          ],
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
            { text: 'Flex 弹性布局', link: '/articles/css/flex' },
            { text: '响应式设计', link: '/articles/css/responsive-design' },
            { text: 'CSS 性能优化', link: '/articles/css/optimization' },
            { text: '相关面试题', link: '/articles/css/questions' },
          ],
        },
      ],
      '/es6/': [
        {
          text: 'ES6 专题系列',
          collapsed: true,
          items: [
            { text: 'ECMA 简介', link: '/es6/introduction' },
            { text: 'ECMAScript 2015', link: '/es6/es6' },
          ],
        },
      ],
      '/interview/': [
        {
          text: '面试题库',
          items: [{ text: 'javascript 系列', link: '/interview/javascript' }],
        },
      ],
      '/online/': [
        {
          text: '线上资源',
          items: [
            { text: '测试资源', link: '/online/files' },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the <a href="https://github.com/fansOnly/blogs/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/fansOnly">FansOnly</a>',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/fansOnly' }],
    editLink: {
      pattern: 'https://github.com/fansOnly/blogs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    externalLinkIcon: true,
  },
});
