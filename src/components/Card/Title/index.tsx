import { useNavigate } from 'react-router'
import { PREFIX } from '@/utils/constants'

interface Props {
  id: string
  title: string
}

const Title = ({ id, title }: Props) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`${PREFIX}/article/${id}`)
  }

  return (
    <div className='flex justify-between'>
      <button onClick={onClick} className="border-none shadow-none border-transparent text-3xl font-semibold text-gray-600 text-overflow-ellipsis text-left">
        {title}
      </button>
    </div>
  )
}
export default Title