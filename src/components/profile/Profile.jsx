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
        <p>Karl är en erfaren och kommunikativ problemlösare med fem års erfarenhet av tidigare 
           ledartjänster inom den offentliga sektorn samt det ideella föreningslivet. Han har 
           samtidigt alltid haft ett brett intresse av IT och har ägnat sin fritid åt att utvidga 
           det intresset. Karl trivs med att samarbeta med andra liksom att driva arbetsuppgifter 
           på egen hand för att kunna prestera högt och visa goda resultat. På sin senaste arbetsplats 
           samt i det ideella arbetet har Karl arbetat med projektledning, 
           resultatorientering och beslutsfattande i myndighetsärenden.</p>
    </div>
    </>
  )
}
