/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        await axios.post(
          "https://ph-assignment-11-server-phi.vercel.app/jwt",
          { email: currentUser?.email },
          { withCredentials: true }
        );
        setLoading(false);
      } else {
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true,
        });
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const data = {
    signInWithGoogle,
    user,
    setUser,
    loading,
    setLoading,
    updateUserInfo,
    signUp,
    logout,
    login,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
