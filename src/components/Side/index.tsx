import Tag from 'components/Tag'
import Avatar from './Avatar'
import { useSide } from './config'
import type { TagList } from '@/pages/ArticleTag'

interface Props {
  tagList: TagList[]
  totalPages: number
  totalTag: number
  totalCategory: number
}

const Side = ({ tagList, totalPages, totalTag, totalCategory }: Props) => {
  const { SideTotal } = useSide({ totalPages, totalTag, totalCategory })
  return (
    <div className='mt-10 w-72 hidden lg:block'>
      <Avatar />
      <div className='text-2xl p-2 text-center'>123</div>
      <div className='flex justify-center pb-6 border-b-2 border-indigo-900'>
        <div className='mx-1'>123</div>
        <div className='mx-1'>123</div>
        <div className='mx-1'>123</div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow m-1 flex justify-center">
        {
          SideTotal.map(item => (
            <div className="stat" key={item.name}>
              <div className="stat-title text-center">{item.name}</div>
              <div className="stat-value text-center">{item.total}</div>
            </div>
          ))
        }

      </div>
      <div className='mt-4 border-2 rounded-xl p-3'>
        {
          tagList.map(item => <Tag key={item.id} tag={item.name} />)
        }
      </div>
    </div>
  )
}
export default Side