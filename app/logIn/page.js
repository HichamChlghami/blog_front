
"use client"

import React, { useContext, useState } from "react";
import "../sginUp/sginup.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import axios from "axios"; // Import axios here if it's not already imported
import { Context } from "../context/context";
import './logIn.css'
import '../sginUp/sginup.css'

function Login() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { dispatch } = useContext(Context);
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleSubmit = async (e) => {
    setSubmitted(true)
    e.preventDefault();
    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    try {
      const response = await axios.post("https://bored-flannel-nightgown-tick.cyclic.app/login", {
        email,
        password,
      })

      // Successful login
      console.log('response for data',response.data.message);
      // Handle admin login
      if (response.data.message.includes('Admin')) {
        // Handle admin login action (redirect to admin panel, set admin session, etc.)
        console.log("Admin login successful");
        dispatch({ type: "SET_ADMIN_ROLE", payload:'Saad El Bouazaoui'});

        // dispatch({ type: "LOGIN_SUCCESS"  ,  payload: response.data });

      } else {
        // Handle regular user login action (redirect to user dashboard, set user session, etc.)
        console.log("User login successful" , response.data);
        // dispatch({ type: "LOGIN_SUCCESS"  ,  payload: email });

      }
      window.location.href = '/'

    } catch (err) {
      // Handle error responses
      console.log(err.message , 'me Error')
    setSubmitted(false)

      const errorResponse = err.response.data;
      if (errorResponse.error.includes("Email")) {
        setEmailError(errorResponse.error);

      } else if (errorResponse.error.includes("password")) {
        setPasswordError(errorResponse.error);

      }
    }
  };

  return (
    <div className="login_page">
      <div className="picture">
        <Link href='/'>
        <img src="/webhived_logo.svg" alt="" className="logo_image" />
        </Link>
      </div>
      <h1 className="log_title">Login To Your Account</h1>
      <div className="card_login_page">
        <form className="card-login" onSubmit={handleSubmit}>
          {/* Email input field */}
          <div className="email">
            <label htmlFor="email" className="login_lable">Email</label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="novalidation">{emailError}</p>}
          </div>
          {/* Password input field */}
          <div className="password">
            <label htmlFor="password" className="login_lable">Password</label>
            <div className="eye">
              <input
                id="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visible ? "text" : "password"}
              />
              {passwordError && <p className="novalidation">{passwordError}</p>}
              {visible ? (
                <AiOutlineEye
                  className="eye1"
                  size={17}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="eye1"
                  size={17}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </div>
          {/* <button type="submit">Submit</button> */}
          <button className={`signup-button${submitted ? ' submitted' : ''}`} 
      disabled={submitted} >
          {submitted ? 'Submitted' : 'Submit'}
        </button>
        </form>

        <div className="sgin-in">
          <p className="sgin-in-p">
            Don't have an account? <Link href="/sginUp">Sign-up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login
