import React, { useState, useContext } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image'
import IMG1 from '/public/images/image1.png'
import IMG2 from '/public/images/image2.png'
import IMG3 from '/public/images/image3.png'
import IMG4 from '/public/images/image4.png'
import SwipeUpArrow from '../swipeUpArrow/SwipeUpArrow'

// styles
import styles from './InfiniteSwipe.module.scss'


export const ImageData = [
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

console.log(ImageData[0].img)
  
const colors = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'];

const randomImage = current => {
  while (true) {
    const index = Math.floor(Math.random() * ImageData.length);
    if (current != ImageData[index]) {
      return ImageData[index].img;
    } 
  }
}

const Card = ({ card, style, onDirectionLock, onDragStart, onDragEnd, animate }) => (    
  <motion.div
    className={styles.card}
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{ ...style, backgroundImage: card.backgroundImage }}
    transition={{ ease: [.6, .05, -.01, .9] }}
    whileTap={{ scale: .85 }}
  >
        <p>{card.text}</p>
        <Image
            src={ImageData[0].img}
            alt={ImageData[0].title}
        ></Image>
  </motion.div>
)
const InfiniteSwipe = () => {
  const [cards, setCards] = useState([
    { text: 'Skellefteå taxi', backgroundImage: ImageData[1].img }, 
    { text: 'Northvold', backgroundImage: ImageData[2].img }, 
    { text: 'Skellefteå Lasarett', backgroundImage: ImageData[0].img }
  ]);
  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 }
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [1, .5, 1]);
  const shadowBlur = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, 25, 0]);
  const shadowOpacity = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, .2, 0]);
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;
  const onDirectionLock = axis => setDragStart({ ...dragStart, axis: axis });
  const animateCardSwipe = animation => {
    setDragStart({ ...dragStart, animation });
      
    setTimeout(() => {
      setDragStart({ axis: null, animation: { x: 0, y: 0 } });
      x.set(0);
      y.set(0);
      setCards([{ 
          text: 'Title + desc', 
          backgroundImage: randomImage(cards[0].backgroundImage) 
        }, ...cards.slice(0, cards.length - 1)]);
    }, 200);
  }
  const onDragEnd = info => {
    if (dragStart.axis === 'x') {
      if (info.offset.x >= 100) 
        animateCardSwipe({ x: 175, y: 0 });
      else if (info.offset.x <= -100)
        animateCardSwipe({ x: -175, y: 0 }); 
    } else {
      if (info.offset.y >= 100)
        animateCardSwipe({ x: 0, y: 175 }); 
      else if (info.offset.y <= -100)
        animateCardSwipe({ x: 0, y: -175 }); 
    }
    }
    

  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <Card 
            card={card}
            key={index}
            style={{ x, y, zIndex: index }}
            onDirectionLock={axis => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={dragStart.animation}
          />
        )
      } else return (
        <Card 
          card={card}
          key={index}
          style={{
            scale, 
            boxShadow,
            zIndex: index
          }}
        />
      )
    })
  }
  return (
    <div className={styles.infinite_swipe}>
      {renderCards()}
    </div>
  )
}

export default InfiniteSwipe