import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/LayoutHome/Layouts";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import SignIn from "../components/SingIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import LayoutSignIn from "../Layouts/LayoutSignIn/LayoutSignIn";
import LayoutPerfil from "../Layouts/LayoutPerfil/LayoutPerfil";
import MyMessages from "../components/MyMessages/MyMessages";
import ProfilePhotographer from "../components/ProfilePhotographer/ProfilePhotographer";
import MyDates from "../components/MyDates/MyDates";
import MyGalery from "../components/MyGalery/MyGalery";
import MyEvents from "../components/MyEvents/MyEvents";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },

      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  

  {
    path: "/",
    element: <LayoutSignIn />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      }
    ]
  },
  {
    path: "/",
    element: <LayoutPerfil/>,
    children: [
      {
        path: "/profile-photographer",
        element: <ProfilePhotographer />,
      },
      {
        path: "/my-messages",
        element: <MyMessages />,
      },
      {
        path: "/my-dates",
        element: <MyDates />,
      },
      {
        path: "/my-galery",
        element: <MyGalery />,
      },
      {
        path: "/my-events",
        element: <MyEvents />,
      },
    ], 
    
    

    
  },
 
]);

export default router;
