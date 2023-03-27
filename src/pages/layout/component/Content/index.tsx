interface Props {
  children: JSX.Element
}

const Content = ({ children }: Props) => {
  return (
    <div className="flex flex-col flex-1">
      <main className='flex flex-col lg:flex-1 justify-center'>
        <>
          {children}
        </>
      </main>
    </div>
  )
}

export default Content