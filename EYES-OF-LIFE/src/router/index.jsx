import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/LayoutHome/Layouts";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import SignIn from "../components/SingIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import LayoutAppBarSignIn from "../layouts/LayoutAppBarSignIn/LayoutAppBarSignIn";
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
    element: <LayoutAppBarSignIn />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      }
    ]
  },
 
]);

export default router;
