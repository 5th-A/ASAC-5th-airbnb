import RoomCard from './RoomCard'

import roomDetail from '../../roomDetail.json'

export default function RoomList() {
  const roomCount = 25
  const roomCards = []

  for (let i = 0; i < roomCount; i++) {
    roomCards.push(<RoomCard key={i} />)
  }
  return (
    <>
      <div className='flex justify-center pt-5 px-20'>
        <div className='box-border justify-center grid grid-cols-5 grid-rows-3 w-9/10 gap-3 auto-rows-fr'>
          {/* 임시로 때려박은 RoomCard 25개 */}
          {roomCards}
        </div>
      </div>
    </>
  )
}
