'use client';

import { Card, AccentButton } from '@/ui-kit';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-white pt-32.5 sm:pt-54.25">
      <div className="flex flex-col gap-28.25 mb-28.5 items-center">
        {/* Текстовый блок */}
        <div className="sm:w-217.5 text-left sm:text-center">
          <h1 className="text-[26px] font-medium leading-7.5 -tracking-[0.52px]">
            <span className="text-black">Привет! Я Юстина, UX/UI дизайнер.</span>
            <br />
            <span className="text-grey-txt-secondary text-[24px]">{"Решаю комплексные задачи через пользовательские исследования, аналитику и\u00A0системный подход в\u00A0проектировании"}</span>
          </h1>
          <AccentButton text="Написать в Telegram" className="sm:hidden w-full mt-4" />
        </div>

        {/* Works блок */}
        <div id="projects" className="flex flex-col sm:flex-row gap-8 items-center">
          <Card
            image="/image/main_LiftUp.png"
            title="LiftUp"
            description={"Фитнес\u2011приложение с\u00A0умным помощником"}
            href="/liftup"
            priority
          />
          <Card
            image="/image/main_LiftUp.png"
            title="B2B SaaS"
            description={"Платформа для\u00A0автоматизации маркетинга. Проект под\u00A0NDA"}
            href="/"
            priority
            locked
          />
        </div>
      </div>
    </div>
  );
}
