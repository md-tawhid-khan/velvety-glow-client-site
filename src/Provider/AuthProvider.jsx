import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";


 const AuthContext=createContext(null)
 const auth=getAuth(app)

const AuthProvider = ({children}) => {

  console.log(auth)
     
    const authInfo='hello world'
    
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider >
    );
};

export default AuthProvider;