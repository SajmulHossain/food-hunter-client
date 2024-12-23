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
import PrivetRoute from "./PrivetRoute";
import FoodDetails from "../pages/FoodDetails";

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
        element: (
          <PrivetRoute>
            <AddFoods />
          </PrivetRoute>
        ),
      },
      {
        path: "/manage-foods",
        element: (
          <PrivetRoute>
            <ManageFoods />
          </PrivetRoute>
        ),
      },
      {
        path: "/food-request",
        element: (
          <PrivetRoute>
            <FoodRequest />
          </PrivetRoute>
        ),
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
      {
        path: '/foods/:id', 
        element: <PrivetRoute>
          <FoodDetails />
        </PrivetRoute>
      }
    ],
  },
]);

export default routes;
