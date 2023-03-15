import Image from 'next/image'
import styles from '../landing/Landing.module.css'
import backgroundImage from '../../../public/images/backgroundImage.jpg'

export default function Footer() {
  return (
    <div className={styles.imageContainer}>
      <Image src={backgroundImage} alt="project" />
    </div>
  )
}