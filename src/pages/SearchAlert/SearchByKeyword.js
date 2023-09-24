import React from 'react'
import { Button, Grid } from '@mui/material'
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SearchIcon from '@mui/icons-material/Search';

function SearchByKeyword() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #E0E9EC",
            borderRadius: "5px",
            minWidth: "40%"
        }}>
            <div style={{
                borderBottom: "1px solid #E0E9EC", width: "100%", display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                backgroundColor: "#E0E9EC"
            }}><span style={{ padding: "5px" }}>Search by Keyword</span></div>

            <Grid container spacing={2} style={{ marginTop: "0.5em", width: "100%" }}>
                <Grid item xs={4}>
                    <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", }}>Crime Category</div>
                </Grid>
                <Grid item xs={8} style={{ padding: "1em 20px 1em 0" }}>
                    <select name="option" style={{ width: "103.5%", padding: "5px" , border: "1px solid #E0E9EC",}}>
                        <option value="*" selected>All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item xs={4}>
                    <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", }}>Keyword</div>
                </Grid>

                <Grid item xs={8} style={{ padding: "1em 20px 1em 0" }}>
                    <input type="text"
                        placeholder="Enter keyword"
                        style={{
                            width: "100%",
                            padding: "5px",
                            border: "1px solid #E0E9EC"
                        }} />
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item xs={4}>
                    <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", }}>Date From<span style={{ color: "red" }}>*</span></div>
                </Grid>

                <Grid item xs={8} style={{ padding: "1em 20px 1em 0" }}>
                    <input type="date"
                        style={{
                            width: "100%",
                            padding: "5px",
                            border: "1px solid #E0E9EC"
                        }} />
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item xs={4}>
                    <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", }}>Date To<span style={{ color: "red" }}>*</span></div>
                </Grid>

                <Grid item xs={8} style={{ padding: "1em 20px 1em 0" }}>
                    <input type="date"
                        style={{
                            width: "100%",
                            padding: "5px",
                            border: "1px solid #E0E9EC"
                        }} />
                </Grid>
            </Grid>
            <div style={{
                borderBottom: "1px solid #E0E9EC", width: "100%", display: "flex",
                justifyContent: "center",
                backgroundColor: "#E0E9EC",
                gap: "10px",
                padding: "10px 0",
            }}>
                <Button variant="contained" color="primary" endIcon={<SearchIcon />}>
                    Search
                </Button>
                <Button variant="contained" color="error" endIcon={<DoDisturbIcon />}>
                    Reset
                </Button>
            </div>
        </div>
    )
}

export default SearchByKeyword
