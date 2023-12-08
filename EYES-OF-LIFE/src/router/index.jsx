import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Layouts";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import SingIn from "../components/SingIn/SingIn";

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
    ],
  },
  {
    path: "/sing-in",
    element: <SingIn />,
  }
]);

export default router;
