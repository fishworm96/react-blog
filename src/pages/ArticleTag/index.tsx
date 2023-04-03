import { useEffect, useState } from 'react'

import Tag from 'components/Tag'
import { reqGetTagList } from '@/api/modules/tag'

export interface TagList {
  id: number
  name: string
}

const ArticleTag = () => {
  const [tagList, setTagList] = useState<TagList[]>([])

  const getTagList = async () => {
    const { data } = await reqGetTagList()
    data && setTagList(data)
  }

  useEffect(() => {
    getTagList()
  }, [])

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="lg:w-1/2 w-11/12 h-80 rounded-2xl bg-slate-50 p-5">
        {
          tagList.map(item => (
            <Tag size='large' key={item.id} tag={item.name} />
          ))
        }
      </div>
    </div>
  )
}
export default ArticleTag