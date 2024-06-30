import Amenities from '@/components/Aments/Amenities'
import DetailPageCalendarDisplay from '@/components/Calendar/DetailPageCalendarDisplay'
import Comment from '@/components/Comment/Comment'
import DetailRoomInfo from '@/components/DetailRoomInfo/DetailRoomInfo'
import SmallHeader from '@/components/Header/SmallHeader'
import GetHostInfo from '@/app/api/GetHostInfo'
import MainImage from '@/components/MainImage/Mainimage'
import Providers from '@/redux/Providers'

export default function roomDetail({ params }) {
  const { id } = params

  return (
    <>
      <header>
        <SmallHeader />
      </header>
      <main className='flex min-h-screen flex-col  items-center'>
        <div className='justify-center max-w-[1600px] px-20 mx-19.5'>
          <div className='w-full px-20 justify-center'>
            <Providers>
              <MainImage id={id} />
              <DetailRoomInfo id={id} />
              <Comment id={id} />
              <Amenities />
              <GetHostInfo id={id} />
              <DetailPageCalendarDisplay />
            </Providers>
          </div>
        </div>
      </main>
    </>
  )
}
