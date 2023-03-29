import { Button, Drawer } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const HeaderDrawer = ({ menu }: { menu: { name: string; path: string }[] }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const onClick = (path: string) => {
    navigate(path)
  }

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
                <Button onClick={() => onClick(item.path)} className='mb-2 bg-white' key={item.path}>{item.name}</Button>
              </div>
            ))
          }
        </div>
      </Drawer>
    </div>
  )
}
export default HeaderDrawer