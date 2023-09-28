import { Grid } from '@mui/material'
import React from 'react'

function NotoriousCriminals() {
  return (
    <>
      <Grid item xs={2}>
        <input type="text"
          placeholder="A notorious person"
          disabled
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC"
          }} />
      </Grid>
      <Grid item xs={6}>
        <input type="text"
          placeholder="Name and Address"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }} />
      </Grid>
      <Grid item xs={2}>
        <input type="text"
          placeholder="is"
          disabled
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC"
          }} />
      </Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <input type="text"
          placeholder="wanted/arrested(on date)"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }} />
      </Grid>

      <Grid item xs={2}>
        <input type="text"
          placeholder="for committing"
          disabled
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC"
          }} />
      </Grid>
      <Grid item xs={4}>
        <input type="text"
          placeholder="Type of Crime"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }} />
      </Grid>
    </>
  )
}

export default NotoriousCriminals
