import React from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  // Reset password form logic here...

  return (
    <div className='container'>
      <div className='leftside'>
        {/* Content for the left side if any */}
      </div>
      <div className='rightside'>
        <Link to="/" className="backpage">Back to sign in</Link>
        <div className="apnahire">
          {/* Content for apnahire if any */}
        </div>
        <div className="image">
          {/* Content for image if any */}
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
