import Image from 'next/image'
import styles from '../header/Header.module.css'
import logoVit from '../../../public/images/skelleftea_logo_vit.png'
import iconVector from '../../../public/images/Vector.png'
import iconEllipse from '../../../public/images/ellipse.png'


export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.row}>
        <span className={styles.headerLogo}>
          <Image src={logoVit} alt="logo" width={107} />
        </span>
      </div>

      <div className={styles.row}>
        <span className={styles.headerIcon1}>
          <Image src={iconVector} alt="logo" width={27} />
        </span>
      </div>

      <div className={styles.row}>
        <span className={styles.headerIcon2}>
          <Image src={iconEllipse} alt="logo" width={25} />
        </span>
      </div>
      
    </div>
  )
}