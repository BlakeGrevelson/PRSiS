import React from "react";

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Сервисы для пользователей</h1>
      <ul className="space-y-8 text-lg text-gray-700">
        <li>
          <span className="font-semibold text-blue-700">1. Доставка оборудования</span>
          <p className="text-base text-gray-600 mt-2">Мы осуществляем быструю и надёжную доставку арендованного оборудования по Москве и области. Вы можете выбрать удобное время и место, а наши специалисты аккуратно доставят всё необходимое прямо к вам.</p>
        </li>
        <li>
          <span className="font-semibold text-blue-700">2. Установка и настройка</span>
          <p className="text-base text-gray-600 mt-2">Наши профессионалы помогут установить и настроить оборудование на вашем объекте, чтобы вы могли сразу приступить к работе без лишних хлопот и задержек.</p>
        </li>
        <li>
          <span className="font-semibold text-blue-700">3. Техническая поддержка</span>
          <p className="text-base text-gray-600 mt-2">В случае возникновения вопросов или неисправностей вы всегда можете обратиться в нашу службу поддержки. Мы оперативно решим любые технические проблемы и дадим консультацию по эксплуатации.</p>
        </li>
        <li>
          <span className="font-semibold text-blue-700">4. Аренда с оператором</span>
          <p className="text-base text-gray-600 mt-2">Для сложных задач вы можете арендовать оборудование вместе с опытным оператором, который выполнит все работы быстро и качественно.</p>
        </li>
        <li>
          <span className="font-semibold text-blue-700">5. Консультации по выбору</span>
          <p className="text-base text-gray-600 mt-2">Наши специалисты помогут подобрать оптимальное оборудование под ваши задачи и бюджет, чтобы вы получили максимальную отдачу от аренды.</p>
        </li>
      </ul>
    </div>
  );
} 