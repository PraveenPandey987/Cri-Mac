import React from 'react'
import { Button, Grid } from '@mui/material'

function MajorHenious() {
  return (
    <>
      <Grid item xs={1}>
        <input type="text"
          placeholder="On"
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
          placeholder="Date"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }} />
      </Grid>
      <Grid item xs={5}>
        <input type="text"
          placeholder="a major Henious Crime"
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
      <Grid item xs={5}>
        <input type="text"
          placeholder="Crime Type"
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
          }} />
      </Grid>

      <Grid item xs={5}>
        <input type="text"
          placeholder="took place"
          disabled
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #E0E9EC",
            borderRadius: "3px",
            backgroundColor: "#E0E9EC"
          }} />
      </Grid>
    </>
  )
}

export default MajorHenious
