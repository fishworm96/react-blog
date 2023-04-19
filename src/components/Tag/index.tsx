import { Button } from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import { useEffect, useState } from 'react'

interface Props {
  tag: string
  size?: SizeType
  onClick?: () => void
}

const Tag = ({ tag, size = 'middle', onClick }: Props) => {
  const [fontColor, setFontColor] = useState<string>('bg-yellow-500')
  const fontDefault = 'hover:bg-red-600 m-2 border-none'

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