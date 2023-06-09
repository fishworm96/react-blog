import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const CardHeader = ({ children }: Props) => {
  return (
    <div className='flex flex-col items-center h-full lg:w-full'>
      {children}
    </div>
  )
}
export default CardHeader