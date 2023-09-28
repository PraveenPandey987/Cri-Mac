import { Grid } from '@mui/material'
import React from 'react'

function JailBreaks() {
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
                    placeholder="a notorious person"
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
            <Grid item xs={10}>
                <input type="text"
                    placeholder="Name & Place of Jail"
                    style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #E0E9EC",
                        borderRadius: "3px",
                    }} />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
                <input type="text"
                    placeholder="resulting in escape of"
                    disabled
                    style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #E0E9EC",
                        borderRadius: "3px",
                        backgroundColor: "#E0E9EC"
                    }} />
            </Grid>
            <Grid item xs={5}>
                <input type="text"
                    placeholder="Number of prisoners"
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

export default JailBreaks
