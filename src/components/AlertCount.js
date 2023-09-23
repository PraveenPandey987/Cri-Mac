// import React from "react";
// import Grid from "@mui/material/Grid";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

// const dummyData = [
//   {
//     srNo: 1,
//     state: "dis 1",
//     majorCrimes: 10,
//     notoriousCriminals: 5,
//     seizures: 20,
//     jailRelease: 2,
//     jailBreaks: 1,
//     traffickingRecoveries: 3,
//     alerts: 15,
//     total: 456,
//   },
//   {
//     srNo: 2,
//     state: "dis 2",
//     majorCrimes: 8,
//     notoriousCriminals: 7,
//     seizures: 15,
//     jailRelease: 1,
//     jailBreaks: 0,
//     traffickingRecoveries: 4,
//     alerts: 12,
//     total: 46,
//   },
// ];

// export const AlertCount = () => {
//   const TableHeader = {
//     backgroundColor: "#414343",
//     color: "#ffffff",
//     border: "1px",
//     fontSize: ".7rem",
//   };
//   // const BodyCell{

//   // };

//   const TableRow = {
//     "&:nth-of-type(odd)": {
//       backgroundColor: "#E0E9EC",
//     },

//     "&:last-child td, &:last-child th": {
//       border: 0,
//     },
//   };

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       margin={"auto"}
//       spacing={2}
//       maxWidth={"90vw"}
//       style={{
//         top: "50%",
//         left: "50%",
//         width: "100%",
//         // height: "50%",
//       }}
//     >
//       <div
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <h1
//           typography={{
//             fontSize: ".8rem",
//           }}
//         >
//           District Wise Alert Count
//         </h1>

//         <Table
//           className="table"
//           // {...getTableProps}
//           stickyHeader
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//           }}
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell style={TableHeader}>Sr. No.</TableCell>
//               <TableCell style={TableHeader}>State</TableCell>
//               <TableCell style={TableHeader}>Major Henious Crimes</TableCell>
//               <TableCell style={TableHeader}>
//                 Notorious Criminals (Arrested / Wanted)
//               </TableCell>
//               <TableCell style={TableHeader}>
//                 Important Seizure / Recoveries
//               </TableCell>
//               <TableCell style={TableHeader}>
//                 Jail Release of Notorious Criminals
//               </TableCell>
//               <TableCell style={TableHeader}>Jail Breaks</TableCell>
//               <TableCell style={TableHeader}>
//                 Major Human Trafficking Recoveries
//               </TableCell>
//               <TableCell style={TableHeader}>
//                 High Alerts/Hue & Cry Notices
//               </TableCell>
//               <TableCell style={TableHeader}>Total no. of Alerts</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {dummyData.map((row, index) => (
//               <TableRow key={index} style={TableRow}>
//                 <TableCell>{row.srNo}</TableCell>
//                 <TableCell>{row.state}</TableCell>
//                 <TableCell>{row.majorCrimes}</TableCell>
//                 <TableCell>{row.notoriousCriminals}</TableCell>
//                 <TableCell>{row.seizures}</TableCell>
//                 <TableCell>{row.jailRelease}</TableCell>
//                 <TableCell>{row.jailBreaks}</TableCell>
//                 <TableCell>{row.traffickingRecoveries}</TableCell>
//                 <TableCell>{row.alerts}</TableCell>
//                 <TableCell>{row.total}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </Grid>
//   );
// };

// import React from "react";
// import Grid from "@mui/material/Grid";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import { styled } from "@mui/material/styles";

// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

// const dummyData = [
//   {
//     srNo: 1,
//     state: "district 1",
//     majorCrimes: 10,
//     notoriousCriminals: 5,
//     seizures: 20,
//     jailRelease: 2,
//     jailBreaks: 1,
//     traffickingRecoveries: 3,
//     alerts: 15,
//     total: 456,
//   },
//   {
//     srNo: 2,
//     state: "district 2",
//     majorCrimes: 8,
//     notoriousCriminals: 7,
//     seizures: 15,
//     jailRelease: 1,
//     jailBreaks: 0,
//     traffickingRecoveries: 4,
//     alerts: 12,
//     total: 46,
//   },
// ];

