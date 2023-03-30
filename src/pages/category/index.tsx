import CardContent from 'components/Card/CardContent'
import CardHeader from 'components/Card/CardHeader'
import CardTitle from 'components/Card/CardTitle'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { reqGetCategoryList } from '@/api/modules/category'

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
      <CardTitle>
        <div className='text-5xl'>分类</div>
      </CardTitle>
      <CardContent>
        <div className='flex flex-wrap justify-center gap-8 lg:grid lg:justify-items-center lg:grid-cols-3 px-32'>
          {
            categoryList.map(item => (
              <Link to='/' key={item.id}>
                <div className='card w-72 h-40 my-3 bg-base-100 shadow-xl image-full'>
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
    </CardHeader>
  )
}
export default Category