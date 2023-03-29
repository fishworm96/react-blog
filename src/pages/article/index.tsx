import { useParams } from 'react-router'

import CardContent from 'components/Card/CardContent'
import CardHeader from 'components/Card/CardHeader'
import CardTitle from 'components/Card/CardTitle'
import Tag from 'components/Tag'
import Markdown from 'components/Markdown'

const Article = () => {
  const params = useParams()
  console.log(params)
  const markdown = `
  # 1
  ## 1
  ### 1
  #### 1
  ##### 1
  ###### 1
  ![img](https://api.lorem.space/image/movie?w=400&h=225)

  Here is some JavaScript code:
  ~~~js
  console.log('It works!')
  let a = 1
  ~~~
  `
  return (
    <CardHeader>
      <CardTitle>
        <h3 className=''>标题</h3>
        <span className='mt-2 h-2 inline-block'>
          <div>
            <span>创建时间：</span>
            <time>2023年1月1日 12:12:12</time>
          </div>
          <div>
            <span>修改时间：</span>
            <time>2023年1月1日 12:12:12</time>
          </div>
        </span>
        <div className='mt-3'>
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
          <Tag tag="123" />
        </div>
      </CardTitle>
      <CardContent>
        <div className='text-gray-700 break-all w-full mark-img'>
          <Markdown content={markdown} />
        </div>
      </CardContent>
    </CardHeader>
  )
}

export default Article