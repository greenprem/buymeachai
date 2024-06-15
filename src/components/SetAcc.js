import React, { useState, useEffect } from 'react';
import './Auth.css';
import './SetAcc.css';
import { useNavigate } from 'react-router-dom';

const SetAcc = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(true);
  const [showDetails1, setShowDetails1] = useState(false);

  useEffect(() => {
    setShowDetails1(false); // Set initial state
  }, []);

  const handleSignupClick = () => {
    setShowDetails(false);
    setShowDetails1(true);
  };
  const finalClick = () => {
    navigate('/dashboard')
  };

  return (
    <div className="bmc-container">
      <div className="bmc-left">
        <header className="bmc-header">
          <img src="/images/batora.png" alt="Buy Me a Coffee" className="bmc-logo" />
          <h1>Welcome to Buy Me a Chai</h1>
        </header>
      </div>
      <div className="bmc-right">
        <div className="bmc-signup">
          <p>Already have an account? <a href="/login">Sign in</a></p>
          <h2>Setup your account</h2>
          {showDetails && (
            <>
              <img id="pfp" src="/images/pfp.png" alt="Icon" width="100" height="100" />
              <p>Choose a username for your page.</p>
              <div className="custom-input-box">
                <input type="text" placeholder="Name" />
              </div>
              <div id='abouttext' className="custom-input-box">
                <textarea
                  type="text"
                  placeholder="Write about your passion and what drives you. Explain how contributions can make a difference in your work and create a connection with your supporters…"
                />
              </div>
              <button onClick={handleSignupClick} className="bmc-signup-btn">Next</button>
            </>
          )}
          {showDetails1 && (
            <>
              <p>Enter your UPI VPA/ID</p>
              <div className="custom-input-box">
                <input type="text" placeholder="UPI" />
              </div>
              <button onClick={finalClick} className="bmc-signup-btn">Start</button>
            </>
          )}
          <p className="bmc-terms">
            By continuing, you agree to the <a href="/terms">terms of service</a> and <a href="/privacy">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetAcc;
