import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React ,{ useContext, useState, useEffect} from 'react'
import app, { auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login
    }
  return (
      <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
  )
}

export default AuthProvider;