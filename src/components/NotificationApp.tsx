import React, { useState } from 'react';
import NotificationsPage from '../pages/NotificationsPage';
import SurveyPage from '../pages/SurveyPage';
import SuccessPage from '../pages/SuccessPage';
import { NotificationData, AppState, SurveyAnswers } from '../types';

const NotificationApp: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>('notifications');
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswers>({
    question1: '',
    question2: ''
  });

  const [notifications, setNotifications] = useState<NotificationData[]>([
    {
      id: '1',
      title: "Prueba de Registro",
      subtitle: "Encuesta de Evaluación",
      timestamp: new Date(),
      read: false
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleAnswerChange = (question: 'question1' | 'question2', value: 'si' | 'no') => {
    setSurveyAnswers(prev => ({
      ...prev,
      [question]: value
    }));
  };

  const handleSubmit = () => {
    setCurrentState('success');
    console.log('Respuestas:', surveyAnswers);
  };

  const handleNotificationClick = (id: string) => {
    setCurrentState('survey');
  };

  const handleBackToNotifications = () => {
    setCurrentState('notifications');
  };

  const handleGoHome = () => {
    setCurrentState('notifications');
    setSurveyAnswers({ question1: '', question2: '' });
  };

  const renderCurrentPage = () => {
    switch(currentState) {
      case 'notifications':
        return (
          <NotificationsPage
            notifications={notifications}
            onNotificationClick={handleNotificationClick}
            onMarkAsRead={markAsRead}
          />
        );
      case 'survey':
        return (
          <SurveyPage
            surveyAnswers={surveyAnswers}
            onAnswerChange={handleAnswerChange}
            onSubmit={handleSubmit}
            onBack={handleBackToNotifications}
          />
        );
      case 'success':
        return <SuccessPage onGoHome={handleGoHome} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
        <div className="relative overflow-hidden">
          {renderCurrentPage()}
        </div>
      </div>
    </div>
  );
};

export default NotificationApp;