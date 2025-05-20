'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  name: string;
  price: number;
  img: string;
  days: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'days'>) => void;
  removeFromCart: (name: string) => void;
  updateDays: (name: string, days: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'days'>) => {
    setItems(prev => {
      const found = prev.find(i => i.name === item.name);
      if (found) {
        return prev.map(i => i.name === item.name ? { ...i, days: i.days + 1 } : i);
      }
      return [...prev, { ...item, days: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setItems(prev => prev.filter(i => i.name !== name));
  };

  const updateDays = (name: string, days: number) => {
    setItems(prev => prev.map(i => i.name === name ? { ...i, days } : i));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price * i.days, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateDays, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
} 