import React from "react";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "5px 15px",
          backgroundColor: "#E0E9EC",
        }}
      >
        <div>
          <img
            src={Logo1}
            alt=""
            srcset=""
            style={{ height: "50px", width: "60px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "red",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            CRIME MULTI AGENCY CENTRE (Cri-MAC)
          </div>
          <div
            style={{
              color: "blue",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Under Crime and Crimial Tracking Network and Systems (CCTNS)
          </div>
        </div>
        <div>
          <img
            src={Logo2}
            alt=""
            srcset=""
            style={{ height: "50px", width: "60px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
