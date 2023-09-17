import React from "react";
import { Link } from "react-router-dom";
import JPLogo from "../assets/logo1.png";
function MiddlewarePage() {
  // You can set a state variable to track whether the login is successful
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  // Function to handle the navigation to the dashboard
  const navigateToDashboard = () => {
    window.location.href = "/";
  };

  // You can update the loginSuccess state when login is successful
  // For demonstration purposes, you can set it to true when the component loads
  React.useEffect(() => {
    // Simulating a successful login (you should replace this with your actual login logic)
    setLoginSuccess(true);
  }, []);

  return (
    <div>
      {loginSuccess ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2em",
          }}
        >
          <div>
            <img src={JPLogo} alt="" style={{ height: "5em", width: "5em" }} />
          </div>
          <div style={{ fontWeight: "bold", margin: "0.5em" }}>Welcome!</div>
          <div style={{ color: "red", fontWeight: "bold" }}>
            CRIME MULTI AGENCY CENTRE
          </div>
          <div style={{ color: "red", fontWeight: "bold" }}>(Cri-MAC),NCRB</div>
          {/* <button onClick={navigateToDashboard}>Go to Dashboard</button> */}
          <div>
            <Link to="/" style={{ color: "blue", textDecoration: "none" }}>
              Click here to{" "}
            </Link>{" "}
            to continue...
          </div>
        </div>
      ) : (
        <div>
          <h2>Login Failed</h2>
          {/* Add a login form or error message here */}
        </div>
      )}
    </div>
  );
}

export default MiddlewarePage;
