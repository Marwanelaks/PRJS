import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Footer = () => {
  return (
    <footer id='contact' className="footer">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-lg-7">
            <p>All Rights Reserved © 2023</p>
          </div>
          <div className="col-md-6 col-lg-5">
            <ul className="social-icons">
              <li><a href="#"><FontAwesomeIcon  icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
