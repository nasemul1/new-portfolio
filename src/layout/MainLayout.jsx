import React from 'react';
import Leftside from '../components/Leftside';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:justify-between h-screen">
        <div className='2xl:w-[20%] hidden md:block'>
          <Leftside />
        </div>
        <main id='main' className="max-w-[1260px] flex-1 container overflow-auto no-scrollbar" style={{ scrollBehavior: 'smooth' }} >
          <div className="p-5 md:py-10 md:px-8">
            <Outlet />
          </div>
        </main>
        <Navbar />
    </div>
  );
};

export default MainLayout;