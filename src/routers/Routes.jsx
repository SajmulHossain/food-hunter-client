import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Foods from "../pages/Foods";
import AddFoods from "../pages/AddFoods";
import ManageFoods from "../pages/ManageFoods";
import FoodRequest from "../pages/FoodRequest";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SecureAuth from "./SecureAuth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/add-foods",
        element: <AddFoods />,
      },
      {
        path: "/manage-foods",
        element: <ManageFoods />,
      },
      {
        path: "/food-request",
        element: <FoodRequest />,
      },
      {
        path: "login",
        element: (
          <SecureAuth>
            <Login />
          </SecureAuth>
        ),
      },
      {
        path: "sign-up",
        element: (
          <SecureAuth>
            <SignUp />
          </SecureAuth>
        ),
      },
    ],
  },
]);

export default routes;
