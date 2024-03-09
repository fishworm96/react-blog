import { PREFIX } from '@/utils/constants'

export const useLinkList = () => {
  const NavLinkList = [
    { name: '首页', path: PREFIX },
    { name: '分类', path: `${PREFIX}/category` },
    { name: '标签', path: `${PREFIX}/tag` },
    { name: '视频', path: `${PREFIX}/video` },
  ]

  return {
    NavLinkList,
  }
}