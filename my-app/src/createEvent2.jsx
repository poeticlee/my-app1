import React, { useState } from "react";

const CreateEvent2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Create Event Button */}
      

      {/* Popup Form */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={togglePopup}
        >
          <div
            className="w-[720px] h-[1163px] bg-white rounded-lg shadow-lg p-6 flex flex-col relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on form click
          >
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            {/* Form Content */}
            <h2 className="text-2xl font-bold mb-6">Create Event</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Event Name"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Event Description"
                rows="5"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <input
                type="date"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent2;
