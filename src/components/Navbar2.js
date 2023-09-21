//This is the navbar for dashboard
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "#E0E9EC",
          border: "1px solid black",
          marginTop: "1px",
        }}
      >
        <Grid item md={7} xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              flexDirection: "row",

              padding: "0.2em 0.5em",
            }}
          >
            <div style={{ color: "red", fontWeight: "bold" }}>Home</div>
            <div
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <Link to="/UploadAlert">Upload Alert</Link>
            </div>
            <div
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <Link to="/SearchAlert">Search Alert</Link>
            </div>
            <div
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <Link to="/Communications">Communications</Link>
            </div>
            <div
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <Link to="/StateAlertCount">StateAlertCount</Link>
            </div>
            <div
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <Link to="/Help">Help</Link>
            </div>
          </div>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          gap={"10px"}
          alignContent={{ xs: "center", md: "right" }}
          textAlign={{ xs: "center", md: "right" }}
          paddingRight={"2em"}
          display={{ xs: "flex", md: "block" }}
          flexDirection={{ xs: "column" }}
          justifyContent={{ xs: "center" }}
          alignItems={{ xs: "center" }}
        >
          User: <span style={{ color: "blue" }}>Yogesh Kumar</span>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar2;
