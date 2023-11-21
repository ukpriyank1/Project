import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./assets/logo.png" width="200px" alt="logo" />
            </div>

            <div className="detail">
              <p>
                We are a team of designers and developers that create high
                quality WordPress
              </p>

              <div className="icon">
                <li>
                  <RiFacebookFill />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <BiLogoYoutube />
                </li>
              </div>
            </div>
          </div>

          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>shipping</li>
              <li>return</li>
            </ul>
          </div>

          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Term & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
