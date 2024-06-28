import MainPageWrapper from '@/components/MainPageWrapper/MainPageWrapper'
import { FilterProvider } from '@/components/Filter/FilterContext'
export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <div className='w-full'></div>
      <FilterProvider>
        <MainPageWrapper />
      </FilterProvider>
    </main>
  )
}
