import React from 'react'
import { Button, Grid } from '@mui/material'
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SearchIcon from '@mui/icons-material/Search';

function SearchByFIR() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #E0E9EC",
        borderRadius: "5px",
        maxWidth: "50%"
      }}>
        <div style={{
          borderBottom: "1px solid #E0E9EC", width: "100%", display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          backgroundColor: "#E0E9EC"
        }}><span style={{ padding: "5px" }}>Search by FIR</span></div>

        <Grid container spacing={2} style={{ marginTop: "1em", width:"100%" }}>
          <Grid item xs={4}>
            <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", }}>FIR NUMBER<span style={{ color: "red" }}>*</span></div>
          </Grid>

          <Grid item xs={8} style={{ padding: "1em 20px 1em 0" }}>
            <input type="text"
              placeholder="Enter 14 digits FIR Number"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #E0E9EC"
              }} />
            <div
              style={{ color: "blue", fontWeight: "bold", padding: "1em 0em" }}
            >
              Note: 14 digits (2 digits of state + 3 digits of district + 3 digits of PS + 2 digits of year + 4 digits of year)
            </div>
          </Grid>
        </Grid>
        <div style={{
          borderBottom: "1px solid #E0E9EC", width: "100%", display: "flex",
          justifyContent: "center",
          backgroundColor: "#E0E9EC",
          gap:"10px",
          padding: "10px 0",
        }}>
          <Button variant="contained" color="primary"  endIcon={<SearchIcon/>}>
            Search
          </Button>
          <Button variant="contained" color="error" endIcon={<DoDisturbIcon/>}>
            Reset
          </Button>
        </div>
      </div>
  )
}

export default SearchByFIR
