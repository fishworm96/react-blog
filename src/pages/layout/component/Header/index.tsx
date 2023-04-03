import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'
import { useLinkList } from './useLinkList'
import HeaderDrawer from './HeaderDrawer'

const BaseHeader = () => {
  const { NavLinkList } = useLinkList()

  return (
    <Header className="flex justify-around items-center sticky top-0 z-40 border-b-2 fide shadow-md bg-gradient-to-r font-middle from-green-400 via-blue-300 to-blue-500">
      <div>
        <Link to='/'>
          <div className='font-title text-primary inline-flex text-lg transition-all duration-200 sm:text-3xl'>
            <span className="uppercase text-base-content">c</span>
            <span className="lowercase text-primary">ode</span>
          </div>
        </Link>
      </div>
      <div className='hidden lg:block'>
        {
          NavLinkList.map(item => (
            <Link className='mx-1' to={item.path} key={item.path}>
              <Button className='text-2xl h-10 border-none' key={item.path}>{item.name}</Button>
            </Link>
          ))
        }
      </div>
      <div>
        <input placeholder='请输入搜索内容' className='h-9 lg:w-96 rounded-2xl pl-4' />
      </div>
      <HeaderDrawer menu={NavLinkList} />
    </Header>
  )
}
export default BaseHeader