import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext();
const auth = getAuth(app)

 const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider;
    const axiosPublic = useAxiosPublic();
    const createUser =(email, password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email , password)
    }
    const signIn = (email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn =()=>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    const logOut = ()=>{
      return signOut(auth);
    }

    const updateUserProfile = (name, photo)=>{
      return updateProfile(auth.currentUser, {
        displayName :name, photoURL:photo
      });
    }

    useEffect(()=>{
      const unsubsScribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        if(currentUser){
          const userInfo = {email: currentUser.email};
          axiosPublic.post('/jwt', userInfo)
          .then(response=>{
            if(response.data.token){
              localStorage.setItem('access-token', response.data.token)
            }
            else {
              localStorage.removeItem('access-token');
            }
          })
        }
        setLoading(false);

      })
      return()=>{
        return unsubsScribe();
      }

    },[axiosPublic])
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile


    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
