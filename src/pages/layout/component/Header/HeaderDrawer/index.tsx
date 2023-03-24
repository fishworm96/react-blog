import { Button, Drawer } from 'antd'
import { useState } from 'react'

const HeaderDrawer = ({ menu }: { menu: string[] }) => {
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
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        {
          menu.map(item => (
            <div className='flex flex-col'>
              <Button className='mb-2 w-1/2'>{item}</Button>
            </div>
          ))
        }
      </Drawer>
    </div>
  )
}
export default HeaderDrawer