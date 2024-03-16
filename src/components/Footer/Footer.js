// Function component to show the Footer
import SocialFollow from "./SocialFollow";
import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <p className="text-white">A.Bouazi</p>
      <SocialFollow />
    </div>
  );
};

export default Footer;