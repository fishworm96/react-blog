import Tag from '../Tag'
import ArticleTime from './ArticleTime'
import Description from './Description'
import Title from './Title'
import type { ArticleList } from '@/pages/layout/component/Content/Main'

interface Props {
  articleList: ArticleList
}

const Card = ({ articleList }: Props) => {
  const { id, title, description, create_time, tag } = articleList
  return (
    <div className='flex-col bg-indigo-50 p-5 lg:w-full h-full border-solid rounded-t-2xl rounded-b-2xl mt-10 shadow-xl'>
      <div>
        <Title title={title} id={id} />
        {
          tag.map((item, index) => <Tag tag={item} key={`${item}_${index}`} />)
        }
        <Description description={description} />
        <ArticleTime createTime={create_time} />
      </div>
    </div>
  )
}
export default Card