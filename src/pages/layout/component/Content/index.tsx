interface Props {
  children: JSX.Element
}

const Content = ({ children }: Props) => {
  return (
    <div className="flex flex-col flex-1">
      <main className='flex flex-col flex-1'>
        <>
          {children}
        </>
      </main>
    </div>
  )
}

export default Content