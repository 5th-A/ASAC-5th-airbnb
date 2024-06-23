'use client'

import React, { useEffect, useState } from 'react'

const CountButton = ({ countData }) => {
  const [count, setCount] = useState(countData)

  useEffect(() => {
    setCount(countData)
  }, [countData])

  return <>편의시설 {count}개 모두 보기</>
}

export default CountButton
