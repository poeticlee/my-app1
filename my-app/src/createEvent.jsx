import React from "react";

export default function createEvent() {
const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    picture: "https://via.placeholder.com/40", // Placeholder user image
    eventCreated: "5",
    eventCompleted: "3",
  };
  return (
    <div className="mx-auto border w-[50%}">
      <div>
        <h2>Create Event</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <div>
            <label>Event Name</label>
            <input type="text" />
            <button>Add Description</button>
          </div>
        </div>
        <div>
          <label>Date</label>  
          <input type="date" />
          <label>Time</label>
          <input type="time" /> <label>Duration:</label>
          <select id="time-options" name="time-options">
            <option value="30m">30m</option>
            <option value="1hr">1hr</option>
            <option value="1hr30m">1hr 30m</option>
            <option value="1hr30m">2hr </option>
            <option value="1hr30m">2hr 30m</option>
            <option value="1hr30m">3hr</option>
            <option value="1hr30m">3hr 30m</option>
            <option value="1hr30m">4hr</option>
          </select>
        </div>
        <div className="flex">
        
          <label>Add Guest</label>
          <input type="text" />
          <button>Add Guest</button>
        </div>
        <div>
          <img
            src={user.picture}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <img
            src={user.picture}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <img
            src={user.picture}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
