import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import IMG1 from '/public/images/image1.png'
import IMG2 from '/public/images/image2.png'
import IMG3 from '/public/images/image3.png'
import IMG4 from '/public/images/image4.png'

//styles
import '../swipe.scss'
// swipe component
import SwipeUpArrow from '../button/swipeUpArrow/SwipeUpArrow'

export const imageData = [
    {
      title: 'Skellefteå tax',
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

    const [width, setWidth] = useState(0)

    // use ref is like querySelector
    const elRef = useRef()

    /* check full width, with element offsetwidth and subract the number and that is the width to add on dragContraints in framermotion */
    /* let sWidth = elRef.current.scrollWidth
    let offset = elRef.current.offsetWidth
    let dragWidth = sWidth - offset */

    useEffect(() => {
        console.log(elRef.current.scrollWidth, )
      setWidth(elRef.current.scrollWidth - elRef.current.offsetWidth)
    }, [width])

  return (
      <motion.div className='swipe_wrapper' ref={(elRef)}>
          <motion.div className="swipe_inner"
              drag='x'
              dragConstraints={{right: 0, left: - width}}>
              {imageData.map(({ name, details, id, img }, i) => (
                  <motion.div className='item' key={id} >
                      <div className="item_name">{name}</div>
                      <div className="item_details">{details}</div>
                      <Image className='image_frame'
                        src={img} alt={name}
                  ></Image>                 
      </motion.div>
                  
              ))}
              
          </motion.div>
          <SwipeUpArrow />
    </motion.div>
  )
}

export default Swipe