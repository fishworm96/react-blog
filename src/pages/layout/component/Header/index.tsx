import { Header } from 'antd/es/layout/layout'

const BaseHeader = () => {
  document.addEventListener('keydown', (e) => {
    console.log(e)
  })

  return (
    <Header className="flex justify-around items-center border-b-2 shadow-md bg-gradient-to-r font-middle from-green-400 via-blue-300 to-blue-500">
      <div className='flex h-20 '>
        <div className="m-2 text-2xl h-20">首页</div>
        <div className="m-2 text-2xl h-20">分类</div>
      </div>
      <div >
        <input placeholder='请输入搜索内容' className='h-9 w-96 rounded-2xl pl-4' />
      </div>
    </Header>
  )
}
export default BaseHeader