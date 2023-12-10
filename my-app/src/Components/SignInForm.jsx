import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "./SignForm.css";
import logoo from "./Assets/arrow.png";

const SignInForm = () => {
  const navigate = useNavigate(); // Access the navigate function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const handleSignIn = () => {
    if (email === 'purushendrakarn@gmail.com' && password === 'password') {
      console.log("Login successful!");
      setLoggedIn(true);
      setShowSuccessMessage(true);
      setShowFailed(false);
      // Redirect to homepage on successful login
      navigate("/homepage"); // Update "/homepage" with your actual homepage route
    } else {
      console.log("Invalid credentials");
      setLoggedIn(false);
      setShowSuccessMessage(false);
      setShowFailed(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signn">
      <p>Sign In</p>
      <Form>
        <div className="txt_field">
          <label>Email Address</label>
          <input type="email" required onChange={handleEmailChange} />
        </div>
        <div className="txt_field">
          <label>Password</label>
          <input type="password" required onChange={handlePasswordChange} />
        </div>
        <button className="signin-button" onClick={handleSignIn}>
          {loggedIn ? 'Logged In' : 'SIGN IN'}
          <div className="logocontainer" ><img src={logoo} width={20} height={20} alt="arrow" /></div>
        </button>
        {showSuccessMessage && (
          <p className="success-message">Login successful! Redirecting...</p>
        )}
        {showFailed && (
          <p className="failed-message">Invalid credentials. Please try again.</p>
        )}
      </Form>
    </div>
  );
};

export default SignInForm;
