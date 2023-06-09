import CardContent from 'components/Card/CardContent'
import CardHeader from 'components/Card/CardHeader'
import CardTitle from 'components/Card/CardTitle'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmptyPage from 'components/EmptyPage'
import { reqGetCategoryList } from '@/api/modules/category'
import { PREFIX } from '@/utils/constants'
import type { Category as ReqCategory } from '@/api/interface'

const Category = () => {
  const [categoryList, setCategoryList] = useState<ReqCategory.CategoryList[]>([])

  const getCategoryList = async () => {
    const { data } = await reqGetCategoryList()
    setCategoryList(data)
  }

  useEffect(() => {
    getCategoryList()
  }, [])

  return (
    categoryList
      ? <CardHeader>
        <div className='flex justify-center w-11/12 lg:w-8/12'>
          <CardTitle width='w-10/12'>
            <div className='text-5xl'>分类</div>
          </CardTitle>
        </div>
        <div className='flex justify-center lg:w-8/12 w-11/12'>
          <CardContent width='w-10/12' backgroundColor="bg-white">
            <div className='flex flex-wrap justify-center lg:justify-start gap-8 px-32'>
              {
                categoryList.map(item => (
                  <Link key={item.name} to={`${PREFIX}/category/${item.id}`}>
                    <div className='card w-72 h-40 my-3 bg-base-100 shadow-xl image-full cursor-pointer'>
                      <figure>
                        <img src={item.image} />
                      </figure>
                      <div className='card-body'>
                        <h2 className='card-title'>{item.name}</h2>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </CardContent>
        </div>
      </CardHeader>
      : <EmptyPage />
  )
}
export default Category