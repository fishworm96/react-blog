import BasicPagination from 'components/BasicPagination'
import ArticleTime from 'components/Card/ArticleTime'
import CardDetail from 'components/Card/CardDetail'
import Description from 'components/Card/Description'
import Title from 'components/Card/Title'
import Tag from 'components/Tag'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import EmptyPage from 'components/EmptyPage'
import { reqGetPostListByTag } from '@/api/modules/tag'
import type { ArticleListDetail } from '@/api/interface'
import { PREFIX } from '@/utils/constants'

const TagDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [article, setArticle] = useState<ArticleListDetail[]>([])
  const [title, setTitle] = useState<string>('')
  const [totalPages, setTotalPages] = useState<number>(1)

  const getPostListByTag = async () => {
    const { data } = await reqGetPostListByTag(id!)
    setArticle(data!.post)
    setTitle(data!.name)
    setTotalPages(data!.total_pages)
  }

  const onChange = async (page: number, size: number) => {
    const { data } = await reqGetPostListByTag(id!, page, size)
    setArticle(data.post)
    setTitle(data.name)
    setTotalPages(data.total_pages)
  }

  const onClick = (tag: string) => {
    navigate(`${PREFIX}/tag/${tag}`, { replace: true })
  }

  useEffect(() => {
    getPostListByTag()
  }, [navigate])

  return (
    article
      ? (<CardDetail title={title} totalPages={totalPages}>
        {
          article.map(item => (
            <div key={`${item.id}`} className='flex-col bg-white p-5 w-full border-solid rounded-t-2xl rounded-b-2xl mt-5 shadow-xl'>
              <div>
                <Title title={item.title} id={item.id} />
                {
                  item.tag.map((tag, index) => <Tag tag={tag} key={`${tag}_${index}`} onClick={() => onClick(tag)} />)
                }
                <Description description={item.description} />
                <ArticleTime createTime={item.create_time} />
              </div>
            </div>
          ))
        }
        <BasicPagination totalPages={totalPages} onChange={onChange} />
      </CardDetail>)
      : <EmptyPage />
  )
}

export default TagDetail