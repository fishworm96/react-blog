import CardContent from 'components/Card/CardContent'
import CardHeader from 'components/Card/CardHeader'
import CardTitle from 'components/Card/CardTitle'
import { Link } from 'react-router-dom'

const Category = () => {
  const count = new Array(7).fill(1)
  return (
    <CardHeader>
      <CardTitle>
        <div className='text-5xl'>分类</div>
      </CardTitle>
      <CardContent>
        <div className='flex flex-wrap justify-center gap-8 lg:grid lg:justify-items-center lg:grid-cols-3 px-32'>
          {
            count.map((_, index) => (
              <Link to='/' key={index}>
                <div className='card w-72 h-40 my-3 bg-base-100 shadow-xl image-full'>
                  <figure>
                    <img src="https://api.lorem.space/image/movie?w=400&h=225" />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title'>Movies</h2>
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