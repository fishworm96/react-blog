import CardDetail from 'components/Card/CardDetail'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import Tag from 'components/Tag'
import Description from 'components/Card/Description'
import ArticleTime from 'components/Card/ArticleTime'
import Title from 'components/Card/Title'
import EmptyPage from 'components/EmptyPage'
import BasicPagination from 'components/BasicPagination'
import type { ArticleListDetail } from '@/api/interface'
import { reqGetCategoryListByID } from '@/api/modules/category'

const ArticleDetail = () => {
  const { id } = useParams()
  const [articleList, setArticleList] = useState<ArticleListDetail[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [title, setTitle] = useState<string>('')

  const getCategory = async () => {
    if (id) {
      const { data } = await reqGetCategoryListByID(+id)
      data && setArticleList(data.post_list)
      data && setTitle(data.community_detail.name)
      data && setTotalPages(data.total_pages)
    }
  }

  const onChange = async (page: number, size: number) => {
    const { data } = await reqGetCategoryListByID(+id!, page, size)
    data && setArticleList(data.post_list)
    data && setTitle(data.community_detail.name)
    data && setTotalPages(data.total_pages)
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    articleList
      ? <CardDetail title={title} totalPages={totalPages}>
        {
          articleList.map(item => (
            <div key={`${item.id}`} className='flex-col bg-white p-5 w-full border-solid rounded-t-2xl rounded-b-2xl mt-5 shadow-xl'>
              <div>
                <Title title={item.title} id={item.id} />
                {
                  item.tag.map((tag, index) => <Tag tag={tag} key={`${tag}_${index}`} />)
                }
                <Description description={item.description} />
                <ArticleTime createTime={item.create_time} />
              </div>
            </div>
          ))
        }
        <BasicPagination totalPages={totalPages} onChange={onChange} />
      </CardDetail>
      : <EmptyPage />
  )
}

export default ArticleDetail