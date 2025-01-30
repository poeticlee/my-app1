import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Table } from "antd";
import { NavLink } from "react-router-dom";
import axios from "axios"; // For API requests
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashBoard() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(""); // State to store the token
  const [events, setEvents] = useState([]); // State for fetched data


  const navigate = useNavigate();

  // Chart Data
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

  // Function to calculate pending events
  const eventPending = () => {
    return (user?.eventCreated || 0) - (user?.eventCompleted || 0);
  };

  // Get current date
  const getCurrentDate = () => {
    const options = { weekday: "long", month: "long", day: "2-digit" };
    return new Date().toLocaleDateString("en-US", options);
  };

  // Fetch user and token from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    const authToken = localStorage.getItem("token");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    if (authToken) {
      setToken(authToken);
    }
  }, []);

  // Fetch events from API using the token
  useEffect(() => {
    if (token) {
      axios
        .get("https://jobbertrack.onrender.com/api/events", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setEvents(response.data);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
          if (error.response && error.response.status === 401) {
            
            navigate("/login");
          }
        });
    }
  }, [token]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const columns = [
    {
      title: "Event Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => new Date(text).toLocaleDateString(), // Format the date
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image?.url ? <Image src={image.url} alt={image.altText} width={50} /> : "No Image",
    },
    {
      title: "Organizer Email",
      dataIndex: "organizer",
      key: "organizer",
      render: (organizer) => organizer?.email || "N/A",
    },
  ];

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
          <NavLink
            to="/viewCalendar"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View Calendar
            </button>
          </NavLink>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
            See All
          </button>
        </div>
      </div>

      <Table
        dataSource={events.map((event, index) => ({
          key: event._id || index, // Ensure each row has a unique key
          ...event,
        }))}
        columns={columns}
      />

      <div className="flex mt-10">
        <div className="w-96 mr-10">
          <p className="font-bold text-[24px] mb-4">Invite Update</p>
          <Doughnut data={dataDou} options={options} />
        </div>
        <div>
          <p className="font-bold text-[24px] mb-4">Recent Activity</p>
          <ul>
            {events.slice(0, 5).map((event) => (
              <li key={event.id} className="mb-2">
                {event.name} - {event.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
