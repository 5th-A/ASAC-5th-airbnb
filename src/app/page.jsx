import Category from '@/components/Category/Category'
import Header from '@/components/Header/Header'
import RoomCard from '@/components/RoomList/RoomCard'
import RoomList from '@/components/RoomList/RoomList'

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <div className='w-full'>
        <Header />
        <Category />
      </div>

      <RoomList />
    </main>
  )
}
