import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';


import './Skills.scss';
import images from '../../constants/images';

const Skills = () => {


  return (
    <div id='skills'>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">

        <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.C} alt={"cpp"} />
              </div>
              <p className="p-text">C</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.cpp} alt={"cpp"} />
              </div>
              <p className="p-text">CPP</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.python} alt={"cpp"} />
              </div>
              <p className="p-text">Python</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.javascript} alt={"cpp"} />
              </div>
              <p className="p-text">JavaScript</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.html} alt={"cpp"} />
              </div>
              <p className="p-text">HTML</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.css} alt={"cpp"} />
              </div>
              <p className="p-text">CSS</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.git} alt={"cpp"} />
              </div>
              <p className="p-text">Git</p>
            </motion.div>
        </motion.div>
        <div className="app__skills-exp">

          <motion.div
            className="app__skills-exp-item"
            key="{experience.year}"
          >


            <div className="app__skills-exp-year">
              <p className="bold-text">2021 - 2022  </p>
            </div>
            <motion.div className="app__skills-exp-works">

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip

              >
                <h4 className="bold-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TechWiz SRM</h4>
                <p className="p-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technical Team Member</p>
              </motion.div>
              <ReactTooltip
                id="work.name"
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                Helped Club to Create Different Posters
              </ReactTooltip>





            </motion.div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Skills