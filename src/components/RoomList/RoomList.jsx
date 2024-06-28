'use client'

import Link from 'next/link'
import RoomCard from '@/components/RoomList/RoomCard'
import InfiniteList from '@/components/RoomList/InfiniteList'

export default function RoomList({ roomDetail, initRoom }) {
  return (
    <>
      <div className='flex flex-col justify-center pt-5 px-20'>
        <div className='box-border justify-center grid w-9/10 gap-3 auto-rows-fr card_lg:grid-cols-6 card_md:grid-cols-4 card_sm:grid-cols-2'>
          {initRoom.map((room) => {
            return (
              <Link key={room.id} href={`/rooms/${room.id}`}>
                <RoomCard
                  imgSrc={room.RoomImages}
                  roomName={room.roomName}
                  roomAddress={room.address}
                  guestPrefer={room.guestPrefer}
                  price={room.price}
                  date={room.date}
                ></RoomCard>
              </Link>
            )
          })}
        </div>
        <InfiniteList roomDetail={roomDetail} />
      </div>
    </>
  )
}
