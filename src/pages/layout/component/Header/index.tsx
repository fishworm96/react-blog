import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'
import { useLinkList } from './useLinkList'
import HeaderDrawer from './HeaderDrawer'
import SearchInput from './SearchInput'

const BaseHeader = () => {
  const { NavLinkList } = useLinkList()

  return (
    <Header className="flex lg:justify-around justify-between p-0 m-0 items-center sticky top-0 z-40 border-b-2 shadow-md overflow-hidden bg-gradient-to-r font-middle from-green-400 via-blue-300 to-blue-500">
      <div>
        <Link to='/'>
          <div className='font-title text-primary inline-flex text-lg transition-all duration-200 sm:text-3xl mx-2'>
            <span className="uppercase text-base-content">c</span>
            <span className="lowercase text-primary">ode</span>
          </div>
        </Link>
      </div>
      <div className='hidden lg:block'>
        {
          NavLinkList.map(item => (
            <Link to={item.path} key={item.path}>
              <Button className='text-2xl h-10 border-none' key={item.path}>
                {item.name}
              </Button>
            </Link>
          ))
        }
      </div>
      <div className='flex'>
        <SearchInput />
        <HeaderDrawer menu={NavLinkList} />
      </div>
    </Header>
  )
}
export default BaseHeader