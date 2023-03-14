import React from 'react'
import { motion } from 'framer-motion'

// styles
import styles from './SwipeUpRight.module.scss'

const SwipeUpArrow = () => {
  return (
      <div>
          <motion.div className={styles.arrow_icon}
                  
                  animate={{x: [0, 0, 0, 0, -10, 0, -10, 0], scale: [1, 1.1, 1, 1.05, 1, 1], textShadow: ["5px 5px 2px #ffa500", "1px -1px 2px #ffa6000", "1px -1px 2px #ffa500", "1px -1px 2px #ffa6001d", "0px 0px 0px transparent", "0px 0px 0px transparent"]}}
                  transition={{ repeat: Infinity, repeatDelay: 4 }}
                  >
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="black"/>
<path d="M17 36.0435L30.0435 23L43.087 36.0435" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  </motion.div>
    </div>
  )
}

export default SwipeUpArrow