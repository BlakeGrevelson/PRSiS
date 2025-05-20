import React from "react";

export default function ContactsPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Контакты</h1>
      <div className="mb-8 text-lg text-gray-700">
        <p>Телефон: <a href="tel:+79991234567" className="text-blue-700 hover:underline">+7 (999) 123-45-67</a></p>
        <p>Email: <a href="mailto:info@renttool.ru" className="text-blue-700 hover:underline">info@renttool.ru</a></p>
        <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
      </div>
      <form className="bg-gray-50 rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Ваше имя" className="border rounded px-3 py-2 text-gray-900 placeholder-gray-400" />
        <input type="email" placeholder="Ваш email" className="border rounded px-3 py-2 text-gray-900 placeholder-gray-400" />
        <textarea placeholder="Сообщение" className="border rounded px-3 py-2 min-h-[80px] text-gray-900 placeholder-gray-400" />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Отправить</button>
      </form>
    </div>
  );
} 