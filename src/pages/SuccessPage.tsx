import React from 'react';

interface SuccessPageProps {
  onGoHome: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onGoHome }) => {
  return (
    <div className="bg-white rounded-t-3xl min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-black mb-8 animate-bounce-soft">
        HECHO :)
      </h1>
      
      <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-full shadow-2xl">
          <svg 
            className="w-16 h-16 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            />
          </svg>
        </div>
      </div>
      
      <p className="text-center text-gray-700 mb-8 max-w-xs leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
        La Encuesta ha sido enviada exitósamente
      </p>
      
      <button
        onClick={onGoHome}
        className="btn-primary bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl animate-scale-in"
        style={{ animationDelay: '0.4s' }}
      >
        Ir a Inicio
      </button>
    </div>
  );
};

export default SuccessPage;