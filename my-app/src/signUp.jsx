import React from "react";
import { useForm } from "react-hook-form";
import Button from "./ui-components/button";

import Checkbox from "./ui-components/checkbox";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PassInput from "./ui-components/passInput";
import "./index.css"; // Or the file where you defined the font-face

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
    clearErrors,
    reset,
  } = useForm({
    mode: "onChange", // Enables dynamic validation updates"
  });

  const password = watch("password"); // Watch password for comparison

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://jobbertrack.onrender.com/auth/signup',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,

        }
      );
console.log(response)
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      toast.success("Registration successful!");
      reset();
      clearErrors();
    } catch (err) {
      setError("apiError", {
        type: "manual",
        message: err.response?.data?.message || "Something went wrong!",
      });
      toast.error("Registration failed!");
    }
  };

  return (
    <div >
      <img src="/src/assets/logoEvent.png" alt="Logo" />
      <h4 className=" text-3xl font-bold text-[#292929] pt-2">
        Get started with <span className=" text-[var(--primary)]">invitrio</span>
      </h4>
      <p>Bring any celebration to life and make your event unforgettable</p>

      {errors.apiError && (
        <p className=" text-red-500 text-[13px]" >{errors.apiError.message}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className=" pt-3">
        <div className="grid lg:grid-cols-2 gap-3">
          <div >
            <label>Firstname</label>
            <input
              placeholder="Enter your first name"
              {...register("firstName", {
                required: "First name is required.",
              })}
            />
            {errors.firstName && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div style={{display:'grid'}}>
            <label>Lastname</label>
            <input
              label="Last Name"
              type="text"
              placeholder="Enter your last name"
              {...register("lastName", {
                required: "Last name is required.",
              })}
            />
            {errors.lastName && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.email.message}
          </p>
        )}

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
                /[0-9]/.test(value) ||
                "Password must contain at least one number and a special character",
        
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

        <Checkbox
          {...register("termsAgreed", {
            required: "You must agree to the terms and conditions.",
          })}
        />
        {errors.termsAgreed && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.termsAgreed.message}
          </p>
        )}
        <Button
          label="Submit"
          type="submit"
          disabled={!isValid}
          style={{
            backgroundColor: isValid ? "#6460FF" : "gray",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        />
      </form>

      <div className="flex items-center"
      >
        <hr
          className="w-full"
        />
        <p className="p-3">Or</p>
        <hr
         className="w-full"
        />
      </div>

      <div className=" flex items-center justify-center gap-10">
      <img src="/src/assets/googlee.png" alt="Google" className="h-[35px] object-cover" />
      <img src="/src/assets/facebook.png" alt="Facebook" className="h-[35px] object-cover" />
      </div>

      <p style={{ textAlign: "center" }}>
        Already have an account?
        <Link to="/login">
          {" "}
          <span style={{ color: "blue" }}>Sign in</span>
        </Link>
      </p>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
