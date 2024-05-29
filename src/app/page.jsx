import Category from '@/components/Category/Category'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Header />
      <Category />
    </main>
  )
}
