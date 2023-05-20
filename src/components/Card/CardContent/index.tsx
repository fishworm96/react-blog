import type { ReactNode } from 'react'
type Width = 'w-full' | 'w-10/12' | 'w-8/12'
interface Props {
  children: ReactNode
  width: Width
  backgroundColor?: string
}
const CardContent = ({ children, width, backgroundColor = 'bg-indigo-50' }: Props) => {
  return (
    <div className={`flex-1 w-full lg:${width} my-8 p-5 rounded-2xl ${backgroundColor}`}>
      {children}
    </div>
  )
}
export default CardContent