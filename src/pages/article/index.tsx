import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Markdown from 'components/Markdown'

import CardContent from 'components/Card/CardContent'
import CardHeader from 'components/Card/CardHeader'
import CardTitle from 'components/Card/CardTitle'
import Tag from 'components/Tag'
import SideBar from './SideBar'
import { reqGetArticleDetail } from '@/api/modules/article'
import type { Tag as ArticleTag } from '@/api/interface'
import { getYMDHMS } from '@/utils/format/time'

const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState<string>('')
  const [articleTitle, setArticleTitle] = useState<string>('')
  const [tag, setTag] = useState<ArticleTag.TagList[]>([])
  const [createTime, setCreateTime] = useState<string>('')
  const [updateTime, setUpdateTime] = useState<string>('')

  const GetArticleDetail = async () => {
    if (id) {
      const { data } = await reqGetArticleDetail(id)
      data && setArticle(data.content)
      data && setArticleTitle(data.title)
      data && setTag(data.tag)
      data && setCreateTime(data.create_time)
      data && setUpdateTime(data.update_time)
    }
  }

  useEffect(() => {
    GetArticleDetail()
  }, [])

  return (
    <div className='flex justify-center'>
      {/* <SideBar content={article} /> */}
      <div className='px-10 w-[1100px]'>
        <CardHeader>
          <CardTitle width='w-full'>
            <h3>{articleTitle}</h3>
            <span className='mt-2 h-2 inline-block'>
              <div>
                <span>创建时间：</span>
                <time>{getYMDHMS(createTime)}</time>
              </div>
              <div>
                <span>修改时间：</span>
                <time>{getYMDHMS(updateTime)}</time>
              </div>
            </span>
            <div className='mt-3'>
              {
                tag.map(item => (
                  <Tag key={item.id} tag={item.name} />
                ))
              }
            </div>
          </CardTitle>
          <CardContent width='w-full'>
            <div className='text-gray-700 break-all w-full mark-img'>
              <Markdown content={article} />
            </div>
          </CardContent>
        </CardHeader>
      </div>
      <SideBar content={article} />
    </div>
  )
}

export default Article