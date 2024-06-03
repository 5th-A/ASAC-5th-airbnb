import React, { useEffect } from 'react'

const SignUpModal = ({ isShow, closeModal }) => {
  useEffect(() => {
    function handleOutsideClick(e) {
      // modal-content를 클릭한 경우가 아니라면 모달을 닫습니다.
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
    <div
      className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'
      id='modal-backdrop'
    >
      <div className='p-5 bg-white rounded-lg flex flex-col items-center' id='modal-content'>
        <ul className='list-none p-0'>
          <li className='mb-2 cursor-pointer'>회원가입</li>
          <li className='mb-2 cursor-pointer'>로그인</li>
          <li className='mb-2 cursor-pointer'>당신의 공간을 에어비앤비하세요</li>
          <li className='mb-2 cursor-pointer'>도움말 센터</li>
        </ul>
      </div>
    </div>
  )
}

export default SignUpModal
