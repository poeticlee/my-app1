import React from "react";
import pix1 from "./assets/pix1.png";
import pix2 from "./assets/pix2.png";
import pix3 from "./assets/pix3.png";
import pix4 from "./assets/pix4.png";
import Hero from "./ui-components/Hero";
import elipse from "./assets/Ellipse 7.png";

function Landingpage() {
  return (
    <div className=" landing-bg">
      <div className=" relative ">
        <Hero />
        <div className="py-3 overflow-x-hidden">
          <div className="flex items-center  gap-5 animateSlide flex-shrink-0 ">
            <img src={pix1} alt="Slide 1" />
            <img src={pix2} alt="Slide 2" />
            <img src={pix3} alt="Slide 3" />
            <img src={pix4} alt="Slide 4" />
            {/* Duplicate images for seamless loop */}
            <img src={pix1} alt="Slide 1" />
            <img src={pix2} alt="Slide 2" />
            <img src={pix3} alt="Slide 3" />
            <img src={pix4} alt="Slide 4" />
            <img src={pix1} alt="Slide 1" />
            <img src={pix2} alt="Slide 2" />
          </div>
        </div>
        <div className=" w-full lg:h-[40px] absolute z-40 bottom-0 left-0 ">
          <img
            src={elipse}
            alt=""
            className=" w-full object-cover"
          />
        </div>
      </div>

      <div className=" grid place-content-center  min-h-[90vh] py-10">
        <div>
          <h4 className=" text-lg font-bold text-center text-[var(--primary)]">
            Key Features
          </h4>
          <h3 className="text-3xl text-center font-bold ">
            Effortless, Streamlined and Intuitive
          </h3>
          <p className=" text-center  text-[16px] py-2 md:w-[40%] mx-auto">
            Our Digital Event Invitation Platform is designed to simplify event
            management for both organizers and attendees
          </p>
        </div>
        <div className="grid md:grid-cols-[4fr,8fr]  gap-2 main py-10">
          <div className="p-6">
            <img
              src="./src/assets/Featured icon.png"
              alt=""
              className=" h-[40px] w-[40px] object-cover"
            />
            <h5 className=" text-xl md:text-2xl font-semibold py-2">
              Event Management Made Simple
            </h5>
            <p className="  text-[16px]">
              Create events in minutes with an intuitive
              <br /> interface,upload images, and customize your event&apos;s
              look with our easy-to-use tools
            </p>
          </div>
          <div className=" grid md:grid-cols-2 gap-4">
            <div className=" p-7 shadow-md rounded-xl bg-white">
              <img
                src="./src/assets/Featured icon2.png"
                alt=""
                className=" h-[40px] w-[40px] object-cover"
              />
              <p className="  text-[16px] font-semibold py-2">
                Effortless Event Creation
              </p>
              <p className="  text-[16px]">
                Create events in minutes with an intuitive interface,upload
                images, and customize your event&apos;s look with our
                easy-to-use tools
              </p>
            </div>
            <div className=" p-7 shadow-md rounded-xl bg-white">
              <img
                src="./src/assets/Featured icon3.png"
                alt=""
                className=" h-[40px] w-[40px] object-cover"
              />
              <p className="  text-[16px] font-semibold py-2">
                Guest Management List
              </p>
              <p className="  text-[16px]">
                Easily manage and update your guest list. our guest management
                tools simplify the entire process
              </p>
            </div>
            <div className=" p-7 shadow-md rounded-xl bg-white">
              <img
                src="./src/assets/Featured icon4.png"
                alt=""
                className=" h-[40px] w-[40px] object-cover"
              />
              <p className="  text-[16px] font-semibold py-2">RSVP Updates</p>
              <p className="  text-[16px]">
                Keep track of who’s attending with real-time RSVP updates.
                Easily monitor guest responses and manage attendance
              </p>
            </div>
            <div className=" p-7 shadow-md rounded-xl bg-white">
              <img
                src="./src/assets/Featured icon4.png"
                alt=""
                className=" h-[40px] w-[40px] object-cover"
              />
              <p className="  text-[16px] font-semibold py-2">
                Seamless Attendee Interaction
              </p>
              <p className="  text-[16px]">
                Foster engagement by allowing attendees to view event details,
                RSVP, and stay updated on event changes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-10">
        <div>
          <h5 className=" font-bold text-center text-[var(--primary)]">
            Why Choose Us
          </h5>
          <h3 className="text-3xl text-center font-bold ">
            Simplified Event Planning with Powerful Features
          </h3>
          <p className=" text-center  text-[16px] py-2">
            Discover how our platform streamlines event creation,enhances
            security and saves you time
            <br />
            all while keeping your guest engaged
          </p>
        </div>
        <div className=" grid md:grid-cols-[5fr,7fr] place-items-center gap-4 main">
          <div className="grid gap-10 py-10">
            <div className="flex  gap-4">
              <img
                src="./src/assets/iconA.png"
                alt=""
                className=" h-[50px] object-cover"
              />
              <div className="w-full">
                <p className=" font-bold">Simplified Process</p>
                <p>
                  Our platform is designed to make event planning easy and
                  efficient
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <img
                src="./src/assets/iconB.png"
                alt=""
                className=" h-[50px] object-cover"
              />
              <div>
                <p className=" font-bold">Time Saving Automation</p>
                <p>
                  Automate invitations, RSVPs, reminders, and guest list
                  management, reducing manual effort.
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <img
                src="./src/assets/iconC.png"
                alt=""
                className=" h-[50px] object-cover"
              />
              <div>
                <p className=" font-bold">Effortless Guest Management</p>
                <p>
                  Easily track attendance, manage guest lists, and update event
                  details with minimal effort
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./src/assets/events.png"
              alt=""
              className=" w-[80%] mx-auto object-cover "
            />
          </div>
        </div>
      </div>
      <div className="bg-[#6460FF]/50 h-full py-10 lg:h-[70vh] relative flex items-center justify-center">
        <div className="main grid gap-6">
          <h3 className=" text-3xl lg:text-4xl font-bold ">
            Make Your Next Event <br />
            Unforgettable
          </h3>
          <p className=" lg:w-[40%]">
            Take the hassle out of managing invitations and RSVPs. Create,
            track, and enjoy events with easy
          </p>
          <button className="primary__btn w-fit !p-4 !px-10">
            Get Started
          </button>
        </div>

        <img
          src="./src/assets/BG 4.png"
          alt=""
          className=" absolute right-0 top-0 h-full w-1/3 lg:w-1/2 object-cover  object-left hidden md:block"
        />
      </div>
      <div className="bg-white py-10">
        <h4 className=" text-2xl text-center font-bold">
          Frequently Asked Questions
        </h4>
        <div className="main grid md:grid-cols-2 py-10 gap-10">
          <div className="flex flex-col gap-5">
            <div className="p-8 shadow-md rounded-lg h-[210px] flex gap-4">
              <div className=" text-3xl text-[var(--primary)] font-bold">-</div>
              <div className="">
                <h4 className=" font-bold">
                  How do I create an event on the platform?
                </h4>
                <p>
                  To create an event, log in to your account and click on the
                  &quot;Create Event&quot; button. Then, fill in the event’s
                  basic details, such as the name, date, location, and
                  description.
                </p>
              </div>
            </div>
            <div className="p-8 shadow-md rounded-lg flex items-center gap-4">
              <p className=" text-3xl text-[var(--primary)] font-bold">+</p>
              <p>Can I edit the event after sending invitations?</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-8 shadow-md rounded-lg flex items-center gap-4">
              <p className=" text-3xl text-[var(--primary)] font-bold">+</p>
              <p>Is my event data secure on your platform?</p>
            </div>
            <div className="p-8 shadow-md rounded-lg flex items-center gap-4">
              <p className=" text-3xl text-[var(--primary)] font-bold">+</p>
              <p>Any limits on the number of guests I can invite?</p>
            </div>
            <div className="p-8 shadow-md rounded-lg flex items-center gap-4">
              <p className=" text-3xl text-[var(--primary)] font-bold">+</p>
              <p>How do I track RSVPs and guest attendance?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
