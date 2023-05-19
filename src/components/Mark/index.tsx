interface Props {
  name: string
  keyword: string
}

export const Mark = ({ name, keyword }: Props) => {
  if (!keyword) {
    return <div>{name}</div>
  }

  const regex = new RegExp(`(${keyword})`, 'gi')
  const parts = name.split(regex)

  return (
    <div className="text-overflow-ellipsis">
      {parts.map((part, index) => (
        regex.test(part)
          ? (
          <span key={`${keyword}_${index}`} className="bg-yellow-300">
            {part}
          </span>
            )
          : (
          <span key={`${keyword}_${index}`}>
            {part}
          </span>
            )
      ))}
    </div>
  )
}