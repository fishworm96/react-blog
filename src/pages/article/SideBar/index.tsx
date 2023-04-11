import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

interface Props {
  content: string
}

const SideBar = ({ content }: Props) => {
  return (
    <div className=''>
      <div className='hidden border rounded-lg lg:block sticky top-1/4 h-[525px] w-[200px] overflow-y-auto'>
        <MarkNav headingTopOffset={80} ordered={true} source={content} />
      </div>
    </div>
  )
}

export default SideBar