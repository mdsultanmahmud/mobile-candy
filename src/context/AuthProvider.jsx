import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider,
    signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut
} from 'firebase/auth'
import app from '../pages/firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider
    // user create with email and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user information 
    const userUpdated = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // create account with goggle 
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    //login with email and password
    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout the user
    const Logout = () =>{
        return signOut(auth)
    }
    // find logged user  
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                console.log('current user', currentUser)
                setUser(currentUser)
            }else{
                setUser({})
            }
        })

        return ()=> unsubscribe()
    } ,[])

    const AuthInfo = { user, userRegister, userUpdated,googleLogin,
        LoginUser,Logout }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;