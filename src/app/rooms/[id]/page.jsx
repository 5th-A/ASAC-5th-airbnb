import Amenities from '@/components/Aments/Amenities'
import DetailPageCalendarDisplay from '@/components/Calendar/DetailPageCalendarDisplay'
import Comment from '@/components/Comment/Comment'
import DetailRoomInfo from '@/components/DetailRoomInfo/DetailRoomInfo'
import SmallHeader from '@/components/Header/SmallHeader'
import HostIntroduction from '@/components/HostIntroduction/HostIntroduction'
import MainImage from '@/components/MainImage/Mainimage'
import Providers from '@/redux/Providers'

export default function roomDetail({ params }) {
  const { id } = params

  return (
    <>
      <header>
        <SmallHeader />
      </header>
      <main className='flex w-full min-h-screen flex-col items-center'>
        <div>
          <div className='w-full px-20'>
            <Providers>
              <MainImage />
              <DetailRoomInfo id={id} />
              <Comment id={id} />
              <Amenities />
              <DetailPageCalendarDisplay />
              <HostIntroduction />
            </Providers>
          </div>
        </div>
      </main>
    </>
  )
}
