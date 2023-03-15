import React from 'react'
import profilepic from 'public/images/profilepic.png'
import Image from 'next/image'
import styles from './Profile.module.scss'
import VisaCV from '../visacv/VisaCV'

export default function Profile() {
  return (
      <>
      <div className={styles.main}>
        <div className={styles.image}>
            <Image className={styles.profilePic} src={profilepic} alt="profile picture" height={314} width={314} />
        </div>
        <div>
            <div className={styles.name}>
               <p><span>Christian</span>, 32 år
               <br/>
               Beslutsfattare </p>
            </div>
            <hr/>
            <p>Jag är en erfaren och kommunikativ problemlösare med fem års erfarenhet av tidigare 
              ledartjänster inom den offentliga sektorn samt det ideella föreningslivet. 
              Jag har samtidigt alltid haft ett brett intresse av IT och har ägnat min 
              fritid åt att utvidga det intresset. Jag trivs med att samarbeta med andra 
              liksom att driva arbetsuppgifter på egen hand för att kunna prestera högt och 
              visa goda resultat. På min senaste arbetsplats samt i det ideella arbetet har jag 
              arbetat med projektledning, resultatorientering och beslutsfattande i myndighetsärenden.</p>
        </div>
        <div>
            {/* <VisaCV /> */}
        </div>
      </div>
    </>
  )
}
