import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const CardContent = ({ children }: Props) => {
  return (
    <div className="flex-1 h-80 w-screen lg:w-2/3 my-8 p-5 rounded-2xl drop-shadow-xl bg-purple-50">
      {children}
    </div>
  )
}
export default CardContent