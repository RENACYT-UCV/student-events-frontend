import React, { useState } from 'react';
import './HeaderBar.css';
import { Link, useLocation } from 'react-router-dom';
import DrawerSidebar from './DrawerSidebar';

interface HeaderBarProps {
  title: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const getBackgroundColor = () => {
    if (location.pathname.startsWith('/notifications')) {
      return '#005CFF';
    }
    return '#DD2324'; 
  };

  return (
    <div className="header-bar" style={{ background: getBackgroundColor() }}>
      <DrawerSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Hacemos clickeable este div */}
      <div className="left-section" onClick={() => setMenuOpen(true)} style={{ cursor: 'pointer' }}>
        <img src="/assets/images/menuIcon_darkMode.svg" alt="Menú" width={30} className='menuIcon' />
      </div>

      <div className="center-section">
        <span className="header-title">{title}</span>
      </div>

      <div className="right-section">
        <Link to="/notifications">
          <img src="/assets/images/notificationIcon_darkMode.svg" alt="Notificaciones" width={30} className='notificationIcon' />
        </Link>
        <Link to="/profile">
          <img src="/assets/images/profileUserIcon.svg" alt="Perfil" width={30} className='profileIcon' />
        </Link>
      </div>
    </div>
  );
};

export default HeaderBar;
