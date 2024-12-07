import React from 'react';
import { Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingBoxes() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Clock className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Teste Gratuitamente</h3>
        <p className="text-gray-600 mb-6">Experimente por 7 dias</p>
        <Link 
          to="/login?from=trial"
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Começar teste grátis
        </Link>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 flex flex-col items-center text-center text-white hover:shadow-xl transition-shadow">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Acesso Completo</h3>
        <p className="text-blue-100 mb-6">Todas as funções liberadas</p>
        <div className="text-3xl font-bold mb-6">R$ 29,90</div>
        <Link
          to="/login?from=premium"
          className="w-full py-3 px-6 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium mb-4"
        >
          Comprar agora
        </Link>
        <p className="text-sm text-blue-100">
          Atualização e criação de novas ferramentas mensais
        </p>
      </div>
    </div>
  );
}