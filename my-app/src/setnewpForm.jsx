import React from "react";
import PassInput from "./ui-components/passInput";
import Button from "./ui-components/button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const SetNewPForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // Enables dynamic validation updates
  });

  const password = watch("password"); // Watch password for comparison

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Call the reset password API
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { 
          email: data.email, // Replace with your actual data structure
        }
      );

      if (response.status === 201) {
        toast.success("Password reset successfully!");
        // Navigate to the confirmation page
        navigate("/passReset2");
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to reset the password. Please try again."
      );
    }
  };

  return (
    <div style={{ width: "500px", padding: "0.5px", marginTop: "200px" }}>
      <img src="/src/assets/logoEvent.png" alt="Logo" />
      <h2>Set a new password</h2>
      <h5 style={{ opacity: "0.5" }}>
        Make sure it&apos;s unique and different from the previous ones
        <br /> for added security in no time.
      </h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <PassInput
          label="Password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters.",
            },
            validate: {
              hasNumber: (value) =>
                /[0-9]/.test(value) || "Password must contain at least one number",
              hasSpecialChar: (value) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Password must contain at least one special character",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.password.message}
          </p>
        )}
        <PassInput
          label="Retype Password"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Please confirm your password.",
            validate: (value) =>
              value === password || "Passwords do not match.",
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.confirmPassword.message}
          </p>
        )}

        {/* Conditional Button Styling */}
        <Button
           label="Update password"
          type="submit"
          disabled={!isValid}
          style={{
            backgroundColor: isValid ? "blue" : "gray",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        />
         

        <p style={{ textAlign: "center" }}>
          &larr; Back to{" "}
          <a style={{ color: "blue" }}>
            <Link to="/login">
              <span>Sign In</span>
            </Link>
          </a>
        </p>
      </form>

      {/* Add ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default SetNewPForm;
