import React from 'react'
import './NotificationHistory.css'

interface Notification {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface NotificationHistoryProps {
  notifications: Notification[];
}

const NotificationHistory: React.FC<NotificationHistoryProps> = ({ notifications }) => {
  return (
    <div className="notification-container">
        <div className='notification-container-wrapped'>
            <h1 className='title-notification'>Historial de Notificaciones</h1>
            <img src='/assets/images/notificationRedIcon.svg' alt="Fondo perfil" className="notification-image-red" />

        </div>
      <div className="notification-list">
        {notifications.map((n) => (
          <div key={n.id} className="notification-item">
            <img src={n.imageUrl} alt="preview" />
            <div>
              <strong>{n.title}</strong>
              <p>{n.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default NotificationHistory;