import React from "react";

export default function Hero() {
  return (
    <div className=" relative h-[90vh] w-screen ">
      <div className="main flex items-center text-center justify-center h-full">
        <div className=" relative z-40">
          <p className="text-[var(--primary)] text-lg py-3">Redifining Event Invitations</p>
          <div>
            <h1 className=" text-5xl md:text-6xl xl:text-[4.8rem] font-black">Bring Your Events to Life<br/> Effortlessly</h1>
          </div>
          <p className=" text-lg py-10">
            Take the stress out of event planning and participation.Our platform
            offers intuitive tools to create and manage
            <br />
            invitations effortlessly while ensuring a seemless experiance
          </p>
          <button className="primary__btn !py-3 !px-6">Create event</button>
        </div>
        <img
          src="./src/assets/Ellipse 2.png"
          alt=""
          className=" absolute left-0 bottom-10 z-0" 
        />
        <img
          src="./src/assets/Ellipse 8.png"
          alt=""
          className=" absolute right-0 top-10 z-0"
        />
      </div>
    </div>
  );
}
