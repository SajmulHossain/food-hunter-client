/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";

const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (email, password) => {
    return signInWithPopup(auth, email, password);
  }

  return (
    <AuthContext.Provider value={'kire'}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;