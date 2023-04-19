// 请求响应参数（不包含 data）
export interface Result {
  code: string
  msg: string
}

// 请求响应参数（包含 data）
export interface ResultData<T = unknown> extends Result {
  data?: T
}

// 分页响应参数
export interface ResPage<T> {
  dataList: T[]
  pageNum: number
  pageSize: number
  total: number
}

// 分页请求参数
export interface ReqPage {
  pageNum: number
  pageSize: number
}

export interface Tag {
  id: number
  name: string
}

export interface ArticleListDetail {
  id: string
  title: string
  description: string
  tag: string[]
  create_time: string
}

export namespace Home {
  export interface ArticleList {
    post_list: ArticleListDetail[]
    total_pages: number
    total_tag: number
    total_category: number
  }
}

export namespace Tag {
  export interface TagList {
    id: number
    name: string
  }
  export interface TagDetailList {
    id: number
    name: string
    post: ArticleListDetail[]
    total_pages: number
  }
}

export namespace Category {
  export interface CategoryList {
    id: number
    name: string
  }
  export interface CategoryDetailList {
    community_detail: Category.CategoryList
    post_list: ArticleListDetail[]
    total_pages: number
  }
  export interface PostDetailList {
    id: number
    name: string
    post: ArticleListDetail[]
  }
}

export namespace Article {
  export interface ArticleDetail {
    authorId: string
    authorName: string
    communityId: number
    title: string
    tag: Tag.TagList[]
    content: string
    create_time: string
    update_time: string
  }
  export interface SearchArticle {
    id: string
    description: string
    title: string
  }
}