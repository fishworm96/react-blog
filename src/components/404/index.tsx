import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='bg-gradient-to-r from-purple-300 to-blue-200'>
      <div className='w-full py-16 min-h-screen flex items-center   justify-center'>
        <div className='bg-white shadow overflow-hidden sm:rounded-lg pb-8  px-28'>
          <div className='border-t border-gray-200 text-center pt-8'>
            <h1 className='text-9xl font-bold text-purple-400'>404</h1>
            <h1 className='text-3xl font-medium py-8'>你访问的页面不存在</h1>
            <Link className='bg-gradient-to-r from-purple-400 to-blue-500   hover:from-pink-500 hover:to-orange-500 text-white font-semibold  px-6 py-3 rounded-md mr-6' to='/'>首页</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Error404