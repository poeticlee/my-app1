import React, { useState,useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Table } from "antd";
//import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
//import Modal from "./ui-components/Modal";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashBoard() {


  


  const dataDou = {
    labels: ["Accepted", "Declined"],
    datasets: [
      {
        label: "Event Status",
        data: [70, 30],
        backgroundColor: ["#4CAF50", "#FF5252"],
        borderColor: ["#FFFFFF", "#FFFFFF"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value}%`;
          },
        },
      },
    },
  };



  const eventPending = () => {
    return user.eventCreated - user.eventCompleted;
  };

  const getCurrentDate = () => {
    const options = { weekday: "long", month: "long", day: "2-digit" };
    return new Date().toLocaleDateString("en-US", options);
  };


  const [user, setUser] = useState(null);



  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []); // Make sure this effect is run only once when the component mounts.
  

  if (!user) {
    return <p>Loading...</p>;
  }

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Number of RSVP",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Guest Invited",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      dataIndex: "address",
      key: "address",
    },
  ];

 // const [isModalOpen, setModalOpen] = useState(false);

 // const handleOpenModal = () => setModalOpen(true);
 // const handleCloseModal = () => setModalOpen(false);

//  const handleCreateEvent = (e) => {
  //  e.preventDefault();
 //   alert("Event Created Successfully!");
 //   setModalOpen(false);
 // };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="p-4 border-b">
        <div>
          <p className="text-[#ABABAB]">{getCurrentDate()}</p>
        </div>
        <div className="flex justify-between font-bold">
          <div className="flex text-[28px] font-bold items-center space-x-2">
            Good Morning! &nbsp; <span>{user.firstname}</span>
            <span>
              <img src="/src/assets/smilyiny.png" alt="smiley" />
            </span>
          </div>
          <button className="flex items-center space-x-2 border p-2">
            Share Event <img src="/src/assets/shareIcon.png" alt="share icon" />
          </button>
        </div>
      </div>

   

      <div className="flex justify-center gap-[20px] bg-slate-100 p-[10px] w-[40%] rounded-[20px]">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/layout1.png" alt="icon" />
          <span className="text-[20px] text-[#6460FF] font-bold">
            {user.eventCreated}
          </span>
          <p>Event Created</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/src/assets/llower.png" alt="icon" />
          <span className="text-[20px] text-[#6460FF] font-bold">
            {user.eventCompleted}
          </span>
          <p>Event Completed</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/src/assets/dial.png" alt="icon" />
          <span className="text-[20px] text-[#6460FF] font-bold">
            {eventPending()}
          </span>
          <p>Event Pending</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 mt-20">
        <div className="flex items-center space-x-4">
          <p className="text-2xl font-bold text-gray-700">Events</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="this-year">This Year</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
        <NavLink     to="/viewCalendar"   className={({ isActive }) => isActive ? "active" : "" }>  <button       className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            View Calendar
          </button></NavLink>

         


          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
            See All
          </button>
        </div>
      </div>

      <Table dataSource={dataSource} columns={columns} />

      <div className="flex">
        <div className="w-96 gap-[150px] mt-10">
          <p className="font-bold text-[24px] mb-4">Invite Update</p>
          <Doughnut data={dataDou} options={options} />
        </div>
        <div>
          <p className="font-bold text-[24px] mb-4">Recent Activity</p>
        </div>
      </div>
    </div>
  );
}