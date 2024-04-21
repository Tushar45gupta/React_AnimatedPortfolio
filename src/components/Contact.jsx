import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href="https://www.instagram.com/tushar_gupta4533/" target="_blank" className="items">
          <FaInstagram className="icons" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" className="items">
          <CiFacebook className="icons" />
        </a>
        <a href="linkedin.com/in/tushar-gupta-53a901b8" target="_blank" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="mailto:tushargupta364942@gmail.com" target="_blank" className="items">
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact;