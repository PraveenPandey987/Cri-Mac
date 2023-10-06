import React from "react";
import { Button, Grid } from "@mui/material";
import { useState } from "react";

function MajorHenious({ setDate, setCrimeType }) {
  return (
    <>
      <Grid item xs={1}>
        <input
          type="text"
          placeholder="On"
          disabled
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC",
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <input
          type="date"
          placeholder="Date"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }}
          onChange={(e) => {
            console.log(e.target.value);
            setDate(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <input
          type="text"
          placeholder="a major Henious Crime"
          disabled
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC",
          }}
        />
      </Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <input
          type="text"
          placeholder="Crime Type"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }}
          onChange={(e) => {
            console.log(e.target.value);
            setCrimeType(e.target.value);
          }}
        />
      </Grid>

      <Grid item xs={5}>
        <input
          type="text"
          placeholder="took place"
          disabled
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC",
          }}
        />
      </Grid>
    </>
  );
}

export default MajorHenious;
