import React from 'react';
import { SurveyQuestionProps } from '../types';

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerChange,
  questionNumber
}) => {
  return (
    <div className="animate-scale-in" style={{ animationDelay: `${questionNumber * 0.1}s` }}>
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl mb-6 shadow-lg">
        <p className="text-sm font-medium">{question}</p>
      </div>
      
      <div className="flex justify-center space-x-12">
        <label className="radio-option flex items-center cursor-pointer p-3 rounded-lg">
          <span className="text-black mr-3 font-medium">Si</span>
          <div 
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              selectedAnswer === 'si' 
                ? 'border-blue-500 bg-blue-50 transform scale-110' 
                : 'border-gray-300 hover:border-blue-400'
            }`}
            onClick={() => onAnswerChange('si')}
          >
            {selectedAnswer === 'si' && (
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-scale-in"></div>
            )}
          </div>
        </label>
        
        <label className="radio-option flex items-center cursor-pointer p-3 rounded-lg">
          <span className="text-black mr-3 font-medium">No</span>
          <div 
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              selectedAnswer === 'no' 
                ? 'border-red-500 bg-red-50 transform scale-110' 
                : 'border-gray-300 hover:border-red-400'
            }`}
            onClick={() => onAnswerChange('no')}
          >
            {selectedAnswer === 'no' && (
              <div className="w-3 h-3 rounded-full bg-red-500 animate-scale-in"></div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default SurveyQuestion;