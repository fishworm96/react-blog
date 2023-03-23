import { Button } from 'antd'
import { useEffect, useState } from 'react'

// interface Props {
//   children: string
// }

const Tag = ({ tag }: { tag: string }) => {
  const [fontColor, setFontColor] = useState<string>('bg-yellow-300')

  const changeFontColor = (text: string) => {
    const len = text.length
    if (len < 4)
      setFontColor('bg-yellow-400')
    else if (len < 5)
      setFontColor('bg-green-300')
    else if (len < 6)
      setFontColor('bg-blue-300')
  }

  useEffect(() => {
    changeFontColor(tag)
  }, [])

  return (
    <>
      <Button className={`${fontColor} 'hover:bg-red-600 mx-2 border-none'`}
      >
        {tag}
      </Button>
    </>
  )
}
export default Tag