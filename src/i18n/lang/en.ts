import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  lang: {
    switchTo: "Switch to {{language}}",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
    copyCode: "Copy",
    copied: "Copied",
    zoomImage: "Zoom image",
    zoomImageAlt: "Zoom image: {{alt}}",
    imagePreview: "Image preview",
    imagePreviewAlt: "Image preview: {{alt}}",
    closeImagePreview: "Close image preview",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
    heroTitle: "Nice to meet you!",
    heroIntro:
      "Hello! This is my first website for learn coding. It is an open source project devoted by satnaing from github. If you open this website by mistake, please don't try any bottom. Everything is developing.",
    heroMoreInfoPrefix: "You can click",
    clickHere: "here",
    heroMoreInfoSuffix: "for more info.",
    rssFeed: "RSS Feed",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  search: {
    clearSearch: "Clear search",
    loadMore: "Load more results",
    zeroResults: "No results for {{query}}",
    oneResult: "1 result for {{query}}",
    manyResults: "{{count}} results for {{query}}",
    altSearch:
      "No results for {{query}}. Showing results for {{suggestion}} instead",
    searchSuggestion: "Did you mean {{suggestion}}?",
    searching: "Searching for {{query}}...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
    paginationNav: "Pagination Navigation",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
