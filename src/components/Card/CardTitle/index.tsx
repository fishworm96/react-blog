import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const CardTitle = ({ children }: Props) => {
  return (
    <div className='h-40 w-2/3 rounded-2xl drop-shadow-xl mt-8 p-7 bg-purple-50'>
      {children}
    </div>
  )
}
export default CardTitle