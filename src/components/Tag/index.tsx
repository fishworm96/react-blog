import { Button } from 'antd'

// interface Props {
//   children: string
// }

const Tag = () => {
  return (
    <>
      <Button className='hover:bg-red-100 mx-2 bg-yellow-300 border-none'
      >
        123
      </Button>
      <Button className='hover:bg-red-100 bg-yellow-300 border-none'
      >
        123
      </Button>
    </>
    // <div className="bg-indigo-600 px-1 w-10 h-full">
    //   {children}
    // </div>
  )
}
export default Tag