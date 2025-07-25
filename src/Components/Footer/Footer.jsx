import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footerlogo">
        <img src={footer_logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt=""/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>© 2025 Shopper. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer