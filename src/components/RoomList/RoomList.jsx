import RoomCard from './RoomCard'

export default function RoomList() {
  const roomCount = 20
  const roomCards = []
  for (let i = 0; i < roomCount; i++) {
    roomCards.push(<RoomCard key={i} />)
  }
  return (
    <>
      <div className='flex justify-center'>
        <div className='justify-center  px-20 grid grid-cols-4 box-border w-9/10 gap-2 grid-auto-rows-100px'>
          {/* 임시로 때려박은 RoomCard 20개 */}
          {roomCards}
        </div>
      </div>
    </>
  )
}
