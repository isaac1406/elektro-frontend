import React from 'react';
import { User } from 'lucide-react'; 

interface SidebarProps {
  isOpen: boolean; // Controla a visibilidade da sidebar
  onClose: () => void; // Função para fechar a sidebar
  onLogout: () => void; 
}

export default function Sidebar({ isOpen, onClose, onLogout }: SidebarProps) {
  const sidebarWidth = 'w-[220px]'; 

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${sidebarWidth} ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        <div
          className="relative w-full"
          style={{
            height: '84px',
            backgroundColor: 'rgba(43,43,43,1)',
          }}
        >

          <User
            className="absolute text-white"
            style={{
              width: '32px',
              height: '32px',
              top: '26px',
              left: '18px',
              opacity: 1,
            }}
          />

          <span
            className="absolute text-white"
            style={{
              top: '30px',
              left: '78px',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '100%',
            }}
          >
            Usuário
          </span>
        </div>

        <nav className="p-0 m-0 overflow-y-auto">
          <ul className="list-none p-0 m-0">
            <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <a href="#" className="block text-gray-700 no-underline">Editar dados</a>
            </li>
            <div
              className="m-1.5 h-0 w-50 border-b border-gray-400 opacity-100"
            ></div>
            <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <a href="#" className="block text-gray-700 no-underline">Meus pedidos</a>
            </li>
            <div
              className="m-1.5 h-0 w-50 border-b border-gray-400 opacity-100"
            ></div>
            <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <a href="#" className="block text-gray-700 no-underline">Meus produtos</a>
            </li>
            <div
              className="m-1.5 h-0 w-50 border-b border-gray-400 opacity-100"
            ></div>
            <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <a href="#" className="block text-gray-700 no-underline">Meu carrinho</a>
            </li>
          </ul>
        </nav>

        <button 
        onClick={onLogout} 
        className="px-4 py-3 text-left border-t border-gray-200 text-gray-600 text-sm cursor-pointer mt-70">
          Sair
        </button>
      </div>
    </>
  );
}