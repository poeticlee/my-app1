import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};


// Define PropTypes for the Modal component
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Boolean indicating if the modal is open
  onClose: PropTypes.func.isRequired, // Function to close the modal
  children: PropTypes.node,          // React nodes (e.g., JSX) to be displayed inside the modal
  title: PropTypes.string            // Optional string for the modal title
};

// Default props for optional props
Modal.defaultProps = {
  children: null,
  title: "Default Title"
};
export default Modal;
