import type { Article } from '../interface'
import { PORT1 } from './../serviceProt.ts/index'
import http from '@/api'

export const reqGetArticleDetail = (id: string) =>
  http.get<Article.ArticleDetail>(`${PORT1}/post/${id}`)

export const reqSearchArticle = (keyword: string) =>
  http.get<Article.SearchArticle[]>(`${PORT1}/search?keyword=${keyword}`)