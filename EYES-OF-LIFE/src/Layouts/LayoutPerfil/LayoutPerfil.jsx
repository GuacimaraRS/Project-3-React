import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import AppBarLayoutPhotographer from "../../components/AppBarLayoutPhotographer/AppBarLayoutPhotographer";




const LayoutPerfil = () => {


    return (
      <> 

        <AppBarLayoutPhotographer/>

        <Outlet />
      
        <Footer />
     
        
      </>
    );
  };
  
  export default  LayoutPerfil     ;
  