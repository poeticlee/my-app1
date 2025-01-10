import React from "react"; 
import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage";
import Default from "./layout/Default";
import Auth from "./layout/Auth";
import SignUppage from "./signUppage";
import ForgotP from "./forgotP";
import LoggedIn from "./layout/LoggedIn";
import PassReset from "./passReset";
import Login from "./Login";
import CreateEvent from "./createEvent";
import CreateEvent2 from "./createEvent2";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Default/>,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
    ],
  },
  {
    path: "",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUppage />,
      },
      {
        path: "forgot-password",
        element: <ForgotP />,
      },
      {
        path: "password-reset",
        element: <PassReset />,
      },
    ],
  },
  {
    path: "loggedIn",
    element: <LoggedIn/>
    
    },
    
  {
    path: "createEvent2",
    element: <CreateEvent2/>
    
    },
 
  {
    path: "createEvent",
    element: <CreateEvent/>
    
    },
 

]);

export default router;
