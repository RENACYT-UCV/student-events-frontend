import React, { useState, useEffect } from 'react'
import NotificationHistory from '@components/notification/NotificationHistory'
import { useAccessToken } from '@/store/auth.store'

// Define the type for the announcement data
interface Announcement {
  id: number
  title: string
  message: string
  eventDetail?: {
    // Assuming eventDetail is optional and has an image property
    image: string
  }
}

const NotificationPage = () => {
  const accessToken = useAccessToken()
  const [notifications, setNotifications] = useState<any[]>([]) // TODO: Define a proper type for notifications
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!accessToken) {
        setIsLoading(false)
        return
      }

      try {
        const response = await fetch(
          'https://student-events-backend-kypp.onrender.com/announcements',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        if (!response.ok) {
          throw new Error('Error al obtener las notificaciones')
        }
        const data: Announcement[] = await response.json() // Cast the response data to the defined type

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
  }, [accessToken]) // Add accessToken to the dependency array

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
