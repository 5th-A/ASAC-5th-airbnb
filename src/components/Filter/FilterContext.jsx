import React, { createContext, useState, useEffect } from 'react'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const initialFilters = {
    roomType: 'all',
    priceRange: { min: 14000, max: 580000 + '+' },
    bedrooms: { 침실: '상관없음', 침대: '상관없음', 욕실: '상관없음' },
    statement: '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.',
  }

  const [filters, setFilters] = useState(initialFilters)

  const fetchRoomData = async () => {
    try {
      const response = await fetch('/roomDetail.json') // JSON 파일 경로
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error Fetch:', error)
      return []
    }
  }

  const updateRoomData = async (type) => {
    const data = await fetchRoomData()
    const filteredData = data.filter((item) => item.roomType === type || type === 'all')
    console.log(`숙소 유형별로 해당하는 데이터 : "${type}":`, filteredData)
    setFilters((prev) => ({ ...prev, data: filteredData }))
  }

  // const fetchRoomData = async (type) => {
  //   try {
  //     const response = await fetch('/path/to/your/data.json'); // JSON 파일 경로
  //     const data = await response.json();
  //     const filteredData = data.filter(item => item.roomType === type || type === 'all');
  //     console.log(`숙소 유형별로 해당하는 데이터 :"${type}":`, filteredData);
  //     setFilters(prev => ({ ...prev, data: filteredData }));
  //   } catch (error) {
  //     console.error('Error 데이터', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchRoomData(filters.roomType);
  // }, [filters.roomType]);

  useEffect(() => {
    updateRoomData(filters.roomType)
  }, [filters.roomType])

  const handleRoomTypeChange = (type) => {
    const statement = {
      all: '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.',
      room: '단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.',
      house: '집 전체를 단독으로 사용합니다.',
    }
    setFilters({ ...filters, roomType: type, statement: statement[type] })
  }

  const handlePriceChange = (range) => {
    setFilters({ ...filters, priceRange: range })
  }

  const handleBedroomChange = (bedrooms) => {
    setFilters({ ...filters, bedrooms })
  }

  const handleResetFilters = () => {
    setFilters(initialFilters)
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
        handleRoomTypeChange,
        handlePriceChange,
        handleBedroomChange,
        handleResetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterProvider, FilterContext }
