import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./ProfileSide.css"
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className="profileSide">
       <LogoSearch/>
       <ProfileCard/>
       <FollowersCard/>
    </div>
  )
}

export default ProfileSide