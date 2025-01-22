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
import DashBoard from "./dashBoard";
import Calendarni from "./calendar";
import Otppage from "./otppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
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
        path: "otppage",
        element: <Otppage />,
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
    path: "",
    element: <LoggedIn />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "createEvent",
        element: <CreateEvent />,
      },
      {
        path: "viewCalendar",
        element: <Calendarni />,
      },
    ],
  },
]);

export default router;
