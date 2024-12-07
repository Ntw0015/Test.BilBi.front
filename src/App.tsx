import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Chat from './components/Chat';
import Notes from './components/Notes';
import Analytics from './components/Analytics';
import Header from './components/Header';
import PricingBoxes from './components/PricingBoxes';
import Login from './pages/Login';
import Register from './pages/Register';
import Questionnaire from './pages/Questionnaire';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/" element={
            <div className="min-h-screen bg-gray-100 p-6">
              <Header />

              <div className="max-w-6xl mx-auto mb-12 flex flex-col items-center text-center">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#437FD9] to-[#31572D] text-[50px] font-semibold mb-3">
                  BilBi IA
                </h2>
                <p className="text-3xl text-gray-700">
                  Desbloqueie seu potencial nas redes sociais com o poder da IA
                </p>
              </div>

              <main className="max-w-6xl mx-auto space-y-6">
                <Chat />
                <Notes />
                <Analytics />
                <PricingBoxes />
              </main>
            </div>
          } />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}