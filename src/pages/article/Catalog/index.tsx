import { DownOutlined } from '@ant-design/icons'
import { Tree } from 'antd'
import type { DataNode, TreeProps } from 'antd/es/tree'
import { useNavigate } from 'react-router'
import type { Category } from '@/api/interface'
import { PREFIX } from '@/utils/constants'

const { DirectoryTree } = Tree

interface Props {
  categoryList: Category.PostDetailList[]
  id: string
}

const Catalog = ({ categoryList, id }: Props) => {
  const navigate = useNavigate()
  const onSelect: TreeProps['onSelect'] = (_, info) => {
    const len = info.node.pos.length
    const key = info.node.key
    if (len === 3) {
      navigate(`${PREFIX}/category/${key}`)
      return
    }
    navigate(`${PREFIX}/article/${key}`)
  }

  const formatTreeData = (categoryList: Category.PostDetailList[]): DataNode[] => {
    const treeData: DataNode[] = []
    categoryList.forEach((item) => {
      const { id, name, post } = item
      const children: DataNode[] = []
      let i = 0
      while (i < post.length) {
        children.push({ title: post[i].title, key: post[i].id, isLeaf: true })
        i++
      }
      treeData.push({ title: name, key: id.toString(), children })
    })
    return treeData
  }

  return (
    categoryList.length > 0
      ? <div className='hidden border rounded-lg lg:block sticky mt-10 top-20 max-h-[825px] w-[250px] overflow-y-auto bg-gray-50'>
        <DirectoryTree
          className='bg-gray-50'
          switcherIcon={<DownOutlined />}
          onSelect={onSelect}
          treeData={formatTreeData(categoryList)}
          defaultExpandedKeys={[id]}
          defaultSelectedKeys={[id]}
        />
      </div>
      : <div></div>
  )
}

export default Catalog