import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios"
import useAxiosPublic from "../CustomeHook/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";



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
const {mutateAsync}=useMutation({
  mutationFn:async(userInfo)=>{
  const {data}= await axiosPublic.patch('/user',userInfo)
  // console.log(data)
  return data
  }
})

//---------- save user information ----------

const userInformation =async(user)=>{
  const currentUser={
    name:user?.displayName,
    email:user?.email,
    image:user?.photoURL,
    role:'user',
    status:'varified',
  }
  if(user.displayName){
    // console.log('user for send collection -----', currentUser)
  await mutateAsync(currentUser)
  }
  
}


useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,async currentUser=>{
    setUser(currentUser)
    console.log('currentUser---------->', currentUser)
    if(currentUser){
     await getToken(currentUser?.email)
    await userInformation(currentUser)
    }  
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