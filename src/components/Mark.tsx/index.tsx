interface Props {
  name: string
  keyword: string
}

export const Mark = ({ name, keyword }: Props) => {
  if (!keyword) {
    return <div>{name}</div>
  }

  const arr = name.split(keyword)
  return (
    <>
      {
        arr.map((str, index) => <span key={`${keyword}_${index}`}>
          {str}
          {
            index === arr.length - 1
              ? null
              : <span className='bg-yellow-100'>
                {keyword}
              </span>
          }
        </span>)
      }
    </>
  )
}