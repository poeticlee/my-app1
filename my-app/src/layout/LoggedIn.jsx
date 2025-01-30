import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const LoggedIn = () => {
  //const authToken = localStorage.getItem("token");
  const token = localStorage.getItem("token"); // Retrieve token from localStorage

  // Handle image file selection and preview

  // Sign out the user and redirect to login
  const signOut = () => {
    localStorage.clear();
    location.replace("/login");
  };

  // Redirect to login if token is missing
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 grid grid-cols-[1fr,4fr] w-[300px] gap-3 place-items-center h-screen">
        <aside className="text-gray-500 p-5 absolute top-10 left-1">
          <img
            src="/src/assets/logoEvent.png"
            alt="Logo"
            className="hidden lg:block h-[25px] w-[40px]"
          />
          <ul className="grid gap-3">
            <NavLink className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
              Dashboard
            </NavLink>
          </ul>
          <ul className="mt-[400px] grid gap-4">
            <NavLink className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
              Settings
            </NavLink>
            <div
              onClick={signOut}
              className="text-red-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded"
            >
              Log out
            </div>
          </ul>
        </aside>
      </div>

      {/* Header Section */}
      <header className="flex items-center justify-between h-[80px] p-6 fixed bg-white z-50 top-0 right-0 w-[calc(100vw-300px)]">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md w-[500px] focus:outline-none focus:ring focus:ring-blue-300 border-cyan-600"
        />
      
      </header>

      {/* Popup for Event Creation */}

      {/* Main Content */}
      <div className="absolute pt-10 right-0 top-0 w-[calc(100vw-300px)] p-10">
        <Outlet />
      </div>
    </>
  );
};

export default LoggedIn;
