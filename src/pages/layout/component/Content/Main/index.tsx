import { Pagination } from 'antd'
import { useEffect, useState } from 'react'

import Card from 'components/Card'
import Side from 'components/Side'
import type { TagList } from '@/pages/ArticleTag'
import { reqGetArticleList } from '@/api/modules/home'
import { reqGetTagList } from '@/api/modules/tag'

export interface ArticleList {
  id: string
  title: string
  description: string
  tag: string[]
  create_time: string
}

const Main = () => {
  const [articleList, setArticleList] = useState<ArticleList[]>([])
  const [tagList, setTagList] = useState<TagList[]>([])

  const getArticleList = async () => {
    const [resArticleList, resTagList] = await Promise.all([reqGetArticleList(), reqGetTagList()])
    resArticleList.data && setArticleList(resArticleList.data)
    resTagList.data && setTagList(resTagList.data)
  }

  const changePage = (pageNumber: number) => {
    console.log(pageNumber)
  }

  useEffect(() => {
    getArticleList()
  }, [])

  return (
    <>
      <div className='flex justify-center flex-1'>
        <div className='flex flex-col items-center w-full lg:w-5/12 lg:mr-10'>
          {
            articleList && (articleList.map(item => (
              <Card
                key={item.id}
                articleList={item} />
            )))
          }
        </div>
        <Side tagList={tagList} />
      </div>
      <Pagination className='mx-auto my-4 mt-9' defaultCurrent={1} total={60} onChange={changePage} />
    </>
  )
}
export default Main