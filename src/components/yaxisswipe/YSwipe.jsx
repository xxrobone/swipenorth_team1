import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

// styles
import styles from './YaxisSwipe.module.css'



const YSwipe = ({data, options}) => {
  const [emblaRef] = useEmblaCarousel(options)

  return (
      <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
              <div className={styles.embla__container}>
          {data.map(({title, desc, id, img}, idx) => (
              <div className={styles.embla__slide} key={idx}>
                  <div className={styles.embla__slide__number}>
                <span>{idx + 1}</span>
              </div>
              <Image
                      className={styles.embla__slide__img}
                src={img}
                alt={title}
                  />
                  <div className={styles.info}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default YSwipe
