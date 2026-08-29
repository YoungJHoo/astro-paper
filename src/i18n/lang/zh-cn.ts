import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  lang: {
    switchTo: "切换到{{language}}",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇文章：",
    sharePostOn: "在{{platform}}上分享这篇文章",
    sharePostViaEmail: "通过电子邮件分享这篇文章",
    tagLabel: "标签",
    backToTop: "回到顶部",
    goBack: "返回",
    editPage: "编辑页面",
    previousPost: "上一篇",
    nextPost: "下一篇",
    copyCode: "复制",
    copied: "已复制",
    zoomImage: "放大图片",
    zoomImageAlt: "放大图片：{{alt}}",
    imagePreview: "图片预览",
    imagePreviewAlt: "图片预览：{{alt}}",
    closeImagePreview: "关闭图片预览",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选",
    recentPosts: "最新文章",
    allPosts: "全部文章",
    heroTitle: "很高兴认识你！",
    heroIntro:
      "你好！这是我为了学习编程而制作的第一个网站。这是一个由 satnaing 在 GitHub 上发起的开源项目。如果你误入了这个网站，请不要尝试任何按钮，一切都在开发中。",
    heroMoreInfoPrefix: "你可以点击",
    clickHere: "这里",
    heroMoreInfoSuffix: "了解更多信息。",
    rssFeed: "RSS 订阅",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "所有带有以下标签的文章",

    tagsTitle: "标签",
    tagsDesc: "文章中使用的所有标签。",

    postsTitle: "文章",
    postsDesc: "我发表的所有文章。",

    archivesTitle: "归档",
    archivesDesc: "我归档的所有文章。",

    searchTitle: "搜索",
    searchDesc: "搜索任意文章……",
  },
  search: {
    clearSearch: "清除搜索",
    loadMore: "加载更多结果",
    zeroResults: "没有找到与“{{query}}”相关的结果",
    oneResult: "找到 1 个与“{{query}}”相关的结果",
    manyResults: "找到 {{count}} 个与“{{query}}”相关的结果",
    altSearch:
      "没有找到与“{{query}}”相关的结果，为您显示“{{suggestion}}”的结果",
    searchSuggestion: "您是不是想找：{{suggestion}}？",
    searching: "正在搜索“{{query}}”……",
  },
  a11y: {
    skipToContent: "跳转到主要内容",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章……",
    noResults: "未找到结果",
    goToPreviousPage: "转到上一页",
    goToNextPage: "转到下一页",
    paginationNav: "分页导航",
  },
  notFound: {
    title: "404 未找到",
    message: "页面未找到",
    goHome: "返回首页",
  },
} satisfies UIStrings;
