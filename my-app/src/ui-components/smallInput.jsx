import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Smallinput = forwardRef(({ label, type, name, placeholder, ...rest }, ref) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label
          htmlFor={name}
          style={{ display: "block", marginBottom: ".5rem", fontWeight: "bold" }}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref} // Pass the forwarded ref
        {...rest} // Spread additional props
        style={{
          width: "100%",
          padding: "8px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontFamily: "Manrope, sans-serif",
        }}
      />
    </div>
  );
});

// Setting the display name for better debugging
Smallinput.displayName = "Smallinput";

Smallinput.propTypes = {
  label: PropTypes.string, // Label is optional
  type: PropTypes.string.isRequired, // Input type is required
  name: PropTypes.string.isRequired, // Name is required for accessibility
  placeholder: PropTypes.string, // Placeholder is optional
};

Smallinput.defaultProps = {
  label: "", // Default to no label
  placeholder: "", // Default to no placeholder
};

export default Smallinput;
