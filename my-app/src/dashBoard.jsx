import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Table} from "antd";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PopUp from "./popUp";

ChartJS.register(ArcElement, Tooltip, Legend);

function DashBoard() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Load token from localStorage
  const [events, setEvents] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  
  
 const triggerModal=() =>{
 setModal(!modal)

 }

 const getTriggerData =(data) =>{
 setModal(data)
console.log(data)
 }
  // Doughnut Chart Data
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
      legend: { position: "bottom" },
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

  // Calculate Pending Events
  const eventPending = () => {
    return (user?.eventCreated || 0) - (user?.eventCompleted || 0);
  };

  // Current Date
  const getCurrentDate = () => {
    const options = { weekday: "long", month: "long", day: "2-digit" };
    return new Date().toLocaleDateString("en-US", options);
  };

  // Fetch user and events on mount
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
   const getAllEvents=()=>{
    if (token) {
      axios
        .get("https://jobbertrack.onrender.com/api/events", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setEvents(response.data.event || []);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
          if (error.response?.status === 401) {
          
            navigate("/login");
          }
        });
    }
   }

   // Fetch events from API using the token
    useEffect(() => {
    getAllEvents()
  }, [token, navigate]);


  const getCreateEventTrigger = (data)=>{
    getAllEvents()
    console.log(data)
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleShare = (events) => {
    const eventId = events.id; // Assuming each event has a unique `id`
    const shareUrl = `${window.location.origin}/event/${eventId}`; // Example URL
  
    if (navigator.share) {
      navigator
        .share({
          title: `You're Invited: ${events.title}`,
          text: `Join the event: ${events.title}. Click the link to accept or decline.`,
          url: shareUrl,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Event link copied to clipboard!");
    }
    console.log(event.id)
  };
  
  // Table Columns
  const columns = [
    { title: "Event Name", dataIndex: "title", key: "title" },
    { title: "Guest Invited", dataIndex: "capacity", key: "capacity" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Organizer",
      dataIndex: "organizer",
      key: "organizer",
      render: (organizer) => organizer?.email || "N/A",
    },
    {
      title: "",
      dataIndex: "share",
      key: "share",
      render: (_, record) => (
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
          onClick={() => handleShare(record)}
        >
          Share
        </button>
      ),
    },
  ];
  
  

  return (

    <>
    
    <div className="dashboard-container flex flex-col p-4">
    <button
        onClick={triggerModal}
        className="bg-[#6460FF] p-[5px] text-white rounded-md mt-10 w-fit ml-auto"
      >
        Create Event
      </button>
      {/* Header */}
      <div className="p-4 border-b">
        <p className="text-[#ABABAB]">{getCurrentDate()}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[28px] font-bold">
            <span>Good Morning, {user.firstname}!</span>
            <img src="/src/assets/smilyiny.png" alt="smiley" className="ml-2" />
          </div>
          <button className="flex items-center border px-4 py-2 space-x-2">
            Share Event <img src="/src/assets/shareIcon.png" alt="share" />
          </button>
        </div>
      </div>

      {/* Event Stats */}
      <div className="stats flex justify-center gap-[20px] bg-slate-100 p-[10px] mt-4 rounded-[20px] w-[50%]">
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
      

      {/* Chart and Events Table */}
      <div className="flex flex-col mt-6">
        
        <Table
          dataSource={events.map((event, index) => ({
            key: event._id || index,
            ...event,
          }))}
          columns={columns}
          className="mt-6"
        />
       </div>
      </div>
      <div className="w-[25%] h-[300px]">
  <Doughnut data={dataDou} options={options} />
</div>

  <PopUp  trigger={modal} triggerFn={getTriggerData} createEventTrigger={getCreateEventTrigger} />
    </>
  );
}

export default DashBoard;
