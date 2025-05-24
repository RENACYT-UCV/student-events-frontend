import React from 'react';
import { HeaderBarProps } from '../types';

const HeaderBarNoti: React.FC<HeaderBarProps> = ({ 
  title, 
  onClose, 
  showCloseButton = true 
}) => {
  return (
    <div className="bg-blue-700 text-white p-4 rounded-t-3xl flex items-center justify-between">
      <h1 className="text-lg font-semibold flex-grow text-center">{title}</h1>
      {showCloseButton && (
        <button 
          className="text-white text-3xl hover:scale-110 transition-transform duration-200"
          onClick={onClose}
        >
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
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HeaderBarNoti;