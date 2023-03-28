import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'
import { useLinkList } from './config'
import HeaderDrawer from './HeaderDrawer'

const BaseHeader = () => {
  const { NavLinkList } = useLinkList()

  return (
    <Header className="flex justify-around items-center border-b-2 shadow-md bg-gradient-to-r font-middle from-green-400 via-blue-300 to-blue-500">
      <div>
        <img className='w-10' src='https://avatars.githubusercontent.com/u/71592066?v=4' />
      </div>
      <div className='hidden lg:block'>
        {/* {
          title.map(item => (<span className="m-2 text-2xl h-20">{item}</span>))
        } */}
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