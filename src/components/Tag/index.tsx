import { Button } from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import { useEffect, useState } from 'react'
import { reqGetTagListByTag } from '@/api/modules/tag'

interface Props {
  tag: string
  size?: SizeType
}

const Tag = ({ tag, size = 'middle' }: Props) => {
  const [fontColor, setFontColor] = useState<string>('bg-yellow-500')
  const fontDefault = 'hover:bg-red-600 m-1 border-none'

  const changeFontColor = (text: string) => {
    const len = text.length
    if (len <= 3) {
      setFontColor('bg-green-300')
    } else if (len <= 4) {
      setFontColor('bg-yellow-400')
    } else if (len <= 5) {
      setFontColor('bg-green-500')
    } else if (len <= 6) {
      setFontColor('bg-blue-500')
    }
  }

  const getTagListByTag = async (tag: string) => {
    const { data } = await reqGetTagListByTag(tag)
    console.log(data)
  }

  const onClick = () => {
    getTagListByTag(tag)
  }

  useEffect(() => {
    changeFontColor(tag)
  }, [])

  return (
    <>
      <Button size={size} className={`${fontColor} ${fontDefault}`} onClick={onClick}
      >
        {tag}
      </Button>
    </>
  )
}
export default Tag