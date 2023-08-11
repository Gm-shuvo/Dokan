import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { app } from "../../firebase/firebase";
import { TailSpin } from "react-loader-spinner";

const AuthContext = createContext();
const auth = getAuth(app);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const emailRegister = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const emailLogin = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  console.log(currentUser);

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthenticated(true);
      setLoadingAuth(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    emailRegister,
    emailLogin,
    logout,
    resetPassword,
    forgetPassword,
    googleLogin,
    updateUser,
    loadingAuth,
    setLoadingAuth,
    updateProfile,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {loadingAuth ? (
        <TailSpin
          height="60"
          width="60"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
