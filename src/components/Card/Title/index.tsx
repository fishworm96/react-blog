import { Button } from 'antd'
import { useNavigate } from 'react-router'

interface Props {
  id: string
  title: string
}

const Title = ({ id, title }: Props) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/article/${id}`)
  }

  return (
    <div className='flex justify-between'>
      <Button onClick={onClick} className="border-none shadow-none border-transparent text-2xl font-semibold text-gray-600 pb-12">
        {title}
      </Button>
    </div>
  )
}
export default Title