import Link from 'next/link'
import RoomCard from './RoomCard'

import roomDetail from '@/data/roomDetail.json'
import InfiniteList from './InfiniteList'

export default function RoomList() {
  return (
    <>
      <div className='flex flex-col justify-center pt-5 px-20'>
        <div className='box-border justify-center grid grid-cols-2 w-9/10 gap-3 auto-rows-fr cardWidth:grid-cols-2'>
          {roomDetail.slice(0, 2).map((room) => {
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
