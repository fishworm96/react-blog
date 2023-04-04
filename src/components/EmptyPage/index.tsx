import { Empty } from 'antd'

const EmptyPage = () => {
  return (
    <div className='flex flex-1 justify-center items-center'>
      <Empty className='text-2xl' description="没有任何数据" />
    </div>
  )
}

export default EmptyPage