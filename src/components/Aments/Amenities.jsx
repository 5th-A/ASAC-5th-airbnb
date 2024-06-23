import amenities from '@/data/amenities.json'
import CountButton from '@/components/Aments/CountButton'

const Amenities = async () => {
  const response = await fetch('http://localhost:3000/Facilities.json')
  const facilities = await response.json()

  return (
    <div className='flex flex-col items-center w-[1120px] text-left py-12'>
      <h2 className='text-xl font-bold mb-8 text-left w-full'>숙소 편의시설</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full'>
        {amenities.map((facilities, index) => (
          <div key={index} className='flex items-center space-x-2 w-[460px] pb-4'>
            <img src={facilities.url} className='w-[24px] h-[24px]'></img>
            <span>{facilities.text}</span>
          </div>
        ))}

        <div className='w-full flex justify-start mt-6'>
          <button
            className='rounded border border-black bg-white text-black font-semibold hover:cursor-pointer '
            style={{ padding: '13px 23px' }}
          >
            <CountButton countData={facilities.roomFacilities.length} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Amenities
