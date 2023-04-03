import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const CardContent = ({ children }: Props) => {
  return (
    <div className="flex-1 h-80 lg:w-2/3 w-11/12 my-8 p-5 rounded-2xl drop-shadow-xl bg-purple-50">
      {children}
    </div>
  )
}
export default CardContent