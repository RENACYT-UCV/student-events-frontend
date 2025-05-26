import React from 'react'
import './HomeDescription.css'
import { useUserId } from '@/store/auth.store'
import { useUserAndDetail } from '@/hooks/user/use-user-and-detail'

const HomeDescription: React.FC = () => {
  const userId = useUserId()
  const { userData } = useUserAndDetail(userId)

  return (
    <div className="home-body-container">
      <div className="home-header-wrapper">
        <img
          src="/assets/images/userFrame.svg"
          alt="Fondo perfil"
          className="background-home-image"
        />

        <div className="home-header">
          <div className="home-content">
            <div className="home-text">
              <h1>
                Hola, <span id="user-name">{userData?.username}</span>
              </h1>
            </div>

            <h1 className="home-subtext">Qué haremos hoy?</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDescription
