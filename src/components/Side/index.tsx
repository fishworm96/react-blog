import Tag from 'components/Tag'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import { useSide } from './useSide'
import type { TagList } from '@/pages/ArticleTag'
import { NAME } from '@/utils/constants'

interface Props {
  tagList: TagList[]
  totalPages: number
  totalTag: number
  totalCategory: number
  onClick: (tag: string) => void
}

const Side = ({ tagList, totalPages, totalTag, totalCategory, onClick }: Props) => {
  const { SideTotal, Account } = useSide({ totalPages, totalTag, totalCategory })
  return (
    <div className='mt-10 w-72 hidden lg:block'>
      <div className='sticky top-[100px]'>
        <Avatar />
        <div className='text-2xl p-2 text-center'>{NAME}</div>
        <div className='flex justify-center pb-4 border-b-2 border-indigo-900 leading-8'>
          {
            Account.map(item => (
              <div className='mx-1 text-4xl' key={item.link}>
                <Link to={item.link}>{item.icon}</Link>
              </div>
            ))

          }
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
        <div className='mt-4 border-2 rounded-xl'>
          {
            tagList.map(item => <Tag key={item.id} tag={item.name} onClick={() => onClick(item.name)} />)
          }
        </div>
      </div>
    </div>
  )
}
export default Side