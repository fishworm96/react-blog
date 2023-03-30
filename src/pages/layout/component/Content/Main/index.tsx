import { Pagination } from 'antd'
import { useEffect, useState } from 'react'

import Card from 'components/Card'
import Side from 'components/Side'
import { reqGetArticleList } from '@/api/modules/home'

export interface ArticleList {
  id: string
  title: string
  description: string
  tag: string[]
  createTime: string
}

const Main = () => {
  const [articleList, setArticleList] = useState<ArticleList[]>([])

  const getArticleList = async () => {
    const { data } = await reqGetArticleList()
    data && setArticleList(data)
  }

  const changePage = (pageNumber: number) => {
    console.log(pageNumber)
  }

  useEffect(() => {
    getArticleList()
  }, [])

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center w-full lg:w-5/12 lg:mr-10'>
          {
            articleList && (articleList.map(item => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                tag={item.tag}
                createTime={item.createTime} />
            )))
          }
        </div>
        <Side />
      </div>
      <Pagination className='mx-auto my-4 mt-9' defaultCurrent={1} total={60} onChange={changePage} />
    </>
  )
}
export default Main