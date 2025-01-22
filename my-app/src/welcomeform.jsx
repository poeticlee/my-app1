import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//import Input from "./ui-components/input";
import PassInput from "./ui-components/passInput";
import Button from "./ui-components/button";
import { Link, useNavigate } from "react-router-dom";

const WelcomeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jobbertrack.onrender.com/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );
        console.log(response)
      if (response.status === 200) {
        //save the token in the localstorage
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));


        // Navigate to the dashboard page
        navigate("/dashboard");
      
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("submit", {
        type: "manual",
        message: "Invalid credentials. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <img src="/src/assets/logoEvent.png" alt="Logo" className=" h-[60px]  forced-color-adjust-auto"/>
      <h4 className=" text-3xl font-bold text-[#292929] pt-3">
        Welcome back to &nbsp;
        <span className="text-[var(--primary)]">invitrio</span>
      </h4>
      <h5>
        Sign in to manage your events and track RSVPs
        and keep the celebration going!
      </h5>
      <div className="py-4">
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3">
          <div>
            <label>Email:</label>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className=" text-red-500 text-[13px]"  >
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label>Password:</label>
            <PassInput
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className=" text-red-500 text-[13px]"  >
                {errors.password.message}
              </p>
            )}
          </div>

          <p className=" flex justify-end pb-1">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>

          <Button
            label={loading ? "Loading..." : "Sign in"}
            type="submit"
            disabled={loading}
          />

          {errors.submit && (
            <p className=" text-red-500 text-[13px]" >
              {errors.submit.message}
            </p>
          )}
        </form>

        <div
        className=" flex items-center gap-3"
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

        <p className=" text-center py-5">
          Don’t have an account yet?{" "}
          <Link to="/sign-up" >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default WelcomeForm;
