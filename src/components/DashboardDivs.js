import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import FirDiv from "./FirDiv";

function DashboardDivs({ title }) {
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
            backgroundColor: "#707467",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <Grid item xs={10} sm={10} md={10} textAlign={"center"}>
            {title} 
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
            <InfoIcon /> 1/20
          </Grid>
        </Grid>
        <div
          style={{
            padding: "1em",
            maxHeight: "15vh",
            height: "15vh",
            overflow: "scroll",
            backgroundColor: "#E0E9EC",
          }}
        >
          <FirDiv />
          <FirDiv />
          <FirDiv />
          <FirDiv />
          <FirDiv />
          <FirDiv />
          <FirDiv />
        </div>
      </div>
    </>
  );
}

export default DashboardDivs;
