import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OTPPage() {
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]); // To focus inputs dynamically
  const [otp, setOtp] = useState(""); // To store the OTP
  const [user, setUser] = useState(null); // Store user data from localStorage

  const navigate = useNavigate();

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleVerify = async () => {
    if (!otp || otp.length !== 5) {
      alert("Please enter a valid 5-digit OTP.");
      return;
    }

    if (!user?.email) {
      alert("User email is missing. Please log in again.");
      navigate("/login");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://jobbertrack.onrender.com/auth/verify-email",
        {
          email: user.email,
          otp: otp,
        }
      );

      if (response.status === 200) {
       
        navigate("/dashBoard");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numeric input
    if (value.length > 1) return;

    const updatedOtp = otp.split("");
    updatedOtp[index] = value; // Update the specific digit
    setOtp(updatedOtp.join(""));

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Focus next input
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus(); // Move to the previous input on Backspace
    }
  };

  return (
    <div className="justify-center">
      <div>
        <img
          className="mb-10"
          src="/src/assets/logoInvite.png" // Ensure the image is in the public/assets folder
          alt="Logo"
        />
        <p className="text-[20px] font-bold">Enter verification code.</p>
        <p className="text-gray-600">
          Enter the verification code we just sent
          <br/> to your email to get the party started. 🎉
        </p>
      </div>

      <div className="flex gap-[45px] mt-5 mb-10 font-bold text-[35px]">
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            pattern="[0-9]*"
            className="w-[60px] h-[60px] text-center text-lg border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={otp[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>

      <button
        className="w-[500px] h-[52px] bg-[#6460FF] text-white font-bold rounded-md disabled:bg-gray-400"
        onClick={handleVerify}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify Account"}
      </button>
    </div>
  );
}
