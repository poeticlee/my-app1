import React from "react";
import Design from "./design";
import SetnewpForm from "./setnewpForm";

function Setnewpass() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "auto",
        justifyContent: "center",
        gap: "50px",
        marginLeft: "250px",
      }}
    >
      <SetnewpForm/>
      <Design/>
    </div>
  );
}

export default Setnewpass;
