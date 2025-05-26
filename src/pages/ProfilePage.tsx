import React from 'react'
// import Header from '@components/common/Header/Header'
import ProfileHeader from '@components/profile/ProfileHeader'
import ProfileForm from '@components/profile/ProfileForm'

const ProfilePage: React.FC = () => {
  return (
    <div className="main-page">
      <ProfileHeader />
      <ProfileForm />
    </div>
  )
}

export default ProfilePage
