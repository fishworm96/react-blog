import { Pagination } from 'antd'

interface Props {
  totalPages: number
  onChange: (page: number, size: number) => void
}

const BasicPagination = ({ totalPages, onChange }: Props) => {
  return (
    <div className='flex'>
      <Pagination className='mx-auto my-4 mt-9' defaultCurrent={1} total={totalPages} onChange={onChange} />
    </div>
  )
}

export default BasicPagination