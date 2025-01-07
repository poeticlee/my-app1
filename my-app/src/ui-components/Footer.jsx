import React from "react";

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="bg-footer py-10 min-h-[40vh] flex items-center justify-center flex-col">
      <div className="main grid md:grid-cols-2 lg:grid-cols-3 border-b border-gray-400 py-10 gap-5">
        <div>
          <img src="./src/assets/Group 740.png " alt="" />
          <p className="py-3">
            Our platform is designed to simplify event management, from
            invitations to check-ins
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <h5 className=" font-bold">Contact Us</h5>
          <a className=" text-black" href="tel:+2347066257617">+2347066257617</a>
          <a className=" text-black" href="mailto:donpraise2@gmail.com">donpraise2@gmail.com</a>
        </div>
        <div>
          <h5 className=" font-bold">Get in Touch</h5>
          <p>Leave your email and we would reach out to you</p>
          <div className="flex items-center w-full py-3">
            <input type="text" className="bg-[#D7D7D7] p-3 w-full h-[45px] rounded-l-xl outline-none" placeholder="Type in your email" />
            <button className="primary__btn !h-[45px] !rounded-l-none !p-3 !px-6">Submit</button>
          </div>
        </div>
      </div>
      <p className="text-center pt-5">© {year} Invitrio. All Rights Reserved.</p>
    </div>
  );
}
