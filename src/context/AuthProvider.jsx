import React, { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider } from 'firebase/auth'
import app from '../pages/firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name:'sultan', email:'mdsultan@gmail.com'})
    const provider = new GoogleAuthProvider 
    // user create with email and password
    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user information 
    const userUpdated = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    const AuthInfo = {user, userRegister, userUpdated}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;