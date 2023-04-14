import CardContent from 'components/Card/CardContent'
import CardHeader from 'components/Card/CardHeader'
import CardTitle from 'components/Card/CardTitle'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { reqGetCategoryList } from '@/api/modules/category'
import { PREFIX } from '@/utils/constants'

interface CategoryList {
  id: number
  name: string
}

const Category = () => {
  const [categoryList, setCategoryList] = useState<CategoryList[]>([])

  const getCategoryList = async () => {
    const { data } = await reqGetCategoryList()
    data && setCategoryList(data)
  }

  useEffect(() => {
    getCategoryList()
  }, [])

  return (
    <CardHeader>
      <div className='flex justify-center w-11/12 lg:w-8/12'>
        <CardTitle width='w-10/12'>
          <div className='text-5xl'>分类</div>
        </CardTitle>
      </div>
      <div className='flex justify-center lg:w-8/12 w-11/12'>
        <CardContent width='w-10/12'>
          <div className='flex flex-wrap justify-center gap-8 lg:grid lg:justify-items-center lg:grid-cols-3 px-32'>
            {
              categoryList.map(item => (
                <Link key={item.name} to={`${PREFIX}/category/${item.id}`}>
                  <div className='card w-72 h-40 my-3 bg-base-100 shadow-xl image-full cursor-pointer'>
                    <figure>
                      <img src="https://api.lorem.space/image/movie?w=400&h=225" />
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
  )
}
export default Category