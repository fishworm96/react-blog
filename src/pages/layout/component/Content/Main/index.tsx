import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import Card from 'components/Card'
import Side from 'components/Side'
import BasicPagination from 'components/BasicPagination'
import EmptyPage from 'components/EmptyPage'
import type { TagList } from '@/pages/ArticleTag'
import { reqGetArticleList } from '@/api/modules/home'
import { reqGetTagList } from '@/api/modules/tag'
import type { ArticleListDetail } from '@/api/interface'
import { PREFIX } from '@/utils/constants'

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

  const changePage = async (page: number, size: number) => {
    const { data } = await reqGetArticleList(page, size)
    setArticleList(data!.post_list)
    setTotalPages(data!.total_pages)
    setTotalTag(data!.total_tag)
    setTotalCategory(data!.total_category)
  }

  const onClick = (tag: string) => {
    navigate(`${PREFIX}/tag/${tag}`)
  }

  useEffect(() => {
    getArticleList()
  }, [])

  return (
    articleList
      ? (<>
        <div className='flex justify-center flex-1'>
          <div className='flex flex-col items-center w-11/12 lg:w-5/12 lg:mr-10'>
            {
              (articleList.map(item => (
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
      </>)
      : <EmptyPage />
  )
}
export default Main