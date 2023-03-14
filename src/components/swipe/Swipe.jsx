import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import IMG1 from '/public/images/image1.png'
import IMG2 from '/public/images/image2.png'
import IMG3 from '/public/images/image3.png'
import IMG4 from '/public/images/image4.png'
import SwipeUpArrow from '../swipeUpArrow/SwipeUpArrow'

//styles
import styles from './Swipe.module.scss'


export const imageData = [
    {
      title: 'Skellefteå taxi',
      desc: 'Taxichaufför',
      id: 1,
      img: IMG1,
    },
    {
      title: 'Northvold',
      desc: 'Gruppchef',
      id: 2,
      img: IMG2,
    },
    {
      title: 'Skellefteå Lasarett',
      desc: 'Sjuksköterska',
      id: 3,
      img: IMG3,
    },
    {
      title: 'Skellefteå Kommun',
      desc: 'Förskolepedagog',
      id: 4,
      img: IMG4,
    },
  ];

const Swipe = () => {
  const [height, setHeight] = useState(0)

  const elRef = useRef()

  useEffect(() => {
    console.log(elRef.current.scrollHeight, )
  setHeight(elRef.current.scrollHeight - elRef.current.offsetHeight)
  }, [height])

  return (
      <motion.div className={styles.swipe_wrapper} ref={(elRef)}>
          <motion.div className={styles.swipe_inner}
              drag='y'
              dragConstraints={{bottom: 0, top: + height}}>
              {imageData.map(({ title, desc, id, img }, i) => (
                  <motion.div className={styles.item} key={id} >
                  <Image
                    className={img}
                    src={img}
                    alt={title}
                    priority
                  ></Image>   
                  <div className={styles.info}>
                  <h2>{title}</h2>
                  <h4>{desc}</h4>
                  </div>
      </motion.div>
                  
              ))}
              
          </motion.div>
          <SwipeUpArrow />
    </motion.div>
  )
}

export default Swipe