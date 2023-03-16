import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import styles from './HittaFlerJobb.module.scss'
import arrowUp from '../../../public/images/arrow-up-white.svg'
import SwipeUpArrow from '../swipeUpArrow/SwipeUpArrow'

export default function HittaFlerJobb() {
  return (
    <div className={styles.footer2}>
      <SwipeUpArrow />
      <div className={styles.hitta}>
        <h2>Hitta fler jobb</h2>
      </div>
    </div>
  )
}
