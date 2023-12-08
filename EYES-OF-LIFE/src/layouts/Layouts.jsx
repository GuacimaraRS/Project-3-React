import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SingIn from '../components/SingIn/SingIn';
 const Root = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <SingIn />
    </>
  );
}


export default Root