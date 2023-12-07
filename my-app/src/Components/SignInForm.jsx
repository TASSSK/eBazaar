import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import "./SignForm.css"
import logoo from "./Assets/arrow.png"

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log("Email: " + email);
    console.log("Password: " + password);
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
        <button className="signin-button" onClick={handleSignIn}> SIGN IN
          <div className="logocontainer" ><img src={logoo} width={20} height={20} /></div>
        </button>
      </Form>
    </div>
  );
};

export default SignInForm;
