import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";

const PassInput = forwardRef(({ label, name, placeholder, ...rest }, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div
      style={{
        position: "relative",
        marginBottom: "20px",
        width: "100%",
      }}
    >
      {label && (
        <label
          htmlFor={name}
          style={{
            display: "block",
            marginBottom: ".5rem",
            fontWeight: "bold",
          }}
        >
          {label}
        </label>
      )}
      <div
        className=" relative flex items-center"
      >
        <input
          id={name}
          type={passwordVisible ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
         
        />
        <img
          src={passwordVisible ? "/src/assets/eye.png" : "/src/assets/eye-off.png"}
          alt={passwordVisible ? "Hide password" : "Show password"}
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "10px", // Keep the icon inside the input
            cursor: "pointer",
            width: "20px",
            height: "20px",
          }}
        />
      </div>
    </div>
  );
});

PassInput.displayName = "PassInput";

PassInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

PassInput.defaultProps = {
  label: "",
  placeholder: "",
};

export default PassInput;

