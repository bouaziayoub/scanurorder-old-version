import React from "react";
import "./SocialFollow.css";
// I used this link to create a footer https://www.digitalocean.com/community/tutorials/creating-a-social-follow-component-in-react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.whatsapp.com/scanurorder" className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.facebook.com/scanurorder/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/scanurorder" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/scanurorder" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
