import { Pagination } from 'antd'
import Card from '../../../../components/Card'
import Side from '../../../../components/Side'

const Content = () => {
  const a = ['1', '1234', '12345', '123456']

  const changePage = (pageNumber: number) => {
    console.log(pageNumber)
  }

  return (
    <main className='flex flex-col lg:flex-1 justify-center'>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center w-full lg:w-5/12 lg:mr-10'>
          {
            a.map(item => (
              <Card key={item} tag={a} />
            ))
          }
        </div>
        <Side />
      </div>
      <Pagination className='mx-auto my-4' defaultCurrent={1} total={60} onChange={changePage} />
    </main>
  )
}
export default Content