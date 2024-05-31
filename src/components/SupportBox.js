import React from 'react';
import './SupportBox.css';
import PayBox from './PayBox';
import InfoBox from "./InfoBox"

const SupportBox = ({Heading, SubHeading, PayComponent, InfoComponent}) => {
  return (
    <div className="support-box">
      <h2 className="support-title">{Heading}</h2>
      <p className="support-description">{SubHeading}</p>
      <div className="support-content">
      {InfoComponent}
        {PayComponent}
  
        
        {/* <div className="support-main">
          <h3>Buy Juliet a coffee</h3>
          <div className="support-actions">
            <span className="coffee-icon">☕</span>
            <span className="coffee-count">1</span>
            <span className="coffee-count">3</span>
            <span className="coffee-count">5</span>
            <span className="coffee-count">1</span>
          </div>
          <input type="text" placeholder="Say something nice..." className="support-input" />
          <button className="support-button">Support $3</button>
        </div> */}
        {/* <div className='support-box' id='payyee'>
        </div> */}
      </div>
    </div>
  );
}

export default SupportBox;
