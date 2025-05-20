'use client';

import React from "react";
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const items = [
  {
    name: "Перфоратор Bosch GBH 2-26 DRE",
    desc: "Мощный и надёжный перфоратор для сверления и долбления бетона, кирпича и камня.",
    price: 700,
    img: "/tools/perf-bosch.jpg"
  },
  {
    name: "Лестница-стремянка 5 ступеней",
    desc: "Удобная алюминиевая стремянка для работ на высоте внутри помещений.",
    price: 250,
    img: "/tools/ladder.jpg"
  },
  {
    name: "Шлифмашина Makita BO3711",
    desc: "Компактная вибрационная шлифмашина для обработки дерева и металла.",
    price: 400,
    img: "/tools/sander-makita.jpg"
  },
  {
    name: "Пылесос строительный Karcher WD 3",
    desc: "Мощный пылесос для уборки строительного мусора и пыли.",
    price: 350,
    img: "/tools/vacuum-karcher.jpg"
  },
  {
    name: "Лобзик электрический DeWalt DW349",
    desc: "Универсальный лобзик для фигурного и прямого реза различных материалов.",
    price: 300,
    img: "/tools/jigsaw-dewalt.jpg"
  },
  {
    name: "Бетономешалка 140 л",
    desc: "Надёжная бетономешалка для приготовления раствора на стройке или ремонте.",
    price: 1200,
    img: "/tools/mixer.jpg"
  },
];

export default function CatalogPage() {
  const { addToCart } = useCart();
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-end mb-4">
        <Link href="/cart" className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Перейти в корзину</Link>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Каталог оборудования</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow p-5 flex flex-col items-center">
            <img src={item.img} alt={item.name} className="w-32 h-32 object-contain mb-4 rounded" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2 text-center">{item.name}</h2>
            <p className="text-gray-700 text-center mb-4">{item.desc}</p>
            <div className="text-lg font-bold text-green-700 mb-2">{item.price} ₽/сутки</div>
            <button onClick={() => addToCart(item)} className="mt-auto bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
} 