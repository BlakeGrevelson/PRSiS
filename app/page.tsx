import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Хедер с логотипом и меню */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/main-logo2.png" alt="RentTool Logo" width={48} height={48} className="rounded-full border-2 border-blue-200 bg-white object-contain" />
          <span className="text-2xl font-bold text-blue-700 tracking-tight">RentTool</span>
        </div>
        <nav className="flex gap-6 text-lg font-semibold text-gray-900">
          <Link href="/catalog" className="hover:text-blue-700 transition">Каталог</Link>
          <Link href="/services" className="hover:text-blue-700 transition">Сервисы</Link>
          <Link href="/cart" className="hover:text-blue-700 transition">Корзина</Link>
          <Link href="/profile" className="hover:text-blue-700 transition">Личный кабинет</Link>
          <Link href="/contacts" className="hover:text-blue-700 transition">Контакты</Link>
          <Link href="/privacy" className="hover:text-blue-700 transition">Политика конфиденциальности</Link>
        </nav>
      </header>

      {/* Презентационный блок */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">Аренда оборудования для любых задач</h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-6">
          RentTool — удобный сервис для аренды профессионального и бытового оборудования. Быстро, выгодно, надёжно!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/catalog" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Перейти в каталог</Link>
          <Link href="/services" className="bg-white border border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Наши сервисы</Link>
        </div>
        {/* Логотип-презентация */}
        <div className="mt-8 w-full max-w-xl flex items-center justify-center">
          <Image
            src="/main-logo.jpg"
            alt="Логотип RentTool"
            width={400}
            height={400}
            className="rounded-xl shadow-lg border-4 border-blue-100 object-contain bg-white"
            priority
          />
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-white py-4 text-center text-gray-500 text-sm border-t">© 2024 RentTool. Все права защищены.</footer>
    </div>
  );
}
