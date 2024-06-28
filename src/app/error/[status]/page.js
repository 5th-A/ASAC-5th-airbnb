import Header from '@/components/Header/Header'

export default function errorPage({ params }) {
  const { status } = params
  return (
    <>
      <Header />
      <div className='flex flex-col w-full h-[80%] min-h-[600px] flex-grow justify-center items-center'>
        <div className='font-semibold text-[50px]'>Error!</div>
        <div className='font-semibold text-[50px]'>{status}</div>
      </div>
    </>
  )
}
