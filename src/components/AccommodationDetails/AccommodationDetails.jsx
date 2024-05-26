import React from 'react'

const AccommodationDetails = () => {
  return (
    <>
      <div className='container mx-auto py-12'>
        <section className='rounded-lg w-[653px] h-[328px] mb-8'>
          <h2 className='text-2xl font-bold pb-4 text-left'>숙박 장소</h2>
          <button
            className='flex flex-col text-left'
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
            }}
          >
            <img
              src='https://a0.muscache.com/im/pictures/372cff67-8acb-4c8b-a69a-032e883178a9.jpg?im_w=960'
              alt='Accommodation'
              className='w-[318px] h-[270px] rounded-lg mb-4 mr-4'
            />
            <div className='text-lg'>
              <h3 className='font-semibold mb-2'>침실</h3>
              <p className='text-base'>퀸사이즈 침대 1개</p>
            </div>
          </button>
        </section>
      </div>
      <div
        className='_npr0qi'
        style={{
          borderTopColor: 'rgb(221, 221, 221)',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          marginTop: '20px',
        }}
      ></div>
    </>
  )
}

export default AccommodationDetails
