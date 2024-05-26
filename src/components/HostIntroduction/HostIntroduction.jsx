import React, { createContext, useContext, useState } from 'react';
import superHostBadge from '../../assets/hosts/superHost.svg';
import superHostBadgeRed from '../../assets/hosts/superHostRed.svg';
import badge from '../../assets/hosts/badge.svg';
import data from '../../data/RoomInfo.json';

const HostContext = createContext();

const HostProvider = ({ children }) => {
  const { host, introduction } = data;
  const currentYear = new Date().getFullYear();
  const hostingYears = currentYear - host.year < 1 ? '1년 미만' : `${currentYear - host.year}년`;
  const isSuperHost = host.type === '슈퍼호스트';
  
  return (
    <HostContext.Provider value={{ host, introduction, hostingYears, isSuperHost }}>
      {children}
    </HostContext.Provider>
  );
};

const HostProfile = () => {
  return (
    <div className="flex-shrink-0 bg-white rounded-xl shadow w-[380px] h-[242px] flex items-center justify-center">
      <HostInfo />
      <HostStats />
    </div>
  );
};

const HostInfo = () => {
    const { host, isSuperHost } = useContext(HostContext);
    return (
        <div className='w-[200px] relative'>
        <div className='flex flex-col items-center'>
          <img className="w-28 h-28 rounded-full" src={host.profile} alt={host.name} />
          {isSuperHost && (
            <img
              className="w-6 h-6 absolute bottom-0 right-[60px] top-[90px]"
              src={superHostBadgeRed}
              alt="Superhost Badge"
            />
          )}
          <div className="mt-2 text-center">
            <div className="text-3xl font-medium text-black">{host.name}</div>
            <div className="text-gray-500 text-xs flex items-center">
              {isSuperHost && <img src={superHostBadge} className="w-4 h-4 mr-1" alt="Superhost Badge" />}
              {host.type}
            </div>
          </div>
        </div>
      </div>
    )
}

const HostStats = () => {
  const { hostingYears } = useContext(HostContext);
  return (
    <div className="ml-6 h-[180px] pt-4">
      <div className="font-medium text-gray-500 text-xs">후기</div>
      <p className="w-[100px] text-lg border-solid border-slate-300 border-b-[1px]">94개</p>
      <div className="font-medium text-gray-500 text-xs pt-2">평점</div>
      <p className="text-lg border-solid border-slate-300 border-b-[1px]">4.96</p>
      <div className="font-medium text-gray-500 text-xs pt-2">호스팅 경력</div>
      <p className="text-lg">{hostingYears}</p>
    </div>
  );
};
