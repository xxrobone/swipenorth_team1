import Image from 'next/image'
import styles from '../landing/Landing.module.css'
import SwipeUpArrow from '../swipeUpArrow/SwipeUpArrow'
import backgroundImage from '../../../public/images/backgroundImage.jpg'
import logo from '../../../public/images/skelleftea_logo_vit.png'
import Link from 'next/link'


export default function Landing({hasVisited, setHasVisited}) {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={107} />
      </div>
      <div className={styles.overlay}></div>
      <Image 
        className={styles.image} 
        src={backgroundImage} 
        alt="background" 
      />
      <div className={styles.content}>
        <h1>Välkommen hem!</h1>
        <Link href='/' onClick={() => setHasVisited(true)}>
        <SwipeUpArrow />
        </Link>
      </div>
    </div>
  )
}