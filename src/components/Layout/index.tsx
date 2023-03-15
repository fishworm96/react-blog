import { Space } from 'antd'
import Main from './Content'
import BaseFooter from './Footer'
import BaseHeader from './Header'

const Layout = () => {
  return (
    <Space className="w-screen" direction="vertical">
      <BaseHeader />
      <Main />
      <BaseFooter />
    </Space>
  )
}
export default Layout