import React, { useState } from 'react'
import Navbar2 from '../../components/Navbar2'
import { Button, Grid } from '@mui/material'
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MajorHenious from './IncidentDetails/MajorHenious';
import NotoriousCriminals from './IncidentDetails/NotoriousCriminals';
import ImportantSeizures from './IncidentDetails/ImportantSeizures';
import JailReleases from './IncidentDetails/JailReleases';
import JailBreaks from './IncidentDetails/JailBreaks';
import HumanTrafficking from './IncidentDetails/HumanTrafficking';
import HighAlertCry from './IncidentDetails/HighAlertCry';

function UploadAlert() {
  const [choice, setChoice] = useState('1');
  const [disableAdd, setDisableAdd] = useState(0);

  const handleChoice = (event) => {
    const getChoice = event.target.value;
    setChoice(getChoice);
  }

  const handleNoOfFiles= (event) =>{
    const n = event.target.files.length;
    const files = event.target.files;
    // console.log(files[0].name, files[0].size, files[0].type);
    if(n>5){
      alert("Maximum 5 files are allowed");
      setDisableAdd(1);
    }
    else{ 
      for(let file of files){
        if(file.size<2048){
          alert("File size less than 2KB not allowed");
          setDisableAdd(1);
          break;
        }else if(file.size>1048576){
          alert("File size greater than 2MB not allowed");
          setDisableAdd(1);
          break;
        }
      }; 
    }
  }

  return (
    <>
      <Navbar2 />
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "10px",
      }}>
        <div
          style={{ color: "blue", fontWeight: "bold", padding: "0.5em 0em", fontSize: "20px" }}
        >
          Upload Alert
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #E0E9EC",
          borderRadius: "5px",
          padding: "1em 2em 1em 1em",
          maxWidth: "65%"
        }}>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", marginBottom:"0.5em" }}>Crime Category<span style={{ color: "red" }}>*</span></div>
              <select name="option"
                style={{ width: "100%", padding: "6.5px", border: "1px solid #E0E9EC", borderRadius: "3px" }}
                onChange={(e) => (handleChoice(e))}
              >
                <option value="1" selected>Major Heinous Crimes</option>
                <option value="2">Notorious Criminals(Arrested/Wanted)</option>
                <option value="3">Important Seizure/Recoveries</option>
                <option value="4">Jail Releases of Notorious Criminals</option>
                <option value="5">Jail Breaks</option>
                <option value="6">Major Human Trafficking Recoveries</option>
                <option value="7">High Alerts/Hue & Cry Notices</option>
              </select>
            </Grid>

            <Grid item xs={6}>
              <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", marginBottom:"0.5em"}}>FIR Number<span style={{ color: "red" }}>*</span></div>

              <input type="text"
                placeholder="Enter 14 digits FIR Number"
                style={{
                  width: "98%",
                  padding: "6.5px",
                  border: "1px solid #E0E9EC",
                  borderRadius: "3px",
                }} />
              <p style={{ color: "blue", fontWeight: "bold", fontSize:"10px" }}
              > Note: 14 digits (2 digits of state + 3 digits of district + 3 digits of PS + 2 digits of year + 4 digits of year)
              </p>
            </Grid>

            <Grid item xs={2}>
              <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", }}>Incident Details</div>
            </Grid>

            {choice === '1' && <MajorHenious />}
            {choice === '2' && <NotoriousCriminals />}
            {choice === '3' && <ImportantSeizures />}
            {choice === '4' && <JailReleases />}
            {choice === '5' && <JailBreaks />}
            {choice === '6' && <HumanTrafficking />}
            {choice === '7' && <HighAlertCry />}

            <Grid item xs={2}>
              <div style={{ fontWeight: "bold", display: "flex", justifyContent: "start", }}>Attachment(s)</div>
            </Grid>

            <Grid item xs={8}>
              <input type="file"
                placeholder="Crime Type"
                style={{
                  width: "100%",
                  padding: "6.5px",
                  border: "1px solid #E0E9EC",
                  borderRadius: "3px",
                }}
                multiple
                onChange={(e)=>{handleNoOfFiles(e)}}
                accept=".jpg,.jpeg,.bmp,.png,.tif,.tiff,.doc,.docx,.txt,.pdf,.xlx, .xlsx"
              />

              {/* { files && files.map((item, id)=>(
                  <p key={id} style={{ fontWeight: "bold", fontSize:"13px" }}>
                    {id+1}. {item.name}, size: {item.size}, type: {item.type}<br/>
                  </p>
              ))} */}
              <p style={{ fontWeight: "bold", fontSize:"13px" }}>
                <span style={{ color: "red" }}>*</span>Minimum <span style={{ color: "blue" }}>2KB</span> size of file uploaded.<br/>
                <span style={{ color: "red" }}>*</span>Maximum <span style={{ color: "blue" }}>1MB</span> size of file uploaded.<br/>
                <span style={{ color: "red" }}>*</span> Only <span style={{ color: "blue" }}>.jpg,.jpeg,.bmp,.png,.tif,.tiff,.doc,.docx,.txt,.pdf,.xlx, .xlsx</span> type file can be uploaded.
                </p>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="success" disabled={disableAdd} style={{ width: "100%" ,marginLeft:"2px" }} >
                Add
              </Button>
            </Grid>

          </Grid>

          <div style={{
            borderBottom: "1px solid #E0E9EC", width: "100%",
            backgroundColor: "#E0E9EC",
            padding: "10px",
          }}>
            <div style={{
              width: "100%", display: "flex",
              justifyContent: "flex start", gap: "10px",
            }}><Button variant="contained" color="primary" endIcon={<FileUploadIcon />}>
                Upload
              </Button>
              <Button variant="contained" color="error" endIcon={<DoDisturbIcon />}>
                Reset
              </Button></div>
            <p style={{ fontWeight: "bold" }}>
              Note: <br /> <br />
              1: Incident details may be filled in the pre formatted text template as above.<br />
              2: Relevant information may also be filled using copy & paste from information in FIR.<br />
              3: Any information other than pre-defined text can be filled in the "Additional Information" field.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default UploadAlert
