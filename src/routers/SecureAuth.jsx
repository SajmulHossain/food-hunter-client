/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const SecureAuth = ({children}) => {
  const { user } = useAuth();

  if(user) {
    return <Navigate to='/' replace />
  }
  return children;
};

export default SecureAuth;