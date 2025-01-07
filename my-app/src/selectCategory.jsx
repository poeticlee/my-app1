import React from "react";

function SelectCategory() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <img
          style={{ height: "32px", width: "41.5px" }}
          src="./src/assets/logoEvent.png"
          alt=""
        />
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img
            style={{ height: "52px", width: "52px", borderRadius: "25px" }}
            src="./src/assets/leyooo.jpg"
            alt=""
          />
          <div>
            <p>
              Leye ayanlola
              <br />
              donpraise2@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          {" "}
          <p
            style={{ textAlign: "center", fontSize: "32px", fontWeight: "600" }}
          >
            Select your Category
          </p>
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            Are you planning the event or attending it?Let us know so we can
            <br /> customize your experience
          </p>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "50px",
              gap: "50px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                border: "solid",
                borderColor: "#E5E2E2",
                borderRadius: "5px",
                padding: "50px",
              }}
            >
              <img src="./src/assets/organizer.png" alt="" />
              <p style={{ fontSize: "20px", fontWeight: "600" }}>Organizer</p>
              Plan,create and manage events
              <br /> effortlessly.Bring your vision to life and
              <br />
              keep everything on track
            </div>
            <div
              style={{
                textAlign: "center",
                border: "solid",
                borderColor: "#E5E2E2",
                borderRadius: "5px",
                padding: "50px",
                paddingTop: "55px",
              }}
            >
              <img src="./src/assets/attendee.png" alt="" />
              <p style={{ fontSize: "20px", fontWeight: "600" }}>Attendee</p>
              Stay in the loop,RSVP to events and enjoy
              <br /> the experience-stress-free
              <br />
            </div>
            
          </div>
         
        </div>
        <div><button style={{width:"840px",height:"52",textAlign:"center",color:"white",marginLeft:'490px',backgroundColor:"blue"}}>Continue</button></div>
        
      </div>
      
    </div>
  );
}

export default SelectCategory;
