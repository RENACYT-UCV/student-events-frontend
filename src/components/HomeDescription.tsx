import React from 'react'
import './HomeDescription.css'

const HomeDescription:React.FC = () => {
  return (
    <div className='home-body-container'>
      <div className="home-header-wrapper">
        <img src='/assets/images/userFrame.svg' alt="Fondo perfil" className="background-home-image" />

        <div className="home-header">
          <div className="home-content">

            <div className="home-text">
              <h1>
                Hola, <span id="user-name">XXXXXXXX</span>
              </h1>
            </div>
            
            <h1 className='home-subtext'>
                Qué haremos hoy?
            </h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDescription