import { PORT1 } from '../serviceProt.ts'
import type { Tag } from '../interface'
import http from '@/api'

export const reqGetTagList = () =>
  http.get<Tag.TagList[]>(`${PORT1}/tag`)

export const reqGetTagListByTag = (tag: string) =>
  http.get(`${PORT1}/tag/${tag}`)