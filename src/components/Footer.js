import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; Buy Me a Coffee</p>
      </div>
      <div className="footer-center">
        <a href="#about">About</a>
        <a href="#help-center">Help Center</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
      </div>
      <div className="footer-right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitterlogo.png" alt="Twitter" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ytlogo.png" alt="YouTube" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/instalogo.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
