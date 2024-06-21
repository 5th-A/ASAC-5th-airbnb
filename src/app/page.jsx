import Header from '@/components/Header/Header'
import MainPageWrapper from '@/components/MainPageWrapper/MainPageWrapper'

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <div className='w-full'>
        <Header />
      </div>
      <MainPageWrapper />
    </main>
  )
}
