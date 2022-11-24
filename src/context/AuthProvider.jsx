import React, { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../pages/firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name:'sultan', email:'mdsultan@gmail.com'})

    // user create with email and password
    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {user, userRegister}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;