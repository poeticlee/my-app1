import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import design from "../assets/auth-bg.png";

export default function Auth() {
  const authToken = localStorage.getItem('token')

  if(authToken !== null){
    return <Navigate to={'dashboard'} />
  }
  return (
    <div className="grid  lg:grid-cols-[5.5fr,6.5fr] w-screen gap-3 place-items-center h-screen overflow-hidden relative">
      <div className="main bg-white">
        <Outlet></Outlet>

        <div className=" absolute right-0 w-[55%]  top-0 ">
          <img
            src={design}
            alt=""
            className="hidden lg:block h-full object-contain  spinbg"
          />
          <img
            src="/src/assets/reallogo.png"
            alt="Logo"
            className=" hidden lg:block absolute top-1/2 translate-x-1/2 -translate-y-1/2 right-1/2 h-[190px] w-[20%]"
          />
        </div>
      </div>
    </div>
  );
}
