import React from 'react'
import HeaderBar from '@components/HeaderBar'
import ProfileHeader from '@components/profile/ProfileHeader'
import ProfileForm from '@components/profile/ProfileForm'

const ProfilePage: React.FC = () => {
  return (
    <div className="main-page">
      <HeaderBar title="Mi Perfil" />
      <ProfileHeader />
      <ProfileForm />
    </div>
  )
}

export default ProfilePage
