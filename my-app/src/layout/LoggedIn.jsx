import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataDou = {
  labels: ["Accepted", "Declined"],
  datasets: [
    {
      label: "Event Status",
      data: [70, 30], // Replace with your dynamic data
      backgroundColor: ["#4CAF50", "#FF5252"], // Colors for Accepted and Declined
      borderColor: ["#FFFFFF", "#FFFFFF"], // Optional white borders
      borderWidth: 2, // Thickness of borders
    },
  ],
};

// Chart Options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom", // Legend position
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          const value = tooltipItem.raw;
          return `${tooltipItem.label}: ${value}%`; // Customize tooltip text
        },
      },
    },
  },
};
const App = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    picture: "https://via.placeholder.com/40", // Placeholder user image
    eventCreated: "5",
    eventCompleted: "3",
  };

  const eventPending = () => {
    return user.eventCreated - user.eventCompleted;
  };

  const getCurrentDate = () => {
    const options = { weekday: "long", month: "long", day: "2-digit" };
    return new Date().toLocaleDateString("en-US", options);
  };

  // Extract first name
  const getFirstName = () => {
    return user.firstName;
  };

 


  const data = [
    {
      event: "Conference 2025",
      noRsvp: 100,
      guestInvited: 150,
      status: "Processing", // Options: "Processing", "Pending", "Completed"
      action:"Processing"
    },
    {
      event: "Product Launch",
      noRsvp: 50,
      guestInvited: 80,
      status: "Pending",
    },
    {
      event: "Annual Meetup",
      noRsvp: 200,
      guestInvited: 250,
      status: "Completed",
    },
  ];
  

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-[1fr,4fr] w-screen gap-3 place-items-center h-screen relative">
      {/* Sidebar */}
      <aside className=" text-gray-500 p-5 absolute top-10 left-1">
        <img
          src="/src/assets/logoEvent.png"
          alt="Logo"
          className=" hidden lg:block  h-[25px]  w-[40px] "
        />
        <ul className="space-y-3">
          <li className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
            Dashboard
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
            My Events
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
            Guest Managements
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
            Invitations
          </li>
          <li className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
            Event Analytics
          </li>
        </ul>

        <ul className="mt-[400px]">
          <li className="text-gray-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
            Settings
          </li>
          <li className="text-red-500 bg-white hover:text-white hover:bg-[#6460FF] cursor-pointer p-2 rounded">
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
            <button
              onClick={togglePopup}
              className="bg-[#6460FF] p-[5px] text-white  rounded-md"
            >
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
                <p className="text-sm font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Date and Greeting */}
        <div className="p-4  border-b">
          <div>
            <p className="text-[#ABABAB] ">{getCurrentDate()}</p>
          </div>
          <div className="flex justify-between font-bold">
            <div className=" flex text-[28px] font-bold items-center space-x-2">
              Good Morning! <span>{getFirstName()}</span>
              <span>
                <img src="/src/assets/smilyiny.png" alt="" />
              </span>
            </div>
            <button className=" flex items-center space-x-2 border p-2">
              Share Event <img src="/src/assets/shareIcon.png" alt="" />
            </button>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center gap-[20px] bg-slate-100 p-[10px] w-[40%] rounded-[20px] ">
          <div className="flex items-center space-x-2 ">
            <img src="/src/assets/layout1.png" alt="" />
            <span className="text-[20px]  text-[#6460FF] font-bold">
              {user.eventCreated}
            </span>{" "}
            <p>Event Created</p>
          </div>
          <div className="flex items-center space-x-2 ">
            <img src="/src/assets/llower.png" alt="" />{" "}
            <span className="text-[20px] text-[#6460FF] font-bold">
              {" "}
              {user.eventCompleted}
            </span>{" "}
            <p>Event Completed</p>
          </div>
          <div className="flex items-center space-x-2 ">
            <img src="/src/assets/dial.png" alt="" />
            <span className="text-[20px] text-[#6460FF] font-bold">
              {" "}
              {eventPending()}{" "}
            </span>
            <p>Event Pending</p>
          </div>
        </div>

        {/* Header Section */}
        <div className="flex justify-between items-center mb-4 mt-20">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-bold text-gray-700 ">Events</p>
            <select className="border border-gray-300 rounded-md px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="this-year">This Year</option>
            </select>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View Calendar
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
              See All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto max-h-[300px] border border-gray-300 rounded-md">
          <table className="min-w-full bg-white border-collapse border border-gray-200">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100 text-[16px]">
                <th className="py-2 px-4 border-b text-left text-gray-700 font-bold">
                  Event Name
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-700 font-bold">
                  Number of RSVP
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-700 font-bold">
                  Guest Invited
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-700 font-bold">
                  Status
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-700 font-bold">
                  Action
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-gray-600">
                    {item.event}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {item.noRsvp}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {item.guestInvited}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                      {/* Conditional Buttons */}
                      {item.status === "Processing" && (
                      <button className="py-1 px-3 bg-blue-200 text-blue-700 text-sm font-medium rounded">
                        Processing
                      </button>
                    )}
                    {item.status === "Pending" && (
                      <button className="py-1 px-3 bg-red-200 text-red-700 text-sm font-medium rounded">
                        Pending
                      </button>
                    )}
                    {item.status === "Completed" && (
                      <button className="py-1 px-3 bg-green-200 text-green-700 text-sm font-medium rounded">
                        Completed
                      </button>
                    )}
                  </td>
                  <td className=" flex py-2 px-4 border-b text-gray-600">
                  <p>edit</p>  <p>view</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex">
          <div className="w-96 gap-[150px] mt-10">
            <p className="   font-bold text-[24px] mb-4">Invite Update</p>
            <Doughnut data={dataDou} options={options} />
          </div>
          <div>
            {" "}
            <p className="font-bold text-[24px] mb-4">Recent Activity</p>
          </div>
        </div>
        {/* Content Area */}
        <div className="flex-1 p-5 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
