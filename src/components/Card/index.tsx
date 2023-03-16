const Card = () => {
  return (
    <div className='w-3/4'>
      <div className='flex-col w-1/2 h-52 border-solid border-4 border-light-blue-500 rounded-t-2xl rounded-b-2xl m-10'>
        <div className='p-10'>
          <div className='flex justify-between'>
            <div className=''>数据结构</div>
            <time>2023年3月16日 23:11:55</time>
          </div>
          <div>简单描述下数据结构</div>
          <div>
            <span>算法</span>
            <span>算法</span>
            <span>算法</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card