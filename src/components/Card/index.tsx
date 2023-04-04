import Tag from '../Tag'
import ArticleTime from './ArticleTime'
import Description from './Description'
import Title from './Title'
import type { ArticleListDetail } from '@/api/interface'

interface Props {
  articleList: ArticleListDetail
  onClick: (tag: string) => void
}

const Card = ({ articleList, onClick }: Props) => {
  const { id, title, description, create_time, tag } = articleList
  return (
    <div className='flex-col bg-indigo-50 p-5 w-full border-solid rounded-t-2xl rounded-b-2xl mt-10 shadow-xl'>
      <div>
        <Title title={title} id={id} />
        {
          tag.map(
            (item, index) => <Tag tag={item} key={`${item}_${index}`} onClick={() => onClick(item)} />)
        }
        <Description description={description} />
        <ArticleTime createTime={create_time} />
      </div>
    </div>
  )
}
export default Card