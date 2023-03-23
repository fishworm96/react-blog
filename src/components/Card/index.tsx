import ArticleTime from '../ArticleTime'
import Description from '../Description'
import Tag from '../Tag'
import Title from '../Title'

const Card = () => {
  return (
    <div className='flex-col bg-indigo-50 p-5 w-6/12 border-solid rounded-t-2xl rounded-b-2xl m-10 shadow-xl'>
      <div className='my-0'>
        <Title />
        <Tag />
        <Description />
        <ArticleTime />
      </div>
    </div>
  )
}
export default Card