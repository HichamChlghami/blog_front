
'use client'

import React, { useContext, useState } from "react";
import "./sginup.css";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { Context } from "../context/context";
function Sginup() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passValidation, setPassValidation] = useState(false);
  const [placeValidation, setPlaceValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track form submission
const {dispatch} = useContext(Context)
  const handleValidation = () => {
    if (name.trim() === "") {
      setNameValidation(true);
      return false;
    } else if (email.trim() === "") {
      setEmailValidation(true);
      return false;
    } else if (password.trim() === "") {
      setPassValidation(true);
      return false;
    } else if (destination.trim() === "") {
      setPlaceValidation(true);
      return false;
    }
    return true;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const isValid = handleValidation();

    if (isValid && !submitted) {
      try {
        const userData = {
          fullname: name,
          email: email,
          password: password,
          destination: destination,
        };
        await axios.post('https://bored-flannel-nightgown-tick.cyclic.app/users', userData);
        setSubmitted(true)
    dispatch({ type: "LOGIN_SUCCESS"  ,  payload: name });
    window.location.href = '/logIn';

      } catch (err) {
        console.log(err.name, err);
        // Handle error appropriately
      }
    }
  };

  const destination1 = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div className="sginup">
      <div className="picture">
        <Link href='/'>
        <img src="/webhived_logo.svg" alt="" className="logo_image" />
        </Link>
      </div>
      <h1 className="signup_title">Register New Account</h1>
      <form className="card" onSubmit={handlesubmit}>
        <div className="card-sginup">
          <div className="fullName">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              className="input"
              onChange={(e) => setName(e.target.value)}
            />
            {nameValidation ? (<p  className="novalidation">Please enter your fullName.</p>):(null)}
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailValidation ? (<p  className="novalidation">Please enter your email.</p>):(null)}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <div className="eye">
              <input
                type={visible ? "text" : "password"}
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
            {passValidation ? (<p  className="novalidation">Please enter your password.</p>):(null)}
          </div>

          <label htmlFor='destination' className='destination_lable'>
            What Led You to Us?
            <select
              id='destination'
              onChange={(e) => destination1(e)}
              className='destination_options'
            >
              <option value="search-engine"></option>
              <option value="search-engine" className='destination_option'>Search Engine</option>
              <option value="social-media" className='destination_option'>Social Media</option>
              <option value="referral" className='destination_option'>Friend Referral</option>
            </select>
          </label>
          {placeValidation ? (<p className="novalidation">Please select a destination.</p>):(null)}
        </div>
        <button className={`signup-button${submitted ? ' submitted' : ''}`} disabled={submitted}>
          {submitted ? 'Submitted' : 'Submit'}
        </button>
                <div className="sgin-in">
          <p >Have an account?<Link href='/logIn'>Sign in</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Sginup;
