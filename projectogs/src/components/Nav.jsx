import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cadastrar">Cadastrar</Link></li>
        <li><Link to="/solucao">Solução</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
