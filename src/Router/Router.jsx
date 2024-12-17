import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            index: 1,
            element:<HomePage/>
        }
      ]
    },
  ]);

export default router;