import type { Category } from '../interface'
import { PORT1 } from './../serviceProt.ts/index'
import http from '@/api'

export const reqGetCategoryList = () =>
  http.get<Category.CategoryList[]>(`${PORT1}/community`)

export const reqGetCategoryListByID = (id: number) =>
  http.get<Category.CategoryDetailList>(`${PORT1}/community/${id}`)