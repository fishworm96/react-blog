import Card from '../Card'
import Side from '../Side'

const Main = () => {
  const a = [1, 2, 3]

  return (
    <main className='flex flex-col flex-1 bg-gray-50'>
      <div className='flex mx-auto'>
        <div className='flex flex-col items-center -mx-80'>
          {
            a.map(() => (
              <Card />
            ))
          }
        </div>
        <Side />
      </div>
    </main>
  )
}
export default Main