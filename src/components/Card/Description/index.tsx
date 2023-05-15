interface Props {
  description: string
}
const Description = ({ description }: Props) => {
  return (
    <div className="text-gray-700 my-2 text-overflow-ellipsis">
      {description}
    </div>
  )
}
export default Description