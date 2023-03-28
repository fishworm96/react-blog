import Tag from 'components/Tag'

const ArticleTag = () => {
  const tag = ['Golang', '啊啊啊', '啊啊啊啊', '啊啊啊啊啊']

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-1/2 h-80 rounded-2xl bg-slate-50 p-5">
        {
          tag.map(item => (
            <Tag size='large' key={item} tag={item} />
          ))
        }
      </div>
    </div>
  )
}
export default ArticleTag