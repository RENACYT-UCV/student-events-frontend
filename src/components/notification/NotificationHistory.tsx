import React from 'react'
import './NotificationHistory.css'

interface Notification {
  id: string;
  title: string;
  subtitle: string; // Este será el mensaje del anuncio
  imageUrl?: string;
  date: string;
  type: string;
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
      <div className="notification-list-container">
        <div className='notification-list'>
          {notifications.length === 0 ? (
            <div className="no-notifications">
              <p>No hay notificaciones disponibles</p>
            </div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="notification-item">
                {n.imageUrl ? (
                  <img src={n.imageUrl} alt="preview" />
                ) : (
                  <div className="notification-icon">📢</div>
                )}
                <div className="notification-content">
                  <strong>{n.title}</strong>
                  <p>{n.subtitle}</p>
                  <div className="notification-meta">
                    <span className="notification-date">{n.date}</span>
                    <span className="notification-type">{n.type}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default NotificationHistory;