import { PORT1 } from '../serviceProt.ts'
import type { Tag } from '../interface'
import http from '@/api'

export const reqGetTagList = () =>
  http.get<Tag.TagList[]>(`${PORT1}/tag`)

export const reqGetPostListByTag = (tag: string, page?: number, size?: number) =>
  http.get<Tag.TagDetailList>(`${PORT1}/tag/${tag}?page=${page}&size=${size}`)