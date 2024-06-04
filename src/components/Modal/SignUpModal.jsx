import React, { useEffect } from 'react'

const SignUpModal = ({ isShow, closeModal }) => {
  useEffect(() => {
    function handleOutsideClick(e) {
      if (!e.target.closest('#modal-content')) {
        closeModal()
      }
    }

    if (isShow) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [isShow, closeModal])

  if (!isShow) return null

  return (
    <>
      <div
        className='rounded-lg text-sm fixed top-20 right-10 flex justify-center items-center shadow-lg shadow-gray-300 bg-opacity-50 z-50 '
        id='modal-backdrop'
      >
        <div
          className=' text-left bg-white rounded-3xl flex flex-col items-center shadow-gray-100 '
          id='modal-content'
        >
          <ul className='list-none'>
            <button className='block'>
              <li className='my-1 px-2 py-2 cursor-pointer hover:bg-gray-100'>회원가입</li>
            </button>
            <button className='block'>
              <li className='block my-1 px-2 py-2 cursor-pointer hover:bg-gray-100'>로그인</li>
            </button>
            <button className='block'>
              <li className='my-1 px-2 py-2 cursor-pointer hover:bg-gray-100'>
                당신의 공간을 에어비앤비하세요
              </li>
            </button>
            <button className='block'>
              <li className='my-1 px-2 py-2 cursor-pointer hover:bg-gray-100'>도움말 센터</li>
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SignUpModal
