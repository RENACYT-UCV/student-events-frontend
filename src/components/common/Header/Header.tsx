import React from 'react'
import './Header.css'

interface HeaderProps {
  title?: string
  onMenuClick?: () => void
  onNotificationClick?: () => void
  onProfileClick?: () => void
}

const Header: React.FC<HeaderProps> = ({
  title = 'Historial',
  onMenuClick,
  onNotificationClick,
  onProfileClick
}) => {
  return (
    <div className="mobile-header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <h1 className="header-title">{title}</h1>
      <div className="header-right">
        <button className="notification-button" onClick={onNotificationClick}>
          <span className="notification-icon">🔔</span>
        </button>
        <button className="profile-button" onClick={onProfileClick}>
          <div className="profile-circle"></div>
        </button>
      </div>
    </div>
  )
}

export default Header
