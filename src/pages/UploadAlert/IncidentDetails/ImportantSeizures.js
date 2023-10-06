import { Grid } from "@mui/material";
import React from "react";

function ImportantSeizures({ setDate, setItem, setQuantity }) {
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
          onChange={(e) => setDate(e.target.value)}
        />
      </Grid>
      <Grid item xs={5}>
        <input
          type="text"
          placeholder="important seizure/recovery of"
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
      <Grid item xs={4}>
        <input
          type="text"
          placeholder="Nature of item"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }}
          onChange={(e) => setItem(e.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <input
          type="text"
          placeholder="numbering about"
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
      <Grid item xs={2}>
        <input
          type="text"
          placeholder="quantity"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC",
          }}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <input
          type="text"
          placeholder="was done"
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

export default ImportantSeizures;
