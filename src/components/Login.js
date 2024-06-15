import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ Heading, SubHeading }) => {
  const [step, setStep] = useState(1);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [isSlidingIn, setIsSlidingIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2) {
      setIsSlidingIn(true);
    }
  }, [step]);

  const handleContinueClick = () => {
    if (step === 1) {
      setIsSlidingOut(true);
      setTimeout(() => {
        setIsSlidingOut(false);
        setStep(2);
      }, 500); // Match the transition duration
    } else if (step === 2) {
      // Redirect to /account/setup
      navigate('/account/setup');
    }
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
          <p>Don't have an account? <a href="/join">Sign up</a></p>
          <h2>{Heading}</h2>
          {step === 1 && (
            <>
              <p className={isSlidingOut ? "slide-out" : ""}>{SubHeading}</p>
              <div className={`custom-input-box ${isSlidingOut ? "slide-out" : ""}`}>
                <input type="text" placeholder="Email" />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <p className={`slide-in ${isSlidingIn ? "slide-in-active" : ""}`}>Enter the password of your account.</p>
              <div className={`custom-input-box slide-in ${isSlidingIn ? "slide-in-active" : ""}`}>
                <input type="password" placeholder="Password" />
              </div>
            </>
          )}
          <button className="bmc-signup-btn" onClick={handleContinueClick}>Continue</button>
          <p id='continuew'>or continue with</p>
          <p className="bmc-terms">
            By continuing, you agree to the <a href="/terms">terms of service</a> and <a href="/privacy">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;