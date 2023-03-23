import { Header } from 'antd/es/layout/layout'

const BaseHeader = () => {
  return (
    <Header className="flex justify-center items-center h-20  border-b-2 shadow-md bg-gradient-to-r font-semibold from-green-400 via-blue-300 to-blue-500">
      <div className="m-2 text-2xl h-20">首页</div>
      <div className="m-2 text-2xl h-20">分类</div>
    </Header>
  )
}
export default BaseHeader