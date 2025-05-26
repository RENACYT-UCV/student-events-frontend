import React, { useState, useEffect } from 'react'
import NotificationHistory from '@components/notification/NotificationHistory'

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:3000/announcements')
        if (!response.ok) {
          throw new Error('Error al obtener las notificaciones')
        }
        const data = await response.json()
        
        // Transformar los datos al formato que espera el componente
        const formattedNotifications = data.map(announcement => ({
          id: announcement.id.toString(),
          title: announcement.title,
          subtitle: announcement.message,
          imageUrl: announcement.eventDetail?.image || 'ruta/a/imagen/por/defecto.jpg'
        }))
        
        setNotifications(formattedNotifications)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNotifications()
  }, [])

  if (isLoading) {
    return <div>Cargando notificaciones...</div>
  }

  return (
    <div>
      <NotificationHistory notifications={notifications} />
    </div>
  )
}

export default NotificationPage
