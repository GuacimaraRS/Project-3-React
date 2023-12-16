import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import AppBarLayoutUser from "../../components/AppBarLayoutUser/AppBarLayoutUser";




const LayoutProfileUser = () => {


    return (
      <> 

        <AppBarLayoutUser/>

        <Outlet />
      
        <Footer />
     
        
      </>
    );
  };
  
  export default  LayoutProfileUser;     
  