import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '../Config/Firebase'
function AuthContextProvider({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => userStatus()

  }, [])


  const SignUp = async (email, password) => {

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log("SignUp Successfully :", email);
      return { success: true }

    }
    catch (error) {
      console.log(error.code, error.message);
      return { success: false, error }

    }

  }
  const Login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      console.log("Login Successfully :", email);
      return { success: true }

    }
    catch (error) {
      console.log(error.code, error.message);
      return { success: false, error }

    }
  }


  const LogOut = async () => {
    try {
      await signOut(auth)
      setUser(null)
    }
    catch (error) {
      console.log(error);

    }
  }

  return (
    <AuthContext.Provider value={{ SignUp, Login, user, LogOut }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContextProvider