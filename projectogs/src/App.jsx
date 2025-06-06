import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Nav />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/sobre" element={<div>Sobre</div>} />
            <Route path="/cadastrar" element={<div>Cadastrar</div>} />
            <Route path="/solucao" element={<div>Solução</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
