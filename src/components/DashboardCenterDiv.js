import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import FirDiv from "./FirDiv";
function DashboardCenterDiv() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1em 0em ",
          border: "1px solid black",
        }}
      >
        <Grid
          container
          padding={"1em"}
          style={{
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
            position: "sticky",
            cursor: "pointer",
          }}
        >
          <Grid item xs={10} sm={10} md={10} textAlign={"center"}>
            High Alerts/Hue & Cry Notices
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            display={"flex"}
            justifyContent="center"
            alignItems="center"
          >
            <InfoIcon /> 0/157
          </Grid>
        </Grid>
        <div
          style={{
            padding: "1em",
            height: "50vh",
            maxHeight: "50vh",
            overflow: "scroll",
            backgroundColor: "#E0E9EC",
          }}
        >
          {/* <FirDiv /> */}
        </div>
      </div>
    </>
  );
}

export default DashboardCenterDiv;
