import { Button } from 'antd'
import Tag from '../Tag'

const Card = () => {
  return (
    <div className='w-3/4'>
      <div className='flex-col bg-indigo-50 p-5 w-1/2 h-52 border-solid rounded-t-2xl rounded-b-2xl m-10 shadow-xl'>
        <div className='my-0'>
          <div className='flex justify-between'>
            <Button className="border-none text-3xl font-semibold text-gray-600 pb-12">数据结构</Button>
          </div>
          <div className="flex justify-between py-2">
            <div>
              <Tag />
            </div>
            <div>
            <time>2023年3月16日 23:11:55</time>
            </div>
          </div>
          <div className="text-gray-700">简单描述下数据结构简单描述下数据结构简单描述下数据结构简单描述下数据结构简单描述下数据结构简单描述下数据结构简单描述下数据结构简单描述下数据结构简单描述下数据结构简单描述下数据结构</div>
        </div>
      </div>
    </div>
  )
}
export default Card