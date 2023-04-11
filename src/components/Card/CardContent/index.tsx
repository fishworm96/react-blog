import type { ReactNode } from 'react'
type Width = 'w-full' | 'w-10/12'
interface Props {
  children: ReactNode
  width: Width
}
const CardContent = ({ children, width }: Props) => {
  return (
    <div className={`flex-1 w-full lg:${width} my-8 p-5 rounded-2xl drop-shadow-xl bg-purple-50`}>
      {children}
    </div>
  )
}
export default CardContent