// export const AlertCount = () => {
//   const tableHeaderStyle = {
//     backgroundColor: "#414343",
//     color: "#ffffff",
//     border: "1px solid black",
//     fontSize: ".7rem",
//   };

//   const tableRowStyle = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th": {
//       border: 0,
//     },
//   }));
//   return (
//   <Grid
//     container
//     justifyContent="center"
//     alignItems="center"
//     margin={"auto"}
//     spacing={2}
//     maxWidth={"90vw"}
//     style={{
//       top: "50%",
//       left: "50%",
//       width: "100%",
//     }}
//   >
//     <div
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <h1
//         typography={{
//           fontSize: ".8rem",
//         }}
//       >
//         District Wise Alert Count
//       </h1>

//       <Table
//         className="table"
//         stickyHeader
//         style={{
//           backgroundColor: "rgba(0, 0, 0, 0.7)",
//         }}
//       >
//         <TableHead>
//           <TableRow>
//             <TableCell style={tableHeaderStyle}>Sr. No.</TableCell>
//             <TableCell style={tableHeaderStyle}>State</TableCell>
//             <TableCell style={tableHeaderStyle}>
//               Major Heinous Crimes
//             </TableCell>
//             <TableCell style={tableHeaderStyle}>
//               Notorious Criminals (Arrested / Wanted)
//             </TableCell>
//             <TableCell style={tableHeaderStyle}>
//               Important Seizure / Recoveries
//             </TableCell>
//             <TableCell style={tableHeaderStyle}>
//               Jail Release of Notorious Criminals
//             </TableCell>
//             <TableCell style={tableHeaderStyle}>Jail Breaks</TableCell>
//             <TableCell style={tableHeaderStyle}>
//               Major Human Trafficking Recoveries
//             </TableCell>
//             <TableCell style={tableHeaderStyle}>
//               High Alerts/Hue & Cry Notices
//             </TableCell>
//             <TableCell style={tableHeaderStyle}>
//               Total no. of Alerts
//             </TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {dummyData.map((row, index) => (
//             <TableRow key={index} style={tableRowStyle}>
//               <TableCell>{row.srNo}</TableCell>
//               <TableCell>{row.state}</TableCell>
//               <TableCell>{row.majorCrimes}</TableCell>
//               <TableCell>{row.notoriousCriminals}</TableCell>
//               <TableCell>{row.seizures}</TableCell>
//               <TableCell>{row.jailRelease}</TableCell>
//               <TableCell>{row.jailBreaks}</TableCell>
//               <TableCell>{row.traffickingRecoveries}</TableCell>
//               <TableCell>{row.alerts}</TableCell>
//               <TableCell>{row.total}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   </Grid>
// );
// };

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#444444",
    color: theme.palette.common.white,
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
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "#0002fa", color: "white" }}
          endIcon={<SearchIcon />}
        >
          Search
        </Button>

        <h1
          typography={{
            fontSize: ".8rem",
            color: "#0002fa",
          }}
        >
          District Wise Alert Count
        </h1>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr. No.</StyledTableCell>
                <StyledTableCell> district</StyledTableCell>
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
                  <StyledTableCell style={{ color: "#0002fa" }}>
                    {row.district}
                  </StyledTableCell>
                  <StyledTableCell>{row.majorCrimes}</StyledTableCell>
                  <StyledTableCell>{row.notoriousCriminals}</StyledTableCell>
                  <StyledTableCell>{row.seizures}</StyledTableCell>
                  <StyledTableCell>{row.jailRelease}</StyledTableCell>
                  <StyledTableCell>{row.jailBreaks}</StyledTableCell>
                  <StyledTableCell>{row.traffickingRecoveries}</StyledTableCell>
                  <StyledTableCell>{row.alerts}</StyledTableCell>
                  <StyledTableCell>{row.total}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Grid>
  );
};
