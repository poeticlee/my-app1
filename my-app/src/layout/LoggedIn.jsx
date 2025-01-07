import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    picture: "https://via.placeholder.com/40", // Placeholder user image
  };

  return (
    <div className="grid grid-cols-[1fr,4fr]  w-screen gap-3 place-items-center h-screen relative ">
      {/* Sidebar */}
      <aside className=" text-gray-500 p-5 absolute top-10 left-1">
        <img
          src="/src/assets/logoEvent.png"
          alt="Logo"
          className=" hidden lg:block  h-[25px]  w-[40px] "
        />
        <ul className="space-y-3">
          <li className="text-gray-500 bg-white hover:text-white hover:bg-blue-500 cursor-pointer p-2 rounded">
            Dashboard
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-blue-500 cursor-pointer p-2 rounded">
            My Events
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-blue-500 cursor-pointer p-2 rounded">
            Guest Managements
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-blue-500 cursor-pointer p-2 rounded">
            Invitations
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-blue-500 cursor-pointer p-2 rounded">
            Event Analytics
          </li>
        </ul>

        <ul className="mt-[400px]">
          <li className="text-gray-500 bg-white hover:text-white hover:bg-blue-500 cursor-pointer p-2 rounded">
            Settings
          </li>
          <li className="text-red-500 bg-white hover:text-white hover:bg-blue-500 cursor-pointer p-2 rounded">
            Log out
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between  absolute top-10 right-[80px]">
        {/* Topbar */}
        <header className="flex  p-4 gap-[650px]">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md w-[500px] focus:outline-none focus:ring focus:ring-blue-300 border-cyan-600"
          />
          <div className="flex gap-[30px]">
            <button className="bg-blue-700 p-[5px] text-white  rounded-md">
              Create Event
            </button>
            {/* User Info */}
            <div className="flex items-center space-x-3 w-[117px]  ">
              <img
                src={user.picture}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-5 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
