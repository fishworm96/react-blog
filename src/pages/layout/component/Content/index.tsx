interface Props {
  children: JSX.Element
}

const Content = ({ children }: Props) => {
  return (
    <main className='flex flex-col lg:flex-1 justify-center'>
      <>
        {children}
      </>
    </main>
  )
}

export default Content