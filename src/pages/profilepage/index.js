import React from 'react'
import Profile from '@/components/profile/Profile'
import ProfileLayout from '@/components/layout/ProfileLayout'


export default function profilepage() {
  
  return (
      <>
        <div>
            <Profile />
        </div>
    </>
  )
}
profilepage.Layout =  ProfileLayout;