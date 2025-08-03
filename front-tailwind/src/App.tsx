import React, { useState } from 'react';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage'; 
import AppRoutes from './routes/AppRoutes'; 

export default function App() {
  // controlar a visibilidade da Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // controlar se o usuário está logado
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // alternar a visibilidade da sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // fechar a sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // fazer o login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // fazer o logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSidebarOpen(false);
  };

  return (
    // Se o usuário estiver logado
    <Router>
      {isLoggedIn ? (
        <div className="w-screen min-h-screen flex flex-col">
          
          <Header onMenuClick={toggleSidebar} />
          
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={closeSidebar} 
            onLogout={handleLogout} 
          />
          
          <main className="flex-grow overflow-auto">
            <AppRoutes /> 
          </main>

        </div>
      ) : (
        // se o usuário não estiver logado
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          
          <Route path="/cadastro" element={<RegisterPage />} />
          
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </Router>
  );
}