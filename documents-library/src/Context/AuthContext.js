import { createUserWithEmailAndPassword } from 'firebase/auth';
import React ,{ useContext, useState, useEffect} from 'react'
import app,{ auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    console.log('useAuth called');
    return useContext(AuthContext)
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    
    function signup(email, password) {
        console.log('signup called');
        return createUserWithEmailAndPassword(auth, email, password)
     }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }
  return (
      <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider;