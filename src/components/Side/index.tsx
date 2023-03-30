import Tag from 'components/Tag'
import Avatar from './Avatar'
import type { TagList } from '@/pages/ArticleTag'

interface Props {
  tagList: TagList[]
}

const Side = ({ tagList }: Props) => {
  return (
    <div className='mt-10 w-72 hidden lg:block'>
      <Avatar />
      <div className='text-2xl p-2 text-center'>123</div>
      <div className='flex justify-center pb-6 border-b-2 border-indigo-900'>
        <div className='mx-1'>123</div>
        <div className='mx-1'>123</div>
        <div className='mx-1'>123</div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow m-1">

        <div className="stat">
          <div className="stat-title text-center">标签</div>
          <div className="stat-value">31</div>
          {/* <div className="stat-desc">Jan</div> */}
        </div>

        <div className="stat">
          <div className="stat-title text-center">文章</div>
          <div className="stat-value">42</div>
          {/* <div className="stat-desc">400</div> */}
        </div>

        <div className="stat">
          <div className="stat-title text-center">分类</div>
          <div className="stat-value">12</div>
          {/* <div className="stat-desc">90</div> */}
        </div>

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