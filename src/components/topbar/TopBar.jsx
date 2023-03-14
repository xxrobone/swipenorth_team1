import React from 'react'
import SwipeUpArrow from '../swipeUpArrow/SwipeUpArrow'

import styles from './TopBar.module.scss'

const TopBar = () => {
  return (
      <div className={styles.topbar}>
          <h3>swipe</h3>
          <SwipeUpArrow />
          <h3>north</h3>
    </div>
  )
}

export default TopBar