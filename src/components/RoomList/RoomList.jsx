import Link from 'next/link'
import RoomCard from './RoomCard'

import roomDetail from '@/data/roomDetail.json'
import InfiniteList from './InfiniteList'

export default function RoomList() {
  const initRoom = roomDetail.slice(0, 6)
  return (
    <>
      <div className='flex flex-col justify-center pt-5 px-20'>
        <div className='box-border justify-center grid w-9/10 gap-3 auto-rows-fr card_lg:grid-cols-6 card_md:grid-cols-4 card_sm:grid-cols-2'>
          {initRoom.map((room) => {
            return (
              <Link href={`/rooms/${room.id}`}>
                <RoomCard
                  key={room.id}
                  imgSrc={room.RoomImages}
                  roomName={room.roomName}
                  roomAddress={room.address}
                  guestPrefer={room.guestPrefer}
                  price={room.price}
                ></RoomCard>
              </Link>
            )
          })}
        </div>
        <InfiniteList />
      </div>
    </>
  )
}
