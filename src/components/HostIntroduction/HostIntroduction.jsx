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
