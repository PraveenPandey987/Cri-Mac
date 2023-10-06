import React, { useState } from 'react';

function Communications() {
  const [contactType, setContactType] = useState('email');
  const [emailState, setEmailState] = useState({
    state: '',
    district: '',
    email: '',
    subject: '',
    message: '',
    attachment: null,
  });

  const [smsState, setSmsState] = useState({
    state: '',
    district: '',
    policeStation: '',
    phoneNumber: '',
    content: '',
  });

  const handleRadioChange = (e) => {
    setContactType(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailState({ ...emailState, [e.target.name]: e.target.value });
  };

  const handleSmsChange = (e) => {
    setSmsState({ ...smsState, [e.target.name]: e.target.value });
  };

  const handleEmailAttachmentChange = (e) => {
    setEmailState({ ...emailState, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactType === 'email') {
      
      console.log('Email Form Data:', emailState);
    } else {
      
      console.log('SMS Form Data:', smsState);
    }
    
  };

  const [fileInputs, setFileInputs] = useState([<input key={0} type="file" name="fileToUpload[]" onChange={handleEmailChange} />]);
  const allowedFileTypes = [
    '.jpg', '.jpeg', '.png', '.pdf', '.bmp', '.tif', '.doc', '.tiff', '.docx', '.txt', '.pdf', '.xlx', '.xlsx'
  ];

  const addFileInput = () => {
    const newInputKey = fileInputs.length;
    const newFileInput = <input key={newInputKey} type="file" name="fileToUpload[]" onChange={handleEmailChange}/>;
    setFileInputs([...fileInputs, newFileInput]);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const fileSizeInBytes = file.size;
      const minSize = 2 * 1024; 
      const maxSize = 1024 * 1024; 

      if (fileSizeInBytes < minSize) {
        alert('File is too small. Minimum size is 2KB.');
        event.target.value = ''; 
      } else if (fileSizeInBytes > maxSize) {
        alert('File is too large. Maximum size is 1MB.');
        event.target.value = ''; 
      } else if (!allowedFileTypes.includes(file.name.split('.').pop().toLowerCase())) {
        alert('Invalid file type. Allowed types are: .jpg, .jpeg, .png, .pdf, .bmp, .tif, .doc, .tiff, .docx, .txt, .pdf, .xlx, .xlsx');
        event.target.value = ''; 
      }
    }
  }
  return (
    <div>
      <h3 style={{
              marginLeft:"0rem",
              marginTop:"1.1rem",
              color:"blue",
              textAlign:"center"
              }}>Communication</h3>
      <div style={{
              marginLeft:"0rem",
              marginTop:"1.1rem",
              textAlign:"center"
              }}>
        <label>
          <input
            type="radio"
            name="contactType"
            value="email"
            checked={contactType === 'email'}
            onChange={handleRadioChange}
          />
          Email
        </label>
        <label>
          <input
            type="radio"
            name="contactType"
            value="sms"
            checked={contactType === 'sms'}
            onChange={handleRadioChange}
          />
          SMS
        </label>
       </div >
       <div style={{
      margin: '0px 100px 5px 100px',
      padding:'0px 10px 10px 10px',
      border: '2px solid #C0C0C0'
    }}>
      {contactType === 'email' ? (
        <form onSubmit={handleSubmit}>
          <h4 style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1.5em",
              background:'#E5E4E2'
            }}>Email</h4>
          <div>
           <label style={{
              marginTop:"2rem"
              }}>To</label>
              <div style={{
              marginLeft:"16rem",
              marginTop:"0rem"
              }}>
            <select name="state" onChange={handleEmailChange} required style={{marginRight:"1rem"}}>
              
              <option value="">Select State</option>
            </select>
            
            <select name="district" onChange={handleEmailChange} required>
              
              <option value="">Select District</option>
            </select>
            </div>
            <div style={{
              marginLeft:"16rem",
              marginTop:"1.1rem"
              }}>
            <select name="policeStation" onChange={handleSmsChange} required style={{marginRight:"1rem"}}>
              
              <option value="">Select Police Station</option>
            </select>
            <select name="phoneNo." onChange={handleSmsChange} required>
              
              <option value="" style={{marginLeft:"30rem"}}>Select Recipent's Phone No.</option>
            </select>
            
            </div>
           
          </div>
          
          <div style={{
              marginLeft:"16rem",
              marginTop:"1.1rem"
              }}>
            
            <input
              type="email"
              name="email"
              placeholder='Enter e-mail'
              value={emailState.email}
              onChange={handleEmailChange}
              required
            />
            <h5 style={{marginTop:"0.1rem"}}>1.(Multiple E-mail addresses can be seprated by comma ",") 2. Duplicate E-mail adresses will be remove automatically</h5>
          </div>
          <div>
            <label style={{
              marginRight:"12.8rem"
              }}>Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder='text'
              value={emailState.subject}
              onChange={handleEmailChange}
              required
            />
          </div><br/>
          <div>
            <label style={{
              marginRight:"12.1rem",
              marginBottom:"5rem",
              }}>Message:</label>
            <textarea
            
              name="message"
              value={emailState.message}
              placeholder='Content'
              rows={5} 
              cols={60}
              onChange={handleEmailChange}
              
              required
            ></textarea>
          </div><br/>
          <div>
            <label>Attachment:</label>
            <div style={{
              marginLeft:"16rem",
              
            }}>
              <form action="upload.php" method="post" encType="multipart/form-data">
                <div id="fileInputs" >
                  {fileInputs.map((input, index) => (
                    <div key={index} style={{
                      border:"2px solid #C0C0C0 ",
                      borderBlockEndWidth:"30%",
                    padding:"0.4 0.4 0.2 0.2"}}>
                      {index+1}.{input}
                      
                    </div>
                   
                  ))}
                </div>
                <button type="button" onClick={addFileInput} style={{
                  color:"white",
                  marginTop:"0.2rem",
                  background:"green",
                  border:"1px solid green",
                  borderRadius:"5%",
                  padding:"0.5rem 2.4rem"
                }}>Add </button>
                
              </form>
            </div>
  
            <h5 style={{
              marginLeft:"16rem",
              marginTop:"0.1rem"}}>*Minimum 2KB size of file uploaded.<br/>
              *Maximum 1MB size of file uploaded.<br/>
              *Only ".jpg, .jpeg, .png, .pdf, .bmp, .tif, .doc, .tiff, .docx, .txt, .pdf, .xlx, .xlsx" type file can be uploaded.
            </h5>
          </div>
          <br/><br/>
          <div style={{
              marginBottom:"0",
              padding:"0.7rem",
              background:'#E5E4E2',
              
            }}>
            <button type="submit" style={{
              background:"blue",
              color:"white",
              textDecorationColor:"white",
              padding:"0.3rem",
              marginRight:"1.1rem",
              border:"0.1rem solid blue",
              borderRadius:"12%"
              }}>Send </button>
            <button type='reset'style={{
              background:"red",
              color:"white",
              textDecorationColor:"white",
              padding:"0.3rem",
              marginRight:"1.1rem",
              border:"0.1rem solid red",
              borderRadius:"12%"
              }}>Reset</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <h4 style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1.5em",
              background:'#E5E4E2'
            }}>SMS</h4>
          <div >
            <label>Phone Number</label>
            <select name="state" onChange={handleSmsChange} required style={{
              marginTop:"0.1rem",
              marginLeft:"9.3rem",
              marginRight:"1rem"
              }}>
              
              <option value="">Select State</option>
            </select>
            <select name="district" onChange={handleSmsChange} required 
              >
              
              <option value="">Select District</option>
            </select>
          </div>
          
          <div style={{
              marginTop:"0.1rem",
              marginLeft:"16rem"
              }}>
           
            <select name="policeStation" onChange={handleSmsChange} required style={{marginRight:"1rem"}}>
              
              <option value="">Select Police Station</option>
            </select>
            <select name="phoneNo." onChange={handleSmsChange} required>
              
              <option value="">Select Recipent's Phone No.</option>
            </select>
            
          </div>
          <div>

          
            <input
              type="Phone No."
              name="Phone No."
              placeholder="Recipent's Phone no."
              value={emailState.email}
              onChange={handleEmailChange}
              cols={40}
              required
              style={{
                marginTop:"1rem",
                marginLeft:"16rem"
                }}
            />
            <h5 style={{
              marginTop:"0.1rem",
              marginLeft:"16rem"
              }}>1.(Multiple phone numbers can be seprated by comma ",") 2. Duplicate phone numbers will be remove automatically</h5>
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="content"
              value={smsState.content}
              placeholder='Content'
              onChange={handleSmsChange}
              rows={5}
              cols={60}
              required
              style={{
                marginLeft:"12.1rem"
              }}
            ></textarea>
            
          </div>
          <div style={{
              marginBottom:"0",
              padding:"0.7rem ",
              background:'#E5E4E2',
              
            }}>
          <button type="submit" style={{
              background:"blue",
              color:"white",
              textDecorationColor:"white",
              padding:"0.3rem",
              marginRight:"1.1rem",
              border:"0.1rem solid blue",
              borderRadius:"12%"
              }}>Send </button>
            <button type='reset'style={{
              background:"red",
              color:"white",
              textDecorationColor:"white",
              padding:"0.3rem",
              marginRight:"1.1rem",
              border:"0.1rem solid red",
              borderRadius:"12%"
              }}>Reset</button>
          </div>
        </form>
      )}
    </div>
    </div>
  );
}


export default Communications;
