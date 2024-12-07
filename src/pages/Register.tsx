import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import GoogleButton from '../components/auth/GoogleButton';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement registration logic here
    navigate('/questionnaire');
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${response.access_token}` },
        }).then(res => res.json());

        // Handle successful Google sign-in
        console.log('Google user info:', userInfo);
        // Navigate to questionnaire after successful Google sign-in
        navigate('/questionnaire');
      } catch (error) {
        console.error('Error fetching Google user info:', error);
      }
    },
    onError: () => {
      console.error('Google Sign-In Failed');
    },
  });

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Criar conta</h2>
        
        <GoogleButton onClick={() => googleLogin()} className="mb-6" />
        
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">ou continue com email</span>
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <AuthInput
            icon={<User className="w-5 h-5 text-gray-500" />}
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <AuthInput
            icon={<Lock className="w-5 h-5 text-gray-500" />}
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Criar conta</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Fazer login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}