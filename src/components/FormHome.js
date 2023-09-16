import * as React from "react";
import Grid from "@mui/material/Grid";
import Login from "../assets/login.png";
import Box from "@mui/material/Box";
import Captcha from "../assets/captcha.jpg";
function formhome() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        margin={"auto"}
        spacing={2}
        maxWidth={"80vw"}
        style={{
          marginTop: "4em",
          top: "50%",
          left: "50%",
          border: "1px solid #E0E9EC",
          borderRadius: "50px",
        }}
      >
        <Grid
          item
          style={{
            backgroundColor: "#E0E9EC",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
          }}
          xs={12}
        >
          <div
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1.5em",
            }}
          >
            Login
          </div>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          xs={12}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} style={{ fontWeight: "bold" }}>
                      ICJS UserName
                    </Grid>
                    <Grid item xs={6}>
                      <input
                        type="text"
                        placeholder="Enter Username"
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} style={{ fontWeight: "bold" }}>
                      ICJS Password
                    </Grid>
                    <Grid item xs={6}>
                      <input
                        type="text"
                        placeholder="Enter Password"
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item md={2} xs={12} style={{ fontWeight: "bold" }}>
                      Captcha
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <img
                        src={Captcha}
                        alt=""
                        srcset=""
                        width={"200px"}
                        height={"100px"}
                      />
                    </Grid>
                    <Grid item md={2} xs={12} style={{ fontWeight: "bold" }}>
                      <button
                        color="white"
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          borderRadius: "20px",
                          padding: "5px 15px",
                        }}
                      >
                        Refresh
                      </button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "10px",
                    margin: "auto",
                    marginBottom: "2%",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E0E9EC",
          }}
          xs={12}
        >
          <button
            className="button"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "10px",
              fontSize: "1em",
              padding: "0.6em 1em",
              border: "none",
            }}
          >
            Login <img src={Login} alt="" srcset="" />
          </button>
        </Grid>
        {/* <Grid>This Site can be Best Viewed inn Chrome</Grid> */}
      </Grid>

      {/* <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "red",
          margin: "auto ",
          marginBottom: "0",
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          Note:This Site can be Best Viewed in Chrome
        </div>
        <div
          style={{
            width: "100vw",
            color: "white",
            backgroundColor: "blue",
            textAlign: "center",
            margin: "0",
          }}
        >
          Cri-Mac Version 3.0
        </div>
      </div> */}
    </>
  );
}

export default formhome;
