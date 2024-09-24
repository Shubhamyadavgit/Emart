import React from 'react'
import "../Styles/FooterStyles.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>
          At FoodMart, we are committed to providing high-quality and fresh
          groceries at your doorstep. Shop from a wide range of categories, and
          enjoy fast delivery!
        </p>
      </div>
  
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/privacy"}>Privacy Policy</NavLink>
          </li>
        </ul>
      </div>
  
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p><EmailIcon /> Email: support@foodmart.com</p>
        <p><PhoneIcon /> Phone: +1 234 567 8901</p>
        <p><HomeIcon /> Address: 123 Grocery St, Foodville, USA</p>
      </div>
  
      <div className="footer-subscribe">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get updates on the latest products and offers.</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>© 2024 FoodMart. All Rights Reserved.</p>
      <div className="social-icons">
       <NavLink to={"https://github.com/"}><GitHubIcon /></NavLink>
       <NavLink to={"https://www.linkedin.com/"}><LinkedInIcon /></NavLink>
       <NavLink to={"https://www.instagram.com/"}><InstagramIcon /></NavLink>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer