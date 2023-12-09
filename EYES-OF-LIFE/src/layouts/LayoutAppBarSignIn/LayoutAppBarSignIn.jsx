import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSignIn from "../../components/HeaderSignIn/HeaderSignIn";


const RootAppInicio = () => {
  return (
    <>
      <HeaderSignIn />
      <Outlet />
     
      
    </>
  );
};

export default RootAppInicio;
