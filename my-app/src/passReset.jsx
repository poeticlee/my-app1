import React from "react";
import { useForm } from "react-hook-form";
import Button from "./ui-components/button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const PassReset = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    try {
      // Simulate an API call
      const response = await axios.post( "https://jobbertrack.onrender.com/auth/reset-password");

      if (response.status === 200) {
        toast.success("Password reset link has been sent to your email.");
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send password reset link. Please try again."
      );
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "200px auto",
        padding: "20px",
       
      }}
    >
      <img
        src="/src/assets/logoEvent.png"
        alt="Logo"
        style={{ maxWidth: "150px", marginBottom: "20px" }}
      />
      <h2>Password Reset</h2>
      <p style={{ color: "gray", fontSize: "14px", marginBottom: "20px" }}>
        Your password has been successfully reset. Click confirm to set a new password in no time.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          label={isSubmitting ? "Processing..." : "Confirm"}
          type="submit"
          disabled={isSubmitting}
          style={{
            margin: "10px 0",
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        />

        <p style={{ marginTop: "20px",textAlign:'center' }}>
          &larr; Back to{" "}
          <Link to="/login" style={{ color: "blue", textDecoration: "underline" }}>
            Sign In
          </Link>
        </p>
      </form>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default PassReset;

