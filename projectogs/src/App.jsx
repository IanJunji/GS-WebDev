import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer' 

import Home from './routes/Home';
import Login from './routes/Login';
import Sobre from './routes/Sobre';
import Cadastrar from './routes/Cadastrar';
import Solucao from './routes/Solucao';
import Error from './routes/Error'; 


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Nav />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        {/* Use o nome correto do componente */}
        <Footer />
      </div>
    </Router>
  )
}

export default App