import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Instagram, Users, BarChart2, ShoppingBag, Sparkles } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';

interface Question {
  id: string;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 'platform',
    question: 'Qual plataforma você mais utiliza?',
    options: ['Instagram', 'TikTok', 'Ambos']
  },
  {
    id: 'followers',
    question: 'Quantos seguidores você tem?',
    options: ['Menos de 1k', '1k - 10k', '10k - 50k', 'Mais de 50k']
  },
  {
    id: 'goal',
    question: 'Qual seu principal objetivo?',
    options: ['Crescer seguidores', 'Aumentar engajamento', 'Vender produtos/serviços', 'Criar conteúdo melhor']
  }
];

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Save answers and redirect to dashboard
      console.log('Final answers:', { ...answers, [questions[currentQuestion].id]: answer });
      navigate('/');
    }
  };

  const getIcon = (option: string) => {
    switch (option) {
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'TikTok':
        return <TikTokIcon />;
      case 'Crescer seguidores':
        return <Users className="w-5 h-5" />;
      case 'Aumentar engajamento':
        return <BarChart2 className="w-5 h-5" />;
      case 'Vender produtos/serviços':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Criar conteúdo melhor':
        return <Sparkles className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-1 rounded-full ${
                  index === currentQuestion
                    ? 'bg-blue-600'
                    : index < currentQuestion
                    ? 'bg-green-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {currentQuestion + 1} de {questions.length}
          </span>
        </div>

        <h2 className="text-2xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                {getIcon(option)}
                <span className="font-medium">{option}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
            </button>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}