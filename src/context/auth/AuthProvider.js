import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'

import { app } from '../../firebase/firebase'


const AuthContext = createContext()
const auth = getAuth(app)



export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const emailRegister = async(email, password) => {
    setLoading(true)
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const emailLogin =async (email, password) => {
    setLoading(true)
    return await signInWithEmailAndPassword(auth, email, password)
  }

  
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  console.log(currentUser)

  const updateUser=(userInfo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo)
  }
  
  const forgetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }


  const googleLogin = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    emailRegister,
    emailLogin,
    logout,
    resetPassword,
    forgetPassword,
    googleLogin,
    updateUser,
    loading, 
    setLoading,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider