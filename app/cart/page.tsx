'use client';

import React from "react";
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateDays, clearCart, total } = useCart();
  const { isAuthenticated } = useAuth();
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-end mb-4">
        <Link href="/catalog" className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Вернуться в каталог</Link>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Корзина</h1>
      {items.length === 0 ? (
        <div className="text-gray-400 text-center py-12">Ваша корзина пуста.</div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-8">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 py-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-contain rounded bg-gray-100" />
                <div className="flex-1">
                  <div className="font-semibold text-blue-800">{item.name}</div>
                  <div className="text-gray-700 text-sm mb-1">{item.price} ₽/сутки</div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Дней аренды:</label>
                    <input
                      type="number"
                      min={1}
                      value={item.days}
                      onChange={e => updateDays(item.name, Math.max(1, Number(e.target.value)))}
                      className="w-16 border-2 border-blue-700 rounded px-2 py-1 text-center font-bold bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>
                <div className="font-bold text-lg text-green-700 min-w-[80px] text-right">{item.price * item.days} ₽</div>
                <button onClick={() => removeFromCart(item.name)} className="ml-2 text-red-600 hover:text-red-800 text-xl font-bold">×</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-bold">Итого:</div>
            <div className="text-2xl font-bold text-green-700">{total} ₽</div>
          </div>
          <button onClick={clearCart} className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition mb-2">Очистить корзину</button>
          {isAuthenticated ? (
            <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Оформить заказ</button>
          ) : (
            <div className="w-full text-center mt-4">
              <div className="text-red-600 font-semibold mb-2">Только зарегистрированные пользователи могут оформить заказ.</div>
              <Link href="/profile" className="inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Войти или зарегистрироваться</Link>
            </div>
          )}
        </>
      )}
    </div>
  );
} 