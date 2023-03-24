import { Button } from 'antd'
import { useEffect, useState } from 'react'

// interface Props {
//   children: string
// }

const Tag = ({ tag }: { tag: string }) => {
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

  useEffect(() => {
    changeFontColor(tag)
  }, [])

  return (
    <>
      <Button className={`${fontColor} ${fontDefault}`}
      >
        {tag}
      </Button>
    </>
  )
}
export default Tag