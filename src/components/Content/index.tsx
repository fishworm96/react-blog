import { Pagination } from 'antd'
import Card from '../Card'
import Side from '../Side'

const Main = () => {
  const a = ['1', '1234', '12345', '122456', '3123123']

  const changePage = (pageNumber: number) => {
    console.log(pageNumber)
  }

  return (
    <main className='flex flex-col flex-1 bg-gray-50'>
      <div className='flex mx-auto'>
        <Side />
        <div className='flex flex-col items-center -mx-80'>
          {
            a.map(item => (
              <Card key={item} tag={a} />
            ))
          }
        </div>
      </div>
      <Pagination className='mx-auto my-4' defaultCurrent={1} total={60} onChange={changePage} />
    </main>
  )
}
export default Main