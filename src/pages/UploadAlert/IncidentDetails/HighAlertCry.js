import { Grid } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

function HighAlertCry() {
    return (
        <>
            <Grid item xs={6}>
                <input type="text"
                    placeholder="A Nationwide High Alert is issued regarding"
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
                    placeholder="Subject Matter"
                    style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #E0E9EC",
                        borderRadius: "3px",
                    }} />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
                <input type="text"
                    placeholder="and assistance is required to"
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
                    placeholder="Type of assistance"
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

export default HighAlertCry
