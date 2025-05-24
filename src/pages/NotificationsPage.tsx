import React from 'react';
import HeaderBarNoti from '../components/HeaderBarNoti';
import NotificationItem from '../components/NotificationItem';
import { NotificationData } from '../types';

interface NotificationsPageProps {
  notifications: NotificationData[];
  onNotificationClick: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

const NotificationsPage: React.FC<NotificationsPageProps> = ({
  notifications,
  onNotificationClick,
  onMarkAsRead
}) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="bg-white rounded-t-3xl min-h-screen">
      <HeaderBarNoti 
        title="Notificaciones"
        onClose={() => console.log('Cerrar')}
      />

      <div className="p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-black">
            Historial de Notificaciones
          </h2>
          <div className="relative">
            <svg 
              className="w-8 h-8 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 17h5l-5 5-5-5h5V3h5v14z" 
              />
            </svg>
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {unreadCount}
              </div>
            )}
          </div>
        </div>

        <div className="">
          {notifications.map(notification => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onClick={() => {
                onMarkAsRead(notification.id);
                onNotificationClick(notification.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;