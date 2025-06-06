import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCurrentUser, logout } from '../services/authService';

function Nav() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Nav montado - Verificando usuário...');
    const currentUser = getCurrentUser();
    console.log('Usuário atual (Nav):', currentUser);
    if (currentUser) {
      setUser(currentUser);
    } else {
      console.log('Nenhum usuário encontrado no localStorage');
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    console.log('Fazendo logout...');
    logout();
    setUser(null);
    navigate('/login');
  };

  console.log('Renderizando Nav. Usuário logado:', user ? 'Sim' : 'Não');

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <ul className="flex space-x-20">
          <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
          <li><Link to="/sobre" className="hover:text-gray-300 transition-colors">Sobre</Link></li>
          <li><Link to="/solucao" className="hover:text-gray-300 transition-colors">Solução</Link></li>
        </ul>
        
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm">Olá, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sair
            </button>
          </div>
        ) : (
          <ul className="flex space-x-6">
            <li><Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link></li>
            <li><Link to="/cadastrar" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors whitespace-nowrap">Cadastrar</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
