import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Signin from "../Pages/Authentication/SingIn/Signin";
import Registration from "../Pages/Authentication/Registration/Registration";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            index: 1,
            element:<HomePage/>
        },
      ],  
    },
    {
      path:"/sign-in",
      element:<Signin/>
    } ,
    {
      path:"/sign-up",
      element:<Registration/>
    }
   
  ]);

export default router;