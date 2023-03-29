import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const CardTitle = ({ children }: Props) => {
  return (
    <div className='w-10/12 lg:w-2/3 rounded-2xl drop-shadow-xl mt-8 p-5 bg-purple-50'>
      {children}
    </div>
  )
}
export default CardTitle