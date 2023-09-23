import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../styles/FirSummaryStyles.css";
function FirSummary() {
  return (
    <>
      <div>
        <div
          style={{
            textAlign: "center",
            color: "blue",
            fontWeight: "bold",
            fontWeight: "bold",
            margin: "1em",
            fontSize: "1.5em",
          }}
        >
          FIR Summary
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "left",
            width: "80%",
            margin: "auto",
          }}
        >
          <div
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2em",
              marginBottom: "1em",
            }}
          >
            FIR Details{" "}
          </div>
          <div>
            {" "}
            <Grid container spacing={2}>
              <Grid item md={4} sx={12}>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "left",
                  }}
                >
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      State :
                    </div>
                    <div>JHARKHAND</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      FIR Number{" "}
                    </div>
                    <div>475473537393004</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      General Diary Entry Date:
                    </div>{" "}
                    <div>null</div>
                  </div>
                </Grid>
              </Grid>
              <Grid item md={4} sx={12}>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "left",
                  }}
                >
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      District
                    </div>
                    <div>SARAIKELA</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      FIR Date
                    </div>
                    <div>22.09.2023</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Time and Place of Occurence{" "}
                    </div>
                    <div>
                      [LONGITUDE: 57.8 , LATITUDE: 45.9 , POLICE STATION:
                      SARAIKELA,PINCODE: 831014 ]
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid item md={4} sx={12}>
                <Grid>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Polics Station
                    </div>
                    <div>Saraikela PS </div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      General Diary Number{" "}
                    </div>
                    <div>null</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      FIR Status
                    </div>
                    <div>Under Investigation</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2em",
              margin: "1em 0",
            }}
          >
            Complaint Details
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={4} sx={12}>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "left",
                  }}
                >
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Name
                    </div>
                    <div>Shombhu Das</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Age
                    </div>
                    <div>23</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Relation Type
                    </div>
                    <div>null</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Address
                    </div>
                    <div>Lorem ipsum dolor sit amet.</div>
                  </div>
                </Grid>
              </Grid>

              <Grid item md={4} sx={12}>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "left",
                  }}
                >
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Serial No.
                    </div>
                    <div>453</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Mobile Number{" "}
                    </div>
                    <div>46353836290</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Relaive Name:
                    </div>
                    <div>Uncle</div>
                  </div>
                </Grid>
              </Grid>

              <Grid item md={4} sx={12}>
                <Grid>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Date of Birth
                    </div>
                    <div>12.5.2000</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Gender
                    </div>
                    <div>Male</div>
                  </div>
                  <div className="indBlock">
                    <div style={{ marginRight: "1em" }} className="heading">
                      Religion
                    </div>
                    <div>Hindu</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2em",
              margin: "1em 0",
            }}
          >
            FIR Full Details
          </div>

          <div>
            <Box sx={{ flexGrow: 1, padding: "1.5em 0em" }}>
              <Grid container>
                <Grid
                  xs={12}
                  md={2}
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1em",
                  }}
                >
                  FIR Contents
                </Grid>
                <Grid xs={12} md={10}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid obcaecati consequuntur, temporibus eum ipsum
                  architecto voluptas, magni dolore nobis, officia labore.
                  Voluptatum amet odio illo beatae cum reprehenderit delectus
                  eum error enim, sed quisquam dolorum aperiam aliquam.
                  Accusantium, quia porro? Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Iste nesciunt mollitia pariatur
                  incidunt animi. Dicta soluta iusto assumenda est tempore vero
                  magni eligendi dolorum, explicabo atque? Dignissimos
                  voluptatibus, velit beatae repudiandae ut laborum veritatis
                  ipsam sequi perspiciatis nihil quidem voluptates.
                </Grid>
              </Grid>
            </Box>
          </div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  md={2}
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1em",
                  }}
                >
                  IO NAME
                </Grid>
                <Grid item xs={10} md={10}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  laboriosam asperiores corporis reiciendis dolores magnam sed
                  aspernatur commodi ipsam accusantium.
                </Grid>
              </Grid>
            </Box>{" "}
          </div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  md={2}
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1em",
                  }}
                >
                  ACT/Section
                </Grid>
                <Grid item xs={10} md={10}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  laboriosam asperiores corporis reiciendis dolores magnam sed
                  aspernatur commodi ipsam accusantium.
                </Grid>
              </Grid>
            </Box>{" "}
          </div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  md={2}
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1em",
                  }}
                >
                  Major Head
                </Grid>
                <Grid item xs={10} md={10}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  laboriosam asperiores corporis reiciendis dolores magnam sed
                  aspernatur commodi ipsam accusantium.
                </Grid>
              </Grid>
            </Box>{" "}
          </div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  md={2}
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1em",
                  }}
                >
                  Minor Head
                </Grid>
                <Grid item xs={10} md={10}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  laboriosam asperiores corporis reiciendis dolores magnam sed
                  aspernatur commodi ipsam accusantium.
                </Grid>
              </Grid>
            </Box>{" "}
          </div>

          <div style={{ marginBottom: "2em" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  md={2}
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1em",
                  }}
                >
                  Victim
                </Grid>
                <Grid item xs={10} md={10}>
                  Mr. Naresh Durgapal
                </Grid>
              </Grid>
            </Box>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default FirSummary;
