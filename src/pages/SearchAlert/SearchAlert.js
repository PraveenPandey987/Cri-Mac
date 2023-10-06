import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar2";
import SearchByFIR from "./SearchByFIR";
import SearchByKeyword from "./SearchByKeyword";
import { useNavigate } from "react-router-dom";

function SearchAlert() {
  const [status, setStatus] = useState(1);
  const [stationName, setStationName] = useState("");
  const [loading, setLoading] = useState(1);
  const navigate = useNavigate();
  async function decodeToken() {
    const token = localStorage.getItem("token");
    let decoded = await fetch("http://localhost:3080/api/verifyToken", {
      method: "post",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    decoded = await decoded.json();
    if (!decoded.result) {
      navigate("/");
    }

    setStationName(localStorage.getItem("stationName"));
  }

  useEffect(() => {
    setLoading(1);
    decodeToken();
    setLoading(0);
  }, []);

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <>
      <Navbar2 stationName={stationName} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
          minWidth: "33%",
        }}
      >
        <div
          style={{
            color: "blue",
            fontWeight: "bold",
            padding: "0.5em 0em",
            fontSize: "20px",
          }}
        >
          Search Alert
        </div>
        <div style={{ fontWeight: "bold" }}>
          <input
            type="radio"
            id="1"
            checked={status === 1}
            onClick={(e) => radioHandler(1)}
          />
          Search by FIR No.
          <input
            type="radio"
            id="2"
            checked={status === 2}
            onClick={(e) => radioHandler(2)}
          />{" "}
          Search by Keyword/Crime Category
        </div>
        {status === 1 && <SearchByFIR />}
        {status === 2 && <SearchByKeyword />}
      </div>
    </>
  );
}

export default SearchAlert;
