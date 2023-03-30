interface Props {
  description: string
}
const Description = ({ description }: Props) => {
  return (
    <div className="text-gray-700 my-2">
      {description}
    </div>
  )
}
export default Description