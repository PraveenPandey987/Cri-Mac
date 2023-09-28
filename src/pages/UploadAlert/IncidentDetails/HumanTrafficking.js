import { Grid } from '@mui/material'
import React from 'react'

function HumanTrafficking() {
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
            <Grid item xs={3}>
                <input type="text"
                    placeholder="Date"
                    style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #E0E9EC",
                        borderRadius: "3px",
                    }} />
            </Grid>
            <Grid item xs={2}>
                <input type="text"
                    placeholder="Number"
                    style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #E0E9EC",
                        borderRadius: "3px",
                    }} />
            </Grid>
            <Grid item xs={4}>
                <input type="text"
                    placeholder="trafficked"
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
            <Grid item xs={6}>
                <input type="text"
                    placeholder="children/women/persons"
                    style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #E0E9EC",
                        borderRadius: "3px",
                    }} />
            </Grid>
            <Grid item xs={4}>
                <input type="text"
                    placeholder="were rescued"
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

export default HumanTrafficking
