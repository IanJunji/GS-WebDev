import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Coluna 1 - Sobre */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Sobre o Resgate Solidário</h3>
                        <p className="text-gray-400">
                            Plataforma inteligente para gestão de abrigos e doações em situações de emergência.
                        </p>
                    </div>

                    {/* Coluna 2 - Links Rápidos */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="/solucao" className="text-gray-400 hover:text-white transition-colors">
                                    Solução
                                </a>
                            </li>
                            <li>
                                <a href="/login" className="text-gray-400 hover:text-white transition-colors">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="/cadastrar" className="text-gray-400 hover:text-white transition-colors">
                                    Cadastre-se
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3 - Contato */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contato</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">
                                <span className="text-blue-400">📧</span> contato@resgatesolidario.com
                            </li>
                            <li className="text-gray-400">
                                <span className="text-blue-400">📞</span> (XX) XXXX-XXXX
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4 - Redes Sociais */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-400 hover:text-white transition-colors">
                                <span className="text-2xl">facebook</span>
                            </a>
                            <a href="#" className="text-blue-400 hover:text-white transition-colors">
                                <span className="text-2xl">instagram</span>
                            </a>
                            <a href="#" className="text-blue-400 hover:text-white transition-colors">
                                <span className="text-2xl">twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Barra de Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Resgate Solidário. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
