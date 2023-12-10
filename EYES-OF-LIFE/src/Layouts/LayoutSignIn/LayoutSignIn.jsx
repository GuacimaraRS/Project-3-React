import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSignIn from "../../components/HeaderSignIn/HeaderSignIn";
import Footer from "../../components/Footer/Footer";

const RootAppInicio = () => {
  return (
    <>
      <HeaderSignIn />
      <Outlet />
      <Footer />
      
    </>
  );
};

export default RootAppInicio;
