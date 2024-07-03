import React from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ResetPassword = () => {
  return (
    <div className='container'>
      <div className='leftside'>
      </div>
      <div className='rightside'>
        <Link to="/" className="backpage"><FontAwesomeIcon icon={faArrowLeft} />Back to sign in</Link>
        <div className="apnahire">
        </div>
        <div className="image">
        </div>
        <div className="form">
          <br />
          <h1>Reset your password</h1>
          <p>Enter the email address associated with your account. We will send a reset link to your email.</p>
          <br />
          <h5>WORK EMAIL</h5>
          <br />
          <form action="">
            <div className="inputfield">
              <input type="email" id="work-email" placeholder="Enter work email address"/>
            </div>
            <button className="button">Send Reset link</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
