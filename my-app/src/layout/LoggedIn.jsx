import React, { useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoggedIn = () => {



  const [isOnline, setIsOnline] = useState(false);

  const handleToggle = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };

      

  const [isOpen, setIsOpen] = useState(false);

 

  const [selectedImage, setSelectedImage] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const authToken = localStorage.getItem("token");

  // Toggle popup visibility
  const togglePopup = () => setIsOpen((prev) => !prev);

  // Handle image file selection and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Clear selected image preview
  const clearImage = () => setSelectedImage(null);

  // Sign out the user and redirect to login
  const signOut = () => {
    localStorage.clear();
    location.replace("/login");
  };

  // Submit form data
  const onSubmit = async (data) => {
    try {
      const formData = { ...data, image: selectedImage,isVirtual: isOnline  }; // Include image in form data
      await axios.post(
        "https://jobbertrack.onrender.com/api/events",
        formData,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      toast.success("Event created successfully!");
      reset(); // Clear form fields
      clearImage(); // Clear the selected image
      togglePopup(); // Close the popup
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again!"
      );
    }
  };

  // Redirect to login if token is missing
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ToastContainer />
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
        <button
          onClick={togglePopup}
          className="bg-[#6460FF] p-[5px] text-white rounded-md"
        >
          Create Event
        </button>
      </header>

      {/* Popup for Event Creation */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[750px]">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Create Event</h2>
              <button
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
           

     <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      {/* Event Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Event Name
        </label>
        <input
          type="text"
          {...register("eventName", { required: true })}
          placeholder="Enter event name"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          {...register("description", { required: true })}
          placeholder="Enter description"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Event Date and Time */}
      <div className="flex gap-3 mb-4">
        <div className="w-[34%]">
          <label className="block text-sm font-medium text-gray-700">
            Event Date
          </label>
          <input
            type="date"
            {...register("eventDate", { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-[33%]">
          <label className="block text-sm font-medium text-gray-700">
            Event Time
          </label>
          <input
            type="time"
            {...register("eventTime", { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-[33%]">
          <label className="block text-sm font-medium text-gray-700">
            Event Duration
          </label>
          <select
            {...register("eventDuration", { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select duration</option>
            <option value="30mins">30 mins</option>
            <option value="45mins">45 mins</option>
            <option value="1hr">1 hour</option>
            <option value="1hr30mins">1 hour 30 mins</option>
            <option value="2hr">2 hours</option>
            <option value="2hr30mins">2 hours 30 mins</option>
            <option value="3hr">3 hours</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          {...register("location")}
          placeholder="Enter location"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Capacity */}
      <div className="flex mb-4">
        <div className="w-[48%] mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Capacity
          </label>
          <input
            type="text"
            {...register("capacity")}
            placeholder="Enter capacity"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Online/Offline Toggle */}
        <div className="flex items-center justify-between w-[48%] mb-4">
          <span className="text-gray-700">
            {isOnline ? "True" : "false"}
          </span>
          <div
            onClick={handleToggle}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isOnline ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Image Upload */}
      <div className="flex flex-col p-6">
        <label className="mb-4 block text-sm font-medium">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
      </div>

     

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={togglePopup}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Event
        </button>
      </div>
    </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="absolute pt-10 right-0 top-0 w-[calc(100vw-300px)] p-10">
        <Outlet />
      </div>
    </>
  );
};

export default LoggedIn;
