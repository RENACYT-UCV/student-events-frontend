import React from 'react';
import { NotificationItemProps } from '../types';

const NotificationItem: React.FC<NotificationItemProps> = ({ 
  notification, 
  onClick 
}) => {
  return (
    <div 
      className="flex items-center p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors mb-2"
      onClick={onClick}
    >
      {/* Contenedor del icono */}
      <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center bg-blue-500 text-white">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
          />
        </svg>
      </div>
      
      {/* Contenido del texto y estado de lectura */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
        <p className="text-sm text-gray-500">{notification.subtitle}</p>
        <p className={`text-xs font-semibold ${notification.read ? 'text-green-600' : 'text-blue-600'}`}>
          {notification.read ? 'Leído' : 'No Leído'}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;