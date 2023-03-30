interface Props {
  createTime: string
}
const ArticleTime = ({ createTime }: Props) => {
  return (
    <div className="flex">
      <time className='ml-auto text-gray-600'>{createTime}</time>
    </div>
  )
}
export default ArticleTime