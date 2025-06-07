import React from 'react';

function Solucao() {
    return (
        <section className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Nossa Solução</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Backend Python</h2>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                Sistema central que gerencia todos os dados e processos do projeto:
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Gestão de abrigos e suas localizações</li>
                                <li>Controle de estoque de doações</li>
                                <li>Monitoramento de necessidades dos abrigos</li>
                                <li>Integração com sistema de sensores</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Sistema de Sensores Arduino</h2>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                Componente físico que monitora condições críticas:
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-800">Sensores de Nível de Água</h3>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Previsão de enchentes</li>
                                        <li>Monitoramento em tempo real</li>
                                        <li>Alertas automáticos</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Sensores DHT</h3>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Monitoramento de temperatura</li>
                                        <li>Controle de umidade</li>
                                        <li>Condições ambientais dos abrigos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Interface Web</h2>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                Plataforma web que conecta todos os componentes:
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Interface intuitiva para usuários</li>
                                <li>Visualização em tempo real de dados</li>
                                <li>Gestão de doações e abrigos</li>
                                <li>Alertas e notificações</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Solucao;