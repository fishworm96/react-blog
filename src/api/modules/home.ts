import { PORT1 } from '../serviceProt.ts'
import type { Home } from '../interface'
import http from '@/api'

export const reqGetArticleList = () => {
  return http.get<Home.ArticleList[]>(`${PORT1}/post`)
}