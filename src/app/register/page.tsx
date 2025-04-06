// pages/register.tsx
"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { username, password });
      if (response.status === 201) {
        router.push('/login');
      }
    } catch (err) {
      console.error(err);
      setError('Erro ao registrar usuário.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <form onSubmit={handleRegister} className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Criar Conta</h1>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-3 rounded font-semibold">
          Registrar
        </button>
        <p className="text-center mt-4">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Fazer Login
          </Link>
        </p>
      </form>
    </div>
  );
}
