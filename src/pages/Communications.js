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

  return (
    <div>
      <h4>Communications</h4>
      <div>
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
      margin: '5px 100px 5px 100px',
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
           <label>To</label>
            <select name="state" onChange={handleEmailChange} required>
              
              <option value="">Select State</option>
            </select>
            
            <select name="district" onChange={handleEmailChange} required>
              
              <option value="">Select District</option>
            </select>
            <div>
            <select name="policeStation" onChange={handleSmsChange} required>
              
              <option value="">Select Police Station</option>
            </select>
            <select name="phoneNo." onChange={handleSmsChange} required>
              
              <option value="">Select Recipent's Phone No.</option>
            </select>
            
            </div>
           
          </div>
          
          <div>
            
            <input
              type="email"
              name="email"
              placeholder='Enter e-mail'
              value={emailState.email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder='text'
              value={emailState.subject}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={emailState.message}
              placeholder='Content'
              onChange={handleEmailChange}
              required
            ></textarea>
          </div>
          <div>
            <label>Attachment:</label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .pdf, .bmp, .tif, .doc, .tiff, .docx, .txt, .pdf, .xlx, .xlsx"
              onChange={handleEmailAttachmentChange}
            />
          </div>
          <div>
            <button type="submit">Send </button>
            <button type='reset'>Reset</button>
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
            <select name="state" onChange={handleSmsChange} required>
              
              <option value="">Select State</option>
            </select>
            <select name="district" onChange={handleSmsChange} required>
              
              <option value="">Select District</option>
            </select>
          </div>
          
          <div>
           
            <select name="policeStation" onChange={handleSmsChange} required>
              
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
              required
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="content"
              value={smsState.content}
              placeholder='Content'
              onChange={handleSmsChange}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Send </button>
            <button type='reset'>Reset</button>
          </div>
        </form>
      )}
    </div>
    </div>
  );
}

export default Communications;
