import React from 'react';
import { motion } from "framer-motion";
import { images } from "../../constants";


import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    tarnsition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex' id='home'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        tarnsition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className='badge-cmp app__flex'>
            <span>
              👋
            </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">
                Hello, I am
              </p>
              <h1 className="head-text">
                Sai Sharan
              </h1>
            </div>
          </div>

          <div className='tag-cmp app-flex'>
            <p className="p-text">
              A Web Developer and Data Scientist
            </p>
            <p className="p-text">
              Want to create Applications that others would Likes to use
            </p>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        tarnsition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="Haripriya" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          tarnsition={{ duration: 1, ease: 'easeInOut' }}

          src={images.circle}
          alt="Circle"
          className="overlay_circle"
        />




      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.cpp, images.python, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="Circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header;