import { useEffect, useState } from 'react'

import Tag from 'components/Tag'
import { useNavigate } from 'react-router'
import { reqGetTagList } from '@/api/modules/tag'

export interface TagList {
  id: number
  name: string
}

const ArticleTag = () => {
  const navigate = useNavigate()
  const [tagList, setTagList] = useState<TagList[]>([])

  const getTagList = async () => {
    const { data } = await reqGetTagList()
    data && setTagList(data)
  }

  const onClick = (tag: string) => {
    navigate(`/tag/${tag}`)
  }

  useEffect(() => {
    getTagList()
  }, [])

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="lg:w-1/2 w-11/12 h-80 rounded-2xl bg-slate-50 p-5">
        {
          tagList.map(item => (
            <Tag size='large' key={item.id} tag={item.name} onClick={() => onClick(item.name)} />
          ))
        }
      </div>
    </div>
  )
}
export default ArticleTag