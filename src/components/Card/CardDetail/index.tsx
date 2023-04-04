import type { ReactNode } from 'react'
import CardContent from '../CardContent'
import CardHeader from '../CardHeader'
import CardTitle from '../CardTitle'

interface Props {
  title: string
  totalPages: number
  children: ReactNode
}

const CardDetail = ({ title, totalPages, children }: Props) => {
  return (
    <CardHeader>
      <CardTitle>
        <div className='flex flex-col justify-center items-center text-zinc-500'>
          <div className='text-4xl'>{title}</div>
          <div className='text-sm'>{totalPages} 篇文章</div>
        </div>
      </CardTitle>
      <CardContent>
        {children}
      </CardContent>
    </CardHeader>
  )
}

export default CardDetail