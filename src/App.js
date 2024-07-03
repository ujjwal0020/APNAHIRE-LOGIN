// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import './App.css';
// import ResetPassword from './ResetPassword.jsx';

// function App(){
//   const [workEmail, setWorkEmail]=useState('');
//   const [password, setPassword]=useState('');
//   const [error, setError]=useState(null);

//   const handleSignIn=(event)=>{
//     event.preventDefault();
//     if (!workEmail || !password){
//       setError('Please fill in all fields');
//     } else{
//       console.log('Sign in successful!');
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <div className="container">
//             <div className="left-side">
//             </div>
//             <div className="right-side">
//               <div className="signin">
//                 <h2>Sign in to apnaHire</h2>
//                 <p>Please enter your details to access your account</p>
//                 <div className="inputfield">
//                   <label htmlFor="workemail"><b>Work Email </b></label>
//                   <input
//                     type="email"
//                     id="workemail"
//                     placeholder="Enter work email address"
//                     value={workEmail}
//                     onChange={(event) => setWorkEmail(event.target.value)}
//                   />
//                 </div>
//                 <div className="inputfield">
//                   <label htmlFor="password"><b>Password </b></label>
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter Password"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                   />
//                 </div>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <p className='para'>Password must be 8 characters</p>
//                 <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
//                 <button className="sign-in-button" onClick={handleSignIn}>Sign in</button>
//                 <p className='para1'>By clicking sign in, you agree to the apna <a href="#">Terms of Service</a> & <a href="#">Privacy policy</a></p>
//                 <div className="earlyaccess">
//                   <h3>Get early access Beta</h3>
//                   <p>Join India's #1 professional platform to hire and manage talent with our enterprise account.</p>
//                   <button className="requestbutton"><b>Request early access</b></button>
//                 </div>
//               </div>
//             </div>
//             <div className="endside">
//               <p className='para3'>Not an enterprise user? Go to  <a href="#">Employer</a></p>
//             </div>
//           </div>
//         } />
//         <Route path="/forgot-password" element={<ResetPassword />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import ResetPassword from './ResetPassword.jsx';

function App(){
  const [workEmail, setWorkEmail]=useState('');
  const [password, setPassword]=useState('');
  const [error, setError]=useState(null);

  const handleSignIn=(event)=>{
    event.preventDefault();
    if (!workEmail || !password){
      setError('Please fill in all fields');
    } else if (!validateEmail(workEmail)) {
      setError('Invalid email address');
    } else {
      console.log('Sign in successful!');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <div className="left-side">
            </div>
            <div className="right-side">
              <div className="signin">
                <h2>Sign in to apnaHire</h2>
                <p>Please enter your details to access your account</p>
                <div className="inputfield">
                  <label htmlFor="workemail"><b>Work Email </b></label>
                  <input
                    type="email"
                    id="workemail"
                    placeholder="Enter work email address"
                    value={workEmail}
                    onChange={(event) => setWorkEmail(event.target.value)}
                  />
                </div>
                <div className="inputfield">
                  <label htmlFor="password"><b>Password </b></label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p className='para'>Password must be 8 characters</p>
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                <button className="sign-in-button" onClick={handleSignIn}>Sign in</button>
                <p className='para1'>By clicking sign in, you agree to the apna <a href="#">Terms of Service</a> & <a href="#">Privacy policy</a></p>
                <div className="earlyaccess">
                  <h3>Get early access Beta</h3>
                  <p>Join India's #1 professional platform to hire and manage talent with our enterprise account.</p>
                  <button className="requestbutton"><b>Request early access</b></button>
                </div>
              </div>
            </div>
            <div className="endside">
              <p className='para3'>Not an enterprise user? Go to  <a href="#">Employer</a></p>
            </div>
          </div>
        } />
        <Route path="/forgot-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;