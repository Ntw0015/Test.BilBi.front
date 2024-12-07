import React, { useState, useEffect } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchParams] = useSearchParams();
  const [welcomeMessage, setWelcomeMessage] = useState('Bem-vindo de volta');

  useEffect(() => {
    const from = searchParams.get('from');
    if (from === 'trial') {
      setWelcomeMessage('Comece seu período gratuito');
    } else if (from === 'premium') {
      setWelcomeMessage('Acesse o plano premium');
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">{welcomeMessage}</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <AuthInput
            icon={<Mail className="w-5 h-5 text-gray-500" />}
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            icon={<Lock className="w-5 h-5 text-gray-500" />}
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Entrar</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Ainda não tem uma conta?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}