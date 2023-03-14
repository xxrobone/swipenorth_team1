import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import xicon from '../../../public/images/xicon'

export default function Footer() {
  return (
    <div className={styles.footContainer}>
      <div className={styles.icons}>
        <Image src={xicon} alt="project" width={230} />
      </div>
    </div>
  )
}