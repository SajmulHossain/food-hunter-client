import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Foods from "../pages/Foods";
import AddFoods from "../pages/AddFoods";
import ManageFoods from "../pages/ManageFoods";
import FoodRequest from "../pages/FoodRequest";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivetRoute from "./PrivetRoute";
import FoodDetails from "../pages/FoodDetails";
import UpdateFood from "../pages/UpdateFood";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
            <Login />
        ),
      },
      {
        path: "sign-up",
        element: (
            <SignUp />
        ),
      },
      {
        path: '/food/:id', 
        element: <FoodDetails />
      },
      {
        path: '/food/update/:id',
        element: <PrivetRoute>
          <UpdateFood />
        </PrivetRoute>
      }
    ],
  },
]);

export default routes;
