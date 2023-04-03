interface Total {
  totalTag: number
  totalPages: number
  totalCategory: number
}
export const useSide = ({ totalTag, totalPages, totalCategory }: Total) => {
  const SideTotal = [
    { name: '标签', total: totalTag },
    { name: '文章', total: totalPages },
    { name: '分类', total: totalCategory },
  ]

  return {
    SideTotal,
  }
}