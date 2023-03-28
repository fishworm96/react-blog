export const useLinkList = () => {
  const NavLinkList = [
    { name: '首页', path: '/' },
    { name: '分类', path: '/category' },
    { name: '标签', path: '/tag' },
  ]

  return {
    NavLinkList,
  }
}