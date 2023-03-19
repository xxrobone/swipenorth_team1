import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { RiBookmarkLine, RiCloseLine, RiArrowRightLine } from 'react-icons/ri'
import {motion} from 'framer-motion'

// styles
import styles from './JobDetails.module.css'

const variants = {
    show: { opacity: 1, x: 0 },
    hide: { opacity: 0, x: 300 },
  }

const JobDetails = ({ title, subtitle, desc, img, id }) => {   
    const [showMsg, setShowMsg] = useState(false)
    const { jobId } = useRouter()
    
    const router = useRouter()

    const saveJob = (id) => {
        let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
        let newjob;
        
          if (id) {
            newJob = {
                id,
                title,
                subtitle,
                desc
            }
          } else {
            return
          }
    
        myjobs.push(newJob)
        
        window.localStorage.setItem('myjobs', JSON.stringify(myjobs))
    }
    
    function handleClick() {
        saveJob(id)
        setShowMsg(showMsg => !showMsg)
        console.log(showMsg)
        setTimeout(() => {
          setShowMsg(false)
        }, 3000)
      }

  return (
      <article className={styles.jobs_wrapper} key={id}>
          <div className={styles.icons_wrapper}>
              <RiBookmarkLine />
              <RiCloseLine onClick={() => router.back()} />
          </div>
          <div className={styles.img}>
            <Image
                src={img}
                alt={title}
                priority
            />                 
          </div>
          <div className={styles.info}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>{desc}</p>
          </div>
          <div>
        <motion.p
        variants={variants}
        animate={showMsg ? "show" : "hide"}
        >
          Saved game to library
        </motion.p>
      </div>
          </article>
  )
}

export default JobDetails