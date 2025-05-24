import React from 'react';
import HeaderBarNoti from '../components/HeaderBarNoti';
import SurveyQuestion from '../components/SurveyQuestion';
import { SurveyAnswers } from '../types';

interface SurveyPageProps {
  surveyAnswers: SurveyAnswers;
  onAnswerChange: (question: 'question1' | 'question2', value: 'si' | 'no') => void;
  onSubmit: () => void;
  onBack: () => void;
}

const SurveyPage: React.FC<SurveyPageProps> = ({
  surveyAnswers,
  onAnswerChange,
  onSubmit,
  onBack
}) => {
  const canSubmit = surveyAnswers.question1 && surveyAnswers.question2;

  return (
    <div className="bg-white rounded-t-3xl min-h-screen animate-slide-up">
      <HeaderBarNoti 
        title="Notificaciones"
        onClose={onBack}
      />

      <div className="p-6 space-y-8">
        <h2 className="text-xl font-semibold text-center text-black animate-fade-in">
          Prueba de Registro
        </h2>

        <SurveyQuestion
          question="¿Estarías interesado en asistir a futuros eventos similares?"
          selectedAnswer={surveyAnswers.question1}
          onAnswerChange={(answer) => onAnswerChange('question1', answer)}
          questionNumber={1}
        />

        <SurveyQuestion
          question="¿Estarías interesado en asistir a futuros eventos similares?"
          selectedAnswer={surveyAnswers.question2}
          onAnswerChange={(answer) => onAnswerChange('question2', answer)}
          questionNumber={2}
        />

        <div className="flex justify-center pt-4">
          <button
            onClick={onSubmit}
            disabled={!canSubmit}
            className={`btn-primary px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 ${
              canSubmit
                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;