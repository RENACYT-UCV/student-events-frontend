import React from 'react'
import HeaderBar from '@components/HeaderBar'
import ProfileHeader from '@components/profile/ProfileHeader'
import ProfileForm from '@components/profile/ProfileForm'

const EditProfilePage: React.FC = () => {
  return (
    <div className="main-page">
      <HeaderBar title="Editar Perfil" />
      <ProfileHeader />
      <ProfileForm />
    </div>
  )
}

export default EditProfilePage
