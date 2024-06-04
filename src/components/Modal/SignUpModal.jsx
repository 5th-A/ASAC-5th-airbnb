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

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isShow, closeModal])

  if (!isShow) return null

  return (
    <>
      <div
        className='rounded-lg text-sm fixed top-20 right-10 flex justify-center items-center shadow-lg shadow-gray-300 bg-opacity-50 z-50 '
        id='modal-backdrop'
      >
        <div
          className='min-w-[240px] bg-white rounded-xl flex flex-col items-center shadow-gray-150 '
          id='modal-content'
        >
          <ul className='list-none w-full py-1'>
            <button className='block w-full'>
              <li className='w-full my-1 px-4 py-2 cursor-pointer hover:bg-gray-100 text-left '>
                회원가입
              </li>
            </button>
            <button className='block w-full'>
              <li className='w-full my-1 px-4 py-2 cursor-pointer hover:bg-gray-100 text-left '>
                로그인
              </li>
            </button>
            <hr className='border-t border-gray-300' />
            <button className='block w-full'>
              <li className='w-full my-1 px-4 py-2 cursor-pointer hover:bg-gray-100 text-left '>
                당신의 공간을 에어비앤비하세요
              </li>
            </button>
            <button className='block w-full'>
              <li className='w-full my-1 px-4 py-2 cursor-pointer hover:bg-gray-100 text-left '>
                도움말 센터
              </li>
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SignUpModal
