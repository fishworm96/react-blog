import { Outlet } from 'react-router'
import Content from './component/Content'
import BaseFooter from './component/Footer'
import BaseHeader from './component/Header'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <BaseHeader />
      <Content>
        <Outlet />
      </Content>
      <BaseFooter />
    </div>
  )
}
export default Layout