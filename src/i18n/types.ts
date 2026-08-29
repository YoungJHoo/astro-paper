export interface UIStrings {
  nav: {
    home: string;
    posts: string;
    tags: string;
    about: string;
    archives: string;
    search: string;
  };
  lang: {
    /** aria-label for the language switcher, e.g. "Switch to {{language}}" */
    switchTo: string;
  };
  post: {
    publishedAt: string;
    updatedAt: string;
    sharePostIntro: string;
    sharePostOn: string;
    sharePostViaEmail: string;
    tagLabel: string;
    backToTop: string;
    goBack: string;
    editPage: string;
    previousPost: string;
    nextPost: string;
    copyCode: string;
    copied: string;
    zoomImage: string;
    zoomImageAlt: string;
    imagePreview: string;
    imagePreviewAlt: string;
    closeImagePreview: string;
  };
  pagination: {
    prev: string;
    next: string;
    page: string;
  };
  home: {
    socialLinks: string;
    featured: string;
    recentPosts: string;
    allPosts: string;
    heroTitle: string;
    heroIntro: string;
    heroMoreInfoPrefix: string;
    clickHere: string;
    heroMoreInfoSuffix: string;
    rssFeed: string;
  };
  footer: {
    copyright: string;
    allRightsReserved: string;
  };
  pages: {
    tagTitle: string;
    tagDesc: string;

    tagsTitle: string;
    tagsDesc: string;

    postsTitle: string;
    postsDesc: string;

    archivesTitle: string;
    archivesDesc: string;

    searchTitle: string;
    searchDesc: string;
  };
  search: {
    clearSearch: string;
    loadMore: string;
    zeroResults: string;
    oneResult: string;
    manyResults: string;
    altSearch: string;
    searchSuggestion: string;
    searching: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    searchPlaceholder: string;
    noResults: string;
    goToPreviousPage: string;
    goToNextPage: string;
    paginationNav: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}
