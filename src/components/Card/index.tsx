import Tag from '../Tag'
import ArticleTime from './ArticleTime'
import Description from './Description'
import Title from './Title'

const Card = ({ tag }: { tag: string[] }) => {
  return (
    <div className='flex-col bg-indigo-50 p-5 lg:w-full h-full border-solid rounded-t-2xl rounded-b-2xl mt-10 shadow-xl'>
      <div>
        <Title id='123' />
        {
          tag.map((item, index) => <Tag tag={item} key={`${item}_${index}`} />)
        }
        <Description />
        <ArticleTime />
      </div>
    </div>
  )
}
export default Card