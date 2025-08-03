import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Volta para a entrada anterior no histórico do navegador
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
        <button
          onClick={handleGoBack}
          className="w-16 h-16 flex items-center justify-center p-0 m-0 bg-transparent border-none cursor-pointer"
          aria-label="Voltar"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

      <div className="flex-grow relative overflow-hidden">
        
        <img
          src="/imagens/raio_elektro.png"
          alt="Raio Elektro"
          className="absolute"
          style={{
            width: '329.95px',
            height: '329.95px',
            top: `calc(95.05px - 60px)`, 
            left: '30.03px',
            opacity: 1,
          }}
        />

        <div
          className="absolute text-black font-bold text-xl text-center"
          style={{
            top: `calc(450px - 60px)`,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%', 
          }}
        >
          404 - página não encontrada
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;