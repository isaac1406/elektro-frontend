import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 

  const handleLoginClick = () => {
    onLogin(); // altera o estado isLoggedIn para true no App.tsx
    navigate('/'); // Redireciona o usuário para a rota da Homepage
  };

  const handleGoBack = () => {
    navigate(-1); // Volta para a entrada anterior no histórico do navegador
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div
        className="w-full h-[60px] bg-white flex justify-between items-center 
                   px-8 py-2.5 border-b border-gray-500"
      >
        <button
          onClick={handleGoBack}
          className="w-6 h-6 flex items-center justify-center p-0 m-0 bg-transparent border-none cursor-pointer"
          aria-label="Voltar"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        <span
          className="font-medium text-2xl leading-none text-black text-center"
        >
          Entrar
        </span>

        <div className="w-6 h-6"></div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-start py-8 px-4">

        <div className="logo-section text-center mb-6">
          <img 
            src="/imagens/raio_elektro.png" 
            alt="Raio Elektro Logo" 
            className="mx-auto" 
            style={{ width: '200px', height: '200px', objectFit: 'contain' }} 
          />
        </div>

        <div className="bg-white p-8 rounded-lg max-w-sm w-full">
          <form className="space-y-4 mb-4">

            <div className="input-group relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="email" 
                placeholder="Digite seu e-mail" 
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black" 
              />
            </div>

            <div className="input-group relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type={showPassword ? "text" : "password"} // Alterna tipo de input
                placeholder="Digite sua senha"
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Alterna visibilidade da senha
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <div className="text-right text-sm -mt-2 mb-4"> 
              <a href="#" className="text-gray-800 underline">Esqueci minha senha</a>
            </div>

            <button
              type="button"
              onClick={handleLoginClick}
              className="w-full bg-black text-white p-3 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Entrar
            </button>
          </form>

            <div className="flex items-center my-6 w-full max-w-sm"> 
            <div className="flex-grow border-t border-black"></div> 
            <span className="mx-4 text-gray-800 text-sm">ou</span>
            <div className="flex-grow border-t border-black"></div> 
            </div>

          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-black"></a>

            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-black"></a>
          </div>

          <p className='text-center text-sm'>
            <Link to="/cadastro" className="text-blue-500 underline">Não possui cadastro? Cadastre-se!</Link>
          </p>

        </div>
      </div>
    </div>
  );
}