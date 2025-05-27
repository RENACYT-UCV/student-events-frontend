import React from 'react'
import './NotificationHistory.css'

interface Notification {
  id: string
  title: string
  subtitle: string
  imageUrl: string
}

interface NotificationHistoryProps {
  notifications: Notification[]
}

const NotificationHistory: React.FC<NotificationHistoryProps> = ({ notifications }) => {
  return (
    <div className="notification-container">
      <div className="notification-container-wrapped">
        <h1 className="title-notification">Historial de Notificaciones</h1>
      </div>
      <div className="notification-list-container">
        <div className="notification-list">
          {notifications.length === 0 ? (
            <div className="no-notifications">
              <p>No hay notificaciones disponibles</p>
            </div>
          ) : (
            notifications.map(n => (
              <div key={n.id} className="notification-item">
                
                <div>
                  <strong>{n.title}</strong>
                  <p>{n.subtitle}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default NotificationHistory
