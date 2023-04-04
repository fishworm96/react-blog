import { useEffect, useState } from 'react'

import Card from 'components/Card'
import Side from 'components/Side'
import BasicPagination from 'components/BasicPagination'
import { useNavigate } from 'react-router'
import type { TagList } from '@/pages/ArticleTag'
import { reqGetArticleList } from '@/api/modules/home'
import { reqGetTagList } from '@/api/modules/tag'
import type { ArticleListDetail } from '@/api/interface'

const Main = () => {
  const navigate = useNavigate()
  const [articleList, setArticleList] = useState<ArticleListDetail[]>([])
  const [tagList, setTagList] = useState<TagList[]>([])
  const [totalPages, setTotalPages] = useState<number>(10)
  const [totalTag, setTotalTag] = useState<number>(1)
  const [totalCategory, setTotalCategory] = useState<number>(1)

  const getArticleList = async () => {
    const [resArticleList, resTagList] = await Promise.all([reqGetArticleList(), reqGetTagList()])
    resArticleList.data && setArticleList(resArticleList.data.post_list)
    resArticleList.data && setTotalPages(resArticleList.data.total_pages)
    resArticleList.data && setTotalTag(resArticleList.data.total_tag)
    resArticleList.data && setTotalCategory(resArticleList.data.total_category)
    resTagList.data && setTagList(resTagList.data)
  }

  const changePage = (page: number, size: number) => {
    console.log(page, size)
  }

  const onClick = (tag: string) => {
    navigate(`/tag/${tag}`)
    console.log(tag)
  }

  useEffect(() => {
    getArticleList()
  }, [])

  return (
    <>
      <div className='flex justify-center flex-1'>
        <div className='flex flex-col items-center w-11/12 lg:w-5/12 lg:mr-10'>
          {
            articleList && (articleList.map(item => (
              <Card
                key={item.id}
                articleList={item}
                onClick={onClick}
              />
            )))
          }
        </div>
        <Side totalPages={totalPages} totalTag={totalTag} totalCategory={totalCategory} tagList={tagList} onClick={onClick} />
      </div>
      <BasicPagination totalPages={totalPages} onChange={changePage} />
    </>
  )
}
export default Main