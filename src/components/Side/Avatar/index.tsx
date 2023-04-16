import { Avatar_Link } from '@/utils/constants'

const Avatar = () => {
  return (
    <div className='w-15 lg:w-32 mx-auto'>
      <img className='rounded-full' src={`${Avatar_Link}`} />
    </div>
  )
}
export default Avatar