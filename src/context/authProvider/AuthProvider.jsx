/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserInfo = userInfo => {
    return updateProfile(auth.currentUser, userInfo);
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })

    return () => {
      unsubscribe();
    }
  }, [])

  const data = {
    signInWithGoogle,
    user,
    setUser,
    loading,
    setLoading,
    updateUserInfo,
    signUp
  }

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;