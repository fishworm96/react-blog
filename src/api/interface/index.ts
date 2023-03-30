// 请求响应参数（不包含 data）
export interface Result {
  code: string
  msg: string
}

// 请求响应参数（包含 data）
export interface ResultData<T = any> extends Result {
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

export namespace Home {
  export interface ArticleList {
    id: string
    title: string
    description: string
    tag: string[]
    createTime: string
  }
}

export namespace Tag {
  export interface TagList {
    id: number
    name: string
  }
}