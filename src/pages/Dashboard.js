import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import "../styles/dashboardStyles.css";
import Box from "@mui/material/Box";
import DashboardDivs from "../components/DashboardDivs";
import DashboardCenterDivs from "../components/DashboardCenterDiv";
import { useNavigate } from "react-router-dom/dist";
function Dashboard() {
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

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <>
          <Navbar2 stationName={stationName} />
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "blue",
                  fontWeight: "bold",
                  padding: "0.5em 0em",
                }}
              >
                CRIMAC DASHBOARD
              </div>
              <div style={{ fontWeight: "bold" }}>
                District{" "}
                <input type="radio" name="location" id="" defaultChecked />
                State <input type="radio" name="location" id="" />
                National <input type="radio" name="location" id="" />
              </div>
            </div>
            <div style={{ maxHeight: "100vh" }}>
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <Box>
                  <div>
                    <DashboardDivs title={"Jail Breaks"} />
                    <DashboardDivs title={"Major Heinous Crimes"} />
                    <DashboardDivs title={"Important Seizures/Recoveries"} />
                  </div>
                </Box>
                <Box>
                  <div>
                    <DashboardCenterDivs />
                  </div>
                </Box>
                <Box>
                  <div>
                    <DashboardDivs
                      title={"Jail Releases of Notorious Criminals"}
                    />
                    <DashboardDivs
                      title={"Major Human Trafficking Recoveries "}
                    />
                    <DashboardDivs
                      title={"Notorious Criminals(Arrested/Wanted)"}
                    />
                  </div>
                </Box>
              </Box>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
