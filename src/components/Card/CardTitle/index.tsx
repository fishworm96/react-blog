import type { ReactNode } from 'react'

type Width = 'w-full' | 'w-10/12'
interface Props {
  children: ReactNode
  width: Width
}

const CardTitle = ({ children, width }: Props) => {
  return (
    <div className={`w-full lg:${width} rounded-2xl drop-shadow-xl mt-8 p-5 bg-purple-50`}>
      {children}
    </div>
  )
}
export default CardTitle