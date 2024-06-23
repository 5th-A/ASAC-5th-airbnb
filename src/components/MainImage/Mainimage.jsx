import Image from 'next/image'
import ButtonGroup from '@/components/MainImage/ButtonGroup'

const MainImage = async ({ id }) => {
  const response = await fetch('http://localhost:3000/roomDetail.json')
  const room = await response.json()

  return (
    <div className='container mx-auto pt-12'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>{room.roomName}</h1>
        <ButtonGroup isLikeData={room.isLike} />
      </div>
      <div className='w-full pt-6 h-[400px]'>
        <div className='grid grid-cols-4 grid-rows-2 gap-4 h-full'>
          {room.RoomImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative ${
                index === 0
                  ? 'col-span-4 lg:col-span-2 row-span-2'
                  : 'col-span-1 lg:col-span-1 row-span-1'
              } image-container`}
            >
              <button className='w-full h-full p-0 border-none relative'>
                <Image
                  src={image.url}
                  alt={`Room ${index}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded'
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainImage
