import { Footer } from 'antd/es/layout/layout'
import { FOTTER } from '@/utils/constants'

const BaseFooter = () => {
  return (
    <Footer className='flex justify-center item-center bottom-0 h-15 border-solid border-2 border-light-black'>
      <div>
        {FOTTER}
      </div>
    </Footer>
  )
}
export default BaseFooter