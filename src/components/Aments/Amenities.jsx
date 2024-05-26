// import { ReactComponent as MountainView } from './svg-export/svgexport-47.svg?react';
// import { ReactComponent as Wifi } from './svg-export/svgexport-48.svg?react';
// import { ReactComponent as AirConditioner } from './svg-export/svgexport-49.svg?react';
// import { ReactComponent as HairDryer } from './svg-export/svgexport-50.svg?react';
// import { ReactComponent as Microwave } from './svg-export/svgexport-51.svg?react';
// import { ReactComponent as Waterfront } from './svg-export/svgexport-52.svg?react';
// import { ReactComponent as FreeParking } from './svg-export/svgexport-53.svg?react';
// import { ReactComponent as Backyard } from './svg-export/svgexport-54.svg?react';
// import { ReactComponent as Refrigerator } from './svg-export/svgexport-55.svg?react';
// import { ReactComponent as LongStay } from './svg-export/svgexport-56.svg?react';

// const amenities = [
//   { icon: MountainView, text: '산 전망' },
//   { icon: Wifi, text: '무선 인터넷' },
//   { icon: AirConditioner, text: '에어컨' },
//   { icon: HairDryer, text: '헤어드라이어' },
//   { icon: Microwave, text: '전자레인지' },
//   { icon: Waterfront, text: '수변에 인접' },
//   { icon: FreeParking, text: '건물 내 무료 주차' },
//   { icon: Backyard, text: '공용 뒷마당 - 울타리 완비' },
//   { icon: Refrigerator, text: '냉장고' },
//   { icon: LongStay, text: '장기 숙박 가능' },
// ];

const amenities = [
  { icon: '🖼', text: '산 전망' },
  { icon: '📶', text: '무선 인터넷' },
  { icon: '❄️', text: '에어컨' },
  { icon: '💇', text: '헤어드라이어' },
  { icon: '🍳', text: '전자레인지' },
  { icon: '🌊', text: '수변에 인접' },
  { icon: '🚗', text: '건물 내 무료 주차' },
  { icon: '🌼', text: '공용 뒷마당 - 울타리 완비' },
  { icon: '❄️', text: '냉장고' },
  { icon: '📅', text: '장기 숙박 가능' },
]

const Amenities = () => {
  return (
    <div className='flex flex-col items-center w-[1120px] text-left py-12'>
      <h2 className='text-2xl font-bold mb-8 text-left w-full'>숙소 편의시설</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full'>
        {amenities.map((amenity, index) => (
          <div key={index} className='flex items-center space-x-2 w-[460px]'>
            {/* <amenity.icon className='w-6 h-6' /> */}
            <span className='text-2xl'>{amenity.icon}</span>
            <span>{amenity.text}</span>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-start'>
        <button
          className='rounded border border-black bg-white text-black font-semibold hover:cursor-pointer'
          style={{ padding: '13px 23px' }}
        >
          편의시설 34개 모두 보기
        </button>
      </div>
    </div>
  )
}

export default Amenities
