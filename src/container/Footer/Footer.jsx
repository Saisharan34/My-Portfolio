import React, { useState } from "react";
import { images } from "../../constants";
// import { client } from '../../client';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
// import { SiLinktree, SiLeetcode } from 'react-icons/si'
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: 'contact',
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div id="contact">
      <h2 className="head-text">Connect To Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:saisharan123vallakavi@gmail.com" className="p-text">
            Click Here to Mail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Linktree" />
          <a
            href="https://linktr.ee/saisharan22"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            Click Here to Connect
          </a>
        </div>
      </div>
      {/* {!isFormSubmitted ? ( */}
      <form
        action="https://getform.io/f/2a1d02e3-75c4-4d00-96f3-6025ad187f0d"
        method="POST"
      >
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"

            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              // value={email}
              // onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              // value={message}
              name="message"
              // onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text">
            Send
          </button>
        </div>
      </form>
      {/* ) : ( */}
      {/* <div>
          <h3 className="head-text">Thank you for connecting to me!</h3>
        </div> */}
      {/* )} */}

      <div className="socialHandle">
        <div className="socials">
          <a href="https://www.linkedin.com/in/saisharan22/" target="_blank" rel="noreferrer">
            <AiFillLinkedin color="#ffff" fontSize="1.5em" />
          </a>
          <a href="https://leetcode.com/saisharan22/" target="_blank" rel="noreferrer">
            <SiLeetcode color="#ffff" fontSize="1.5rem" />
          </a>
          <a
            href="https://github.com/saisharan34"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub color="#ffff" fontSize="1.5em" />
          </a>
          <a href="https://twitter.com/SaiVallakavi" target="_blank" rel="noreferrer">
            <AiFillTwitterSquare color="#ffff" fontSize="1.5em" />
          </a>
          <a
            href="https://www.instagram.com/_saisharan_22"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram color="#ffff" fontSize="1.5em" />
          </a>
        </div>
        <div className="socials">
          <p>@{new Date().getFullYear()} Sai Sharan All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
