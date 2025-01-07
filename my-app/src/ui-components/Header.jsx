import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/sign-up"); 
  };
  const handleLogin = () => {
    navigate("/login"); 
  };
  return (
    <div className="w-screen h-[80px] z-50 fixed top-0 left-0 flex items-center justify-center ">
      <div className="flex items-center justify-between main"  >
        <img src="/src/assets/Group 740.png" className="h-[40px] object-cover" alt="Logo" />
        <div className=" flex items-center gap-3">
          <button className="secondary__btn"  onClick={handleSignUp}> Sign Up</button>

          <button  className=" primary__btn" onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
}
