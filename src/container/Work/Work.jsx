import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';



import './Work.scss';

const Work = () => {


  return (
    <div id='work'>
      <h2 className='head-text'>
        <br />
        <p><span>Projects </span>Section</p>
      </h2>

      <div className='app__work-filter'>
        {['All'].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex a-text`}
          >

            {item}

          </div>
        ))}
      </div>

      <motion.div
        // animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* {filterWork.map((work, index) => ( */}
        <div className='app__work-item app__flex'>
          <div className='app__work-img app__flex'>
            <img src={images.qunt} alt={"quantumx"} />


            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', delayChildren: 0.5 }}
              className="app__work-hover app__flex"
            >
              <a href={"https://saisharan34.github.io/QuizGame/"} target="_blank" rel="noreferrer" >
                {/* https://github.com/Haripriya2002145/QuantumX */}
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={"https://github.com/Saisharan34/QuizGame"} target="_blank" rel="noreferrer" >

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>Quiz Game</h4>
            <p className='p-text' style={{ marginTop: 10 }}> A Web Application Where you can play quiz game I made this using API </p>
            <div className='app__work-tag app__flex'>
            </div>
          </div>

        </div>

        <div className='app__work-item app__flex'>
          <div className='app__work-img app__flex'>
            <img src={images.chart} alt={"chartview"} />


            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', delayChildren: 0.5 }}
              className="app__work-hover app__flex"
            >
              <a href={"https://github.com/Saisharan34/Bitcoin-Candle-Stick"} target="_blank" rel="noreferrer" >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={"https://github.com/Saisharan34/Bitcoin-Candle-Stick"} target="_blank" rel="noreferrer" >

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>Bitcoin Candle Stick</h4>
            <p className='p-text' style={{ marginTop: 10 }}>  Bitcoin Candle Stick Using Data Visualization and API Data
            </p>
            <div className='app__work-tag app__flex'>
            </div>
          </div>

        </div>
        {/* ))} */}
      </motion.div>
    </div>
  )
}

export default Work