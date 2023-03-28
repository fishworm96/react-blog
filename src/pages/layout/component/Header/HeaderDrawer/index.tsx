import { Button, Drawer } from 'antd'
import { useState } from 'react'

const HeaderDrawer = ({ menu }: { menu: { name: string; path: string }[] }) => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className='-m-20 lg:hidden'>
      <Button type="primary" onClick={showDrawer}>
        三
      </Button>
      <Drawer style={{ backgroundColor: 'rgb(248 250 252)' }} className='bg-black' width='150' placement="right" closable={false} onClose={onClose} open={open}>
        <div>
          {
            menu.map(item => (
              <div className='flex flex-col' key={item.path}>
                <Button className='mb-2 bg-white' key={item.path}>{item.name}</Button>
              </div>
            ))
          }
        </div>
      </Drawer>
    </div>
  )
}
export default HeaderDrawer