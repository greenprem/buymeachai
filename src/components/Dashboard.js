import React from 'react';
import './Auth.css';
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();

      const handleSignupClick = () => {
    navigate('/login/new');
  };
  return (
    <div className="bmc-container">
      <div className="bmc-left">
        <div id='topinfo'>
      <img id="" src="/images/batora.png" alt="Icon" width="50" height="50" /><h3>Buy Me A Chai</h3>
      </div>
        <div className='boxespanel'>
            <div id='side' class="custom-input-box">
            <p>Payments</p>
            </div>
            <div id='side' class="custom-input-box">
            <p>Integrations</p>
            </div>
            <div id='side' class="custom-input-box">
            <p>Logger</p>
            </div>
            </div>
        <header className="bmc-header">
        </header>
        
      </div>
      <div className="bmc-right">
        <div className="bmc-signup">
          <h2>Payments History</h2>
          <div className='items1'>
            <div id='item1'>
                <h3>DATE</h3><h3>DATE</h3><h3>DATE</h3>
            </div>
          </div>
          {/* <p>Choose a username for your page.</p>
          <div class="custom-input-box">
            <span class="prefix">buymeacoffee.com/</span>
            <input type="text" placeholder="username" />
            </div>
          <button onClick={handleSignupClick} className="bmc-signup-btn">Sign up</button> */}
          
        </div>
      </div>
      <div className='bmc-last'><img id="pfp" src="/images/pfp.png" alt="Icon" width="40" height="40" /></div>
    </div>
  );
};

export default Dashboard;
