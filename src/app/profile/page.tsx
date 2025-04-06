// pages/profile.tsx
"use client";

import useAuth from '@/hooks/useAuth';
import Image from 'next/image';

export default function Profile() {
  const isAuthenticated = useAuth();

  if (isAuthenticated === false) return null; // ou um spinner de loading

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header do Perfil */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center">
          <Image
            src="https://via.placeholder.com/150"
            alt="Avatar do Usuário"
            className="w-24 h-24 rounded-full border-4 border-blue-500 mr-6"
            height={100}
            width={100}
          />
          <div>
            <h1 className="text-3xl font-bold">Mock Profile</h1>
            <p className="text-gray-400">Amante de Mockups</p>
          </div>
        </div>


        <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Minhas Avaliações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-bold">Filme Exemplo 1</h3>
              <p className="text-gray-300 mt-2">
                Uma experiência cinematográfica inesquecível!
              </p>
              <span className="block text-blue-400 mt-2">Nota: 9.0</span>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-bold">Filme Exemplo 2</h3>
              <p className="text-gray-300 mt-2">
                Um filme que me emocionou profundamente.
              </p>
              <span className="block text-blue-400 mt-2">Nota: 8.5</span>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-2 px-4 rounded font-semibold">
              Ver Todas Avaliações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
