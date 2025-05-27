import React from 'react'
import './Header.css'
import { Menu, Bell, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  title?: string
  onMenuClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ title = 'Historial', onMenuClick }) => {
  const navigate = useNavigate()

  const handleNotificationClick = () => {
    navigate('/notifications')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  return (
    <header className="mobile-header pt-16" role="banner">
      <div className="header-left">
        <button type="button" className="menu-button" onClick={onMenuClick} aria-label="Abrir menú">
          <Menu size={26} strokeWidth={2.5} />
        </button>
      </div>
      <h1 className="header-title">{title}</h1>
      <div className="header-right">
        <button
          type="button"
          className="notification-button"
          onClick={handleNotificationClick}
          aria-label="Ver notificaciones"
        >
          <Bell size={26} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          className="profile-button"
          onClick={handleProfileClick}
          aria-label="Ver perfil"
        >
          <User size={26} strokeWidth={2.5} />
        </button>
      </div>
    </header>
  )
}

export default Header
