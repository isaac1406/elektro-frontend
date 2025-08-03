import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react'; 

export default function RegisterPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Função para voltar para a página anterior
  const handleGoBack = () => {
    navigate(-1); // Volta para a entrada anterior no histórico do navegador
  };

  // Função para lidar com o cadastro
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault(); 

    // Validação básica
    if (!nome || !cpf || !telefone || !email || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    // fazer o cadastro
    alert('Cadastro realizado com sucesso! Você será redirecionado para a página de Login.');
    
    // Redireciona para a página de login
    navigate('/login');
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
          Cadastre-se
        </span>

        <div className="w-6 h-6"></div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-start py-8 px-4">
        
        <div className="flex justify-center gap-20 mb-6">
          <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-black"></a>

          <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-black"></a>
        </div>

        <div className="flex items-center my-6 w-full max-w-sm">
          <div className="flex-grow border-t border-black"></div>
          <span className="mx-4 text-gray-800 text-sm">ou</span>
          <div className="flex-grow border-t border-black"></div> 
        </div>

        <div className="bg-white p-8 rounded-lg max-w-sm w-full">
          <form className="space-y-4 mb-4" onSubmit={handleRegister}>
        
            <div> 
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input 
                type="text" 
                id="nome" 
                placeholder="Digite seu nome completo"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black" 
              />
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                CPF
              </label>
              <input 
                type="text" 
                id="cpf"
                placeholder="Digite seu CPF" 
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                maxLength={11} 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black" 
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input 
                type="tel" 
                id="telefone"
                placeholder="Digite seu telefone" 
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                maxLength={11} 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="Digite seu e-mail" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black" 
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password" 
                id="senha"
                placeholder="Digite sua senha" 
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              />

            </div>

            <div>
              <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700 mb-1">
                Confirme sua senha
              </label>
              <input
                type="password" 
                id="confirmarSenha"
                placeholder="Confirme sua senha" 
                required
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              />

            </div>

            <button
              type="submit" 
              className="w-full bg-black text-white p-3 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Cadastrar-se!
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}