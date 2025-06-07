import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Sobre o Resgate Solidário</h1>

                {/* Mission Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                            O Resgate Solidário é uma plataforma inteligente desenvolvida para otimizar a gestão de abrigos e doações em situações de enchentes. 
                            Nosso objetivo é transformar o caos pós-desastre em uma rede de apoio organizada e eficaz, onde a tecnologia amplifica a solidariedade.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">O que fazemos</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Gerenciamos abrigos de forma eficiente</li>
                                    <li>Facilitamos o fluxo de doações</li>
                                    <li>Monitoramos condições ambientais</li>
                                    <li>Prevemos riscos de enchentes</li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Como ajudamos</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Conectamos necessitados a abrigos</li>
                                    <li>Garantimos distribuição justa de recursos</li>
                                    <li>Oferecemos transparência nas doações</li>
                                    <li>Monitoramos em tempo real</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tecnologia Avançada</h2>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                <strong>Backend:</strong> Sistema em Python que gerencia informações sobre abrigos próximos, doações disponíveis e estados dos abrigos.
                            </p>
                            <p className="text-gray-700">
                                <strong>Frontend:</strong> Interface web moderna e responsiva, construída com React e Tailwind CSS.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sistema de Sensores</h2>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                <strong>Arduino:</strong> Sistema de monitoramento avançado que inclui:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Sensores de nível de água para previsão de enchentes</li>
                                <li>Sensores DHT para monitoramento de temperatura e umidade</li>
                                <li>Alertas em tempo real</li>
                                <li>Integração com sistema central</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <Link 
                        to="/solucao"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                        Saiba mais sobre nossa solução
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sobre;