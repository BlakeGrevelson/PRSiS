'use client';

import React from 'react';
import { useAuth } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

export default function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="max-w-xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-blue-800">Личный кабинет</h1>
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Личный кабинет</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700">ФИО</h3>
            <p className="text-lg text-gray-900 font-semibold">{user?.name}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">Email</h3>
            <p className="text-lg text-gray-900 font-semibold">{user?.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">Телефон</h3>
            <p className="text-lg text-gray-900 font-semibold">{user?.phone}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">Уровень доступа</h3>
            <p className="text-lg text-gray-900 font-semibold capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition font-semibold"
        >
          Выйти
        </button>
      </div>
    </div>
  );
} 