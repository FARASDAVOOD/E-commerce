import React from 'react';
import "./Footer.css";
import Footerlogo from "../../assets/home_logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='Footerdiv '>
        <div className='footer-box my-6'>
          <img src={Footerlogo} alt="Logo" />
          <p className='my-6'>
            123 Fifth Ave, <br />
            Kannur, Town Square, <br />
            +91 9400279248 <br />
            farasdavood@gmail.com
          </p>
        </div>
        <div className='footer-box my-6'>
          <h2>Customer Service</h2>
          <a href="#action">Contact Us</a>
          <a href="#action">Help & FAQs</a>
          <a href="#action">Payment</a>
          <a href="#action">Delivery</a>
        </div>
        <div className='footer-box my-6'>
          <h2>Categories</h2>
          <a href="#action">Clothing</a>
          <a href="#action">Fashion</a>
          <a href="#action">Toys</a>
          <a href="#action">Supplies</a>
        </div>
        <div className='footer-box my-6'>
          <h2>Our Company</h2>
          <a href="#action">Corporate</a>
          <a href="#action">Privacy</a>
          <a href="#action">Information</a>
          <a href="#action">Promo & Terms</a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Copyright © 2024 Baby Store | Powered by Baby Store</p>
      </div>
    </div>
  );
};

export default Footer;
