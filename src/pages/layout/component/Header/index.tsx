import { Header } from 'antd/es/layout/layout'

const BaseHeader = () => {
  return (
    <Header className="flex justify-center items-center h-12 text-2xl text-white shadow-2xl">
      <div className="m-2">首页</div>
      <div className="m-2">分类</div>
    </Header>
  )
}
export default BaseHeader