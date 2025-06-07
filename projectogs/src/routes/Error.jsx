import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full px-4">
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
                        <p className="text-xl text-gray-600">Página não encontrada</p>
                    </div>
                    
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Desculpe, a página que você está procurando não foi encontrada.
                        </p>
                        <p className="text-gray-600">
                            Verifique se o endereço está correto ou use o menu de navegação para encontrar o que precisa.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link 
                            to="/"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Voltar para a página inicial
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;