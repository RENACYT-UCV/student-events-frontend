import React, { useEffect, useState } from 'react'
import './HomeDescription.css'

const HomeDescription: React.FC = () => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId')
      if (userId) {
        try {
          const response = await fetch(`http://localhost:3000/api/user/${userId}`)
          const userData = await response.json()
          setUserName(userData.username || userData.email)
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
    }
    fetchUserData()
  }, [])

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
                Hola, <span id="user-name">{userName || 'Usuario'}</span>
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
