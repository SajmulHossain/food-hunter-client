/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {
  const { user } = useAuth();
  const {pathname} = useLocation();

  if(user) {
    return children;
  }

  return <Navigate to='/login' state={pathname} replace />
};

export default PrivetRoute;