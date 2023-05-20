import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

interface Props {
  content: string
}

const SideBar = ({ content }: Props) => {
  return (
    <div className='mt-1/4'>
      <div className='hidden border bg-white rounded-lg lg:block sticky top-1/4 max-h-[525px] w-[200px] overflow-y-auto'>
        <MarkNav headingTopOffset={80} ordered={true} source={content} />
      </div>
    </div>
  )
}

export default SideBar