import * as React from "react";
import Grid from "@mui/material/Grid";
import Login from "../assets/login.png";
import Box from "@mui/material/Box";
import Captcha from "../assets/captcha.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

function Formhome() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    const confirmCaptcha = "CAPTCHA";
    if (!username || !password || !captcha) {
      alert("please enter all the fields");
      return;
    }
    if (captcha !== confirmCaptcha) {
      alert("incorrect captcha");
      return;
    }
    let res = await fetch(`http://localhost:3080/api/user/login`, {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    if (!res.message) {
      alert("invalid credentials");
      return;
    }
    localStorage.setItem("stationName", res.stationName);
    localStorage.setItem("token", res.token);
    navigate("/dashboard");
  }

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
                        onChange={(e) => setUserName(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setCaptcha(e.target.value)}
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
            onClick={handleSubmit}
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

export default Formhome;
