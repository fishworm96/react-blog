import { Header } from 'antd/es/layout/layout'

const BaseHeader = () => {
  return (
    <Header className="flex justify-center items-center h-[72px] text-2xl bg-gray-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 border shadow-md">
      <div className="m-2">首页</div>
      <div className="m-2">分类</div>
    </Header>
  )
}
export default BaseHeader