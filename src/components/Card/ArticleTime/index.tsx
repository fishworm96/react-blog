import { getYMD } from '@/utils/format/time'

interface Props {
  createTime: string
}
const ArticleTime = ({ createTime }: Props) => {
  return (
    <div className="flex">
      <time className='ml-auto text-gray-600'>{getYMD(createTime)}</time>
    </div>
  )
}
export default ArticleTime