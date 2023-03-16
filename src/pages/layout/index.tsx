import { Space } from 'antd'
import Main from '../../components/Content'
import BaseFooter from './component/Footer'
import BaseHeader from './component/Header'

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