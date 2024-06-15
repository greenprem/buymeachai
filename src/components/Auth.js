import React from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
    const navigate = useNavigate();

      const handleSignupClick = () => {
    navigate('/login/new');
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
          <h2>Create your account</h2>
          <p>Choose a username for your page.</p>
          <div class="custom-input-box">
  <span class="prefix">buymeacoffee.com/</span>
  <input type="text" placeholder="username" />
</div>
          <button onClick={handleSignupClick} className="bmc-signup-btn">Sign up</button>
          <p className="bmc-terms">
            By continuing, you agree to the <a href="/terms">terms of service</a> and <a href="/privacy">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
