import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingIcons from './FloatingIcons';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <FloatingIcons/>
      <Footer />
    </>
  );
};

export default Layout;
