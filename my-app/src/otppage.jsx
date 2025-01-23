import React, { useRef, useState, useEffect } from "react";
import axios from "axios"; 

export default function OTPPage() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(""); // Store the entered OTP
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedOtp = otp.split("");
    updatedOtp[index] = value; // Update the specific digit
    setOtp(updatedOtp.join(""));

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move to the next input
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post("https://jobbertrack.onrender.com/auth/reset-password/verify-email", {
        email: user?.email, // Send the user's email
        otp: otp, // Send the entered OTP
      });

      if (response.data.success) {
        alert("OTP verified successfully!");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP. Please try again.");
    }
  };

  return (
    <>
      <div>
        <img className="mb-10" src="/src/assets/logoInvite.png" alt="" />
        <p className="text-[20px] font-bold">Enter verification code.</p>
        <p>
          Enter the verification code we just sent
          <br /> to your email {user.email} to get the party started. 🎉
        </p>
      </div>

      <div className="flex gap-[48px] mt-5 mb-5 font-bold text-[35px]">
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-[60px] h-[60px] text-center text-lg border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onInput={(e) => handleInputChange(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <div>
        <button
          className="w-[500px] h-[52px] bg-[#6460FF] text-white"
          onClick={handleVerify}
        >
          Verify Account
        </button>
      </div>
    </>
  );
}
