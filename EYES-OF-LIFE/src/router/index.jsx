import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Layouts";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import SignIn from "../components/SingIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
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
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      }
    ],
  },
]);

export default router;
