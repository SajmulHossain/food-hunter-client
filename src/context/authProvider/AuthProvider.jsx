/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";

const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const data = {
    signInWithGoogle
  }

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;