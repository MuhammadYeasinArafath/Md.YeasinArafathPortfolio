import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sociallinks from './Sociallinks';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sociallinks />
    </>
  )
}

export default SharedLayout;