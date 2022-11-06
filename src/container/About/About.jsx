import { React, useEffect, useState } from 'react';
import { motion } from "framer-motion";

import './About.scss';
import { images } from '../../constants';


const About = () => {


  return (
    <div id='about'>
      <h2 className='head-text'>
        I am A <span>web developer </span>
        & <span>data scientist</span>
        <br />
        <p>Good at <span>development</span> enthusiast to learn new things</p>
      </h2>

      <div className="resume">
        <button type="button" onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://drive.google.com/drive/folders/1w8kxTIJomef-O8OZxIube2w6YXliZPRy?usp=share_link';

        }} >Resume</button>
      </div>


      <div className='app__profiles'>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"


        >

          <img src={images.about01} alt={"Sai"} />

          <h2 className='bold-text' style={{ marginTop: 20 }}>{"Web Developer"}</h2>
          <p className='p-text' style={{ marginTop: 10 }}>{"I am a Web Developer with a passion for building beautiful and functional web applications."}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"


        >

          <img src={images.about04} alt={"Sai"} />

          <h2 className='bold-text' style={{ marginTop: 20 }}>{"Data Scientist"}</h2>
          <p className='p-text' style={{ marginTop: 10 }}>{"Experienced in Machine Learning and knowledgeable about Data Analysis and Visualization"}</p>
        </motion.div>

      </div>

    </div>
  )
}

export default About