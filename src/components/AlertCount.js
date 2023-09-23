import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#444444",
    color: theme.palette.common.white,
    textAlign: "center",
    verticalAlign: "bottom",
    border: "1px solid #5c5c5c",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// for districts search bar; Backend setup and data fetching

//  const [districts, setDistricts] = useState([]);
//  const [selectedDistrict, setSelectedDistrict] = useState("");
//  useEffect(() => {

//     const fetchDisBackend = async () => {
//       try {

//         const response = await fetch("/api/districts");
//         const data = await response.json();

//        setDistricts(data);
//       } catch (error) {
//         console.error("Error :", error);
//       }
//     };

const handleDistrictChange = (event) => {
  // setSelectedDistrict();
};

const dummyData = [
  {
    srNo: 1,
    district: "district 1",
    majorCrimes: 10,
    notoriousCriminals: 5,
    seizures: 20,
    jailRelease: 2,
    jailBreaks: 1,
    traffickingRecoveries: 3,
    alerts: 15,
    total: 456,
  },
  {
    srNo: 2,
    district: "district 2",
    majorCrimes: 8,
    notoriousCriminals: 7,
    seizures: 15,
    jailRelease: 1,
    jailBreaks: 0,
    traffickingRecoveries: 4,
    alerts: 12,
    total: 46,
  },
];

export const AlertCount = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      margin={"auto"}
      spacing={2}
      maxWidth={"90vw"}
      marginTop={"2rem"}
      style={{
        top: "50%",
        left: "50%",
        width: "100%",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          {/* <label>All</label> */}

          <select
            name="district"
            onChange={handleDistrictChange}
            // value={selectedDistrict}
            required
          >
            <option value="">Select District</option>
            {/* {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))} */}
          </select>

          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#0002fa",
              color: "white",
              marginRight: "10px",
            }}
            endIcon={<SearchIcon />}
          >
            Search
          </Button>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
              fontSize: "1.2rem",
              color: "#0002fa !important",
            }}
          >
            <Typography variant="h4" style={{ color: "#0002fa" }}>
              District Wise Alert Count
            </Typography>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 700,
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr. No.</StyledTableCell>
                <StyledTableCell style={{ width: "13%" }}>
                  District
                </StyledTableCell>
                <StyledTableCell>Major Heinous Crimes</StyledTableCell>
                <StyledTableCell>
                  Notorious Criminals (Arrested / Wanted)
                </StyledTableCell>
                <StyledTableCell>
                  Important Seizure / Recoveries
                </StyledTableCell>
                <StyledTableCell>
                  Jail Release of Notorious Criminals
                </StyledTableCell>
                <StyledTableCell>Jail Breaks</StyledTableCell>
                <StyledTableCell>
                  Major Human Trafficking Recoveries
                </StyledTableCell>
                <StyledTableCell>High Alerts/Hue & Cry Notices</StyledTableCell>
                <StyledTableCell>Total no. of Alerts</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.srNo}</StyledTableCell>
                  <StyledTableCell style={{ color: "#0002fa", width: "13%" }}>
                    {row.district}
                  </StyledTableCell>
                  <StyledTableCell>{row.majorCrimes}</StyledTableCell>
                  <StyledTableCell>{row.notoriousCriminals}</StyledTableCell>
                  <StyledTableCell>{row.seizures}</StyledTableCell>
                  <StyledTableCell>{row.jailRelease}</StyledTableCell>
                  <StyledTableCell>{row.jailBreaks}</StyledTableCell>
                  <StyledTableCell>{row.traffickingRecoveries}</StyledTableCell>
                  <StyledTableCell>{row.alerts}</StyledTableCell>
                  <StyledTableCell
                    style={{ backgroundColor: "0, 2, 250, 0.2" }}
                  >
                    {row.total}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Grid>
  );
};
