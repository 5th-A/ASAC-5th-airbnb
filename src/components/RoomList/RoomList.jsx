import Link from 'next/link'
import RoomCard from './RoomCard'

import roomDetail from '@/data/roomDetail.json'

export default function RoomList() {
  return (
    <>
      <div className='flex justify-center pt-5 px-20'>
        <div className='box-border justify-center grid grid-cols-5 grid-rows-3 w-9/10 gap-3 auto-rows-fr'>
          {roomDetail.map((room) => {
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
      </div>
    </>
  )
}
