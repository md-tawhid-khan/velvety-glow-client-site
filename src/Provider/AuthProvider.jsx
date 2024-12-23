import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios"
import useAxiosPublic from "../CustomeHook/useAxiosPublic";



export const AuthContext=createContext(null)

 const auth=getAuth(app)
 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  const axiosPublic=useAxiosPublic()

const createUser=(email,password)=>{
    setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

const signin=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}
  
const logOut=async()=>{
  setLoading(true)
  await axios.get(`${import.meta.env.VITE_API_URL}/logOut`,{withCredentials:true})
  return signOut(auth)
}

const  signInGoogle=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
}



const updateUsersProfile=(image,name)=>{
  setLoading(true)
  return updateProfile(auth.currentUser,{
    displayName:name,
    photoURL:image
  })
}

const getToken= async(email)=>{
  const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email},{withCredentials:true})
  return data
}

//-------- mutation use to put data in user collection ------------



useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    console.log('currentUser---------->', currentUser)
    getToken(currentUser.email)
    setLoading(false)
  })
  return ()=>{
    return unsubscribe()
  }
},[])


     
    const authInfo={
      createUser,
      signin,
      loading,
      logOut,
      signInGoogle,
      user,
      setUser,
      updateUsersProfile
    }
    
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider >
    );
};

export default AuthProvider;