import { GithubOutlined } from '@ant-design/icons'
import { GITHUBLINK } from '@/utils/constants'

interface Total {
  totalTag?: number
  totalPages?: number
  totalCategory?: number
}
export const useSide = ({ totalTag, totalPages, totalCategory }: Total) => {
  const SideTotal = [
    { name: '标签', total: totalTag },
    { name: '文章', total: totalPages },
    { name: '分类', total: totalCategory },
  ]
  const Account = [
    {
      link: GITHUBLINK,
      icon: <GithubOutlined />,
    },
  ]

  return {
    SideTotal,
    Account,
  }
}