'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'guest' | 'user' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
}

interface AuthContextType {
  user: Omit<User, 'password'> | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, phone: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getUsersFromStorage(): User[] {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

function saveUsersToStorage(users: User[]) {
  localStorage.setItem('users', JSON.stringify(users));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Omit<User, 'password'> | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const users = getUsersFromStorage();
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) throw new Error('Пользователь не найден или неверный пароль');
    const { password: _password, ...userDataWithoutPassword } = found;
    setUser(userDataWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userDataWithoutPassword));
  };

  const register = async (name: string, email: string, phone: string, password: string) => {
    const users = getUsersFromStorage();
    if (users.some(u => u.email === email)) throw new Error('Пользователь с таким email уже существует');
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      password,
      role: 'user',
    };
    users.push(newUser);
    saveUsersToStorage(users);
    const { password: _password, ...userDataWithoutPassword } = newUser;
    setUser(userDataWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userDataWithoutPassword));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 