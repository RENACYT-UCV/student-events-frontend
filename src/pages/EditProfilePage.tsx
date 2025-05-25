import React from 'react'
import Header from '@components/common/Header/Header'
import ProfileHeader from '@components/profile/ProfileHeader'
import ProfileForm from '@components/profile/ProfileForm'

const EditProfilePage: React.FC = () => {
  return (
    <div className="main-page">
      <Header title="Editar Perfil" />
      <ProfileHeader />
      <ProfileForm />
    </div>
  )
}

export default EditProfilePage
