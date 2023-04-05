import { PORT1 } from '../serviceProt.ts'
import type { Home } from '../interface'
import http from '@/api'

export const reqGetArticleList = (page?: number, size?: number) => {
  return http.get<Home.ArticleList>(`${PORT1}/post?page=${page}&size=${size}`)
}