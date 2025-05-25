import { Outlet, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './common/Header/Header'
import DrawerSidebar from './common/sidebar/DrawerSidebar'

export default function MainLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [headerTitle, setHeaderTitle] = useState('UniEventos') // Default title
  const location = useLocation()

  useEffect(() => {
    // Determine title based on current path
    switch (location.pathname) {
      case '/':
        setHeaderTitle('Inicio')
        break
      case '/notifications':
        setHeaderTitle('Notificaciones')
        break
      case '/historial':
        setHeaderTitle('Historial')
        break
      case '/profile':
        setHeaderTitle('Mi Perfil')
        break
      // Add cases for other routes as needed
      default:
        setHeaderTitle('UniEventos') // Fallback title
    }
  }, [location.pathname])

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const showHeader = location.pathname !== '/login' // Check if current path is not /login

  return (
    <div className="profile-page">
      {showHeader && <Header onMenuClick={toggleDrawer} title={headerTitle} />}
      <DrawerSidebar open={isDrawerOpen} onClose={toggleDrawer} />
      <Outlet />
    </div>
  )
}
