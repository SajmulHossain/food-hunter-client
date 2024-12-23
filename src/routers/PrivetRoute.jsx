/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {
  const { user } = useAuth();

  if(user) {
    return children;
  }

  return <Navigate to='/' replace />
};

export default PrivetRoute;