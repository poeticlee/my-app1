

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// eslint-disable-next-line react/prop-types
export default function PopUp( {trigger,triggerFn,createEventTrigger}) {
 
  const [isOnline, setIsOnline] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const token = localStorage.getItem("token");
 


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const togglePopup = () => { 
  triggerFn(!trigger)
 }

  const handleToggle = () => setIsOnline((prev) => !prev);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
    
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => setSelectedImage(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("capacity", data.capacity);
      formData.append("description", data.description);
      formData.append("date", data.eventDate);
      formData.append("duration", data.eventDuration);
      formData.append("title", data.eventName);
      formData.append("time", data.eventTime);
      formData.append("file", selectedImage);
      formData.append("isVirtual", isOnline);
      formData.append("location", data.location);

      const response = await axios.post(
        "https://jobbertrack.onrender.com/api/events",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );

      toast.success("Event created Successfully!");

      createEventTrigger()
      togglePopup()
      reset();
      clearImage();
    
      return response.data;
    } catch (error) {
      console.error("Error sending event data:", error.message);
      toast.error(error.message);
      throw error;
    }
  };

  return (
    <>
      <ToastContainer />
      {trigger && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[750px]">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Create Event</h2>
              <button
                onClick={togglePopup}
                aria-label="Close popup"
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                {/* Event Name */}
                <div className="mb-4">
                  <label
                    htmlFor="eventName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Name
                  </label>
                  <input
                    id="eventName"
                    type="text"
                    {...register("eventName", {
                      required: "Event name is required",
                    })}
                    placeholder="Enter event name"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                  {errors.eventName && (
                    <p className="text-red-500 text-sm">
                      {errors.eventName.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    {...register("description", {
                      required: "Description is required",
                    })}
                    placeholder="Enter description"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Event Date, Time, and Duration */}
                <div className="flex gap-3 mb-4">
                  <div className="w-[34%]">
                    <label
                      htmlFor="eventDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      {...register("eventDate", {
                        required: "Event date is required",
                      })}
                      className="mt-1 p-2 border border-gray-300 rounded"
                    />
                    {errors.eventDate && (
                      <p className="text-red-500 text-sm">
                        {errors.eventDate.message}
                      </p>
                    )}
                  </div>
                  <div className="w-[33%]">
                    <label
                      htmlFor="eventTime"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Time
                    </label>
                    <input
                      id="eventTime"
                      type="time"
                      {...register("eventTime", {
                        required: "Event time is required",
                      })}
                      className="mt-1 p-2 border border-gray-300 rounded"
                    />
                    {errors.eventTime && (
                      <p className="text-red-500 text-sm">
                        {errors.eventTime.message}
                      </p>
                    )}
                  </div>
                  <div className="w-[33%]">
                    <label
                      htmlFor="eventDuration"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Duration
                    </label>
                    <select
                      id="eventDuration"
                      {...register("eventDuration", {
                        required: "Event duration is required",
                      })}
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    >
                      <option value="">Select duration</option>
                      <option value="30mins">30 m</option>
                      <option value="45mins">45 m</option>
                      <option value="1hr">1 h</option>
                      <option value="1hr30mins">1 h 30 m</option>
                      <option value="2hr">2 hours</option>
                      <option value="2hr30mins">2 h 30 m</option>
                      <option value="3hr">3 h</option>
                    </select>
                    {errors.eventDuration && (
                      <p className="text-red-500 text-sm">
                        {errors.eventDuration.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    {...register("location")}
                    placeholder="Enter location"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Capacity and Online/Offline Toggle */}
                <div className="flex mb-4 gap-4">
                  <div className="w-[48%]">
                    <label
                      htmlFor="capacity"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Capacity
                    </label>
                    <input
                      id="capacity"
                      type="number"
                      {...register("capacity")}
                      placeholder="Enter capacity"
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="w-[48%] flex items-center justify-between opacity-0">
                    <label className="text-sm font-medium text-gray-700">
                      Online Event
                    </label>
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
                <div className="mb-4">
                  <label
                    htmlFor="imageUpload"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Image
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-1 p-2 border border-gray-300 rounded"
                  />
               
                </div>
                <div className="flex justify-center gap-10 mb-5">
                  <img className="w-[28%] h-[50%]" src="/src/assets/pix1.png" alt="" />
                  <img className="w-[28%] h-[50%]" src="/src/assets/pix2.png" alt="" />
                  <img className="w-[28%] h-[50%]" src="/src/assets/pix3.png" alt="" />
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
    </>
  );
}
