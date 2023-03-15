import React from 'react'
import profilepic from 'public/images/profilepic.png'
import Image from 'next/image'

export default function Profile() {
  return (
      <>
    <div>
        <Image src={profilepic} alt="profile picture" height={314} width={314}/>
    </div>
    <div>
        <div>
            <p>Elise, 27 år Taxichaufför </p>
        </div>
        <hr/>
        <p>Jag är en serviceinriktad person som trivs med att möta och samarbeta med nya människor. 
            Jag sätter en stor heder i punktlighet och är stolt över att vara en duktig förare.</p>
    </div>
    </>
  )
}
