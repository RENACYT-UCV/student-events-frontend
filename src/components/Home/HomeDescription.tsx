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

        <div className="home-header">
          <div className="home-content">
            <img
              src="/assets/images/unieventos_logo_main.png"
              alt=""
              className="select-none left-0 object-cover z-0
                        h-32 sm:h-40 md:h-48 lg:h-55
                        w-auto"
            />

              <div className="home-text ">
                <h1>
                  Bienvenido, <span id="user-name">{userData?.username}</span> !
                </h1>
              </div>

              <h1 className="home-subtext">Qué es lo que haremos hoy?</h1>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HomeDescription
