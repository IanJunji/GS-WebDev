import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Resgate Solidário
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Transformando o caos pós-desastre em uma rede de apoio organizada e eficaz
                        </p>
                        <div className="text-center mt-8">
                            <a 
                                href="/cadastrar" 
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors"
                            >
                                Venha fazer parte agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    Por que escolher o Resgate Solidário?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-4xl mb-4">📍</div>
                        <h3 className="text-xl font-semibold mb-2">Localização Inteligente</h3>
                        <p className="text-gray-600">
                            Sistema integrado com a Defesa Civil para localização precisa de abrigos mais próximos
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-semibold mb-2">Rota Segura</h3>
                        <p className="text-gray-600">
                            Visualização em tempo real do caminho mais seguro até o abrigo mais próximo
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-semibold mb-2">Rede de Solidariedade</h3>
                        <p className="text-gray-600">
                            Conectamos necessitados a recursos disponíveis de forma transparente e eficiente
                        </p>
                    </div>
                </div>
            </div>

            {/* Organização Section */}
            <div className="bg-gray-50 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Para Organizadores de Abrigos
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold mb-4">Gestão de Estoque</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Controle preciso de recursos disponíveis</li>
                                <li>Alertas automáticos para itens em falta</li>
                                <li>Relatórios de consumo em tempo real</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">📞</div>
                            <h3 className="text-xl font-semibold mb-4">Solicitação de Ajuda</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Solicite recursos específicos</li>
                                <li>Comunique situações de emergência</li>
                                <li>Receba ajuda da comunidade local</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Segurança Section */}
            <div className="bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Segurança e Transparência
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 rounded-xl p-8 text-center">
                            <div className="text-blue-600 text-4xl mb-4">🛡</div>
                            <h3 className="text-xl font-semibold mb-2">Integração Defesa Civil</h3>
                            <p className="text-gray-600">
                                Sistema oficialmente integrado com a Defesa Civil para maior segurança
                            </p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-8 text-center">
                            <div className="text-blue-600 text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">Monitoramento 24/7</h3>
                            <p className="text-gray-600">
                                Sensores avançados monitorando riscos em tempo real
                            </p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-8 text-center">
                            <div className="text-blue-600 text-4xl mb-4">🚨</div>
                            <h3 className="text-xl font-semibold mb-2">Áreas de Perigo</h3>
                            <p className="text-gray-600">
                                Mapeamento em tempo real de áreas de risco e rotas seguras
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Final */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Junte-se à nossa rede de solidariedade
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Faça parte de uma comunidade que salva vidas e transforma comunidades
                    </p>
                    <a 
                        href="/cadastrar" 
                        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full text-sm hover:opacity-90 transition-all"
                    >
                        Começar agora
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;