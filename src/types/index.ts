// Tipos para las notificaciones
export interface NotificationData {
    id: string;
    title: string;
    subtitle: string;
    image?: string;
    timestamp: Date;
    read: boolean;
  }
  
  // Estados de la aplicación
  export type AppState = 'notifications' | 'survey' | 'success';
  
  // Tipos para las respuestas de la encuesta
  export interface SurveyAnswers {
    question1: 'si' | 'no' | '';
    question2: 'si' | 'no' | '';
  }
  
  // Props para los componentes
  export interface SurveyQuestionProps {
    question: string;
    selectedAnswer: 'si' | 'no' | '';
    onAnswerChange: (answer: 'si' | 'no') => void;
    questionNumber: number;
  }
  
  export interface NotificationItemProps {
    notification: NotificationData;
    onClick: () => void;
  }
  
  export interface HeaderBarProps {
    title: string;
    onClose?: () => void;
    showCloseButton?: boolean;
  }