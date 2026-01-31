'use client';

import { Card, AccentButton } from '@/ui-kit';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-white pt-32.5 sm:pt-54.25 px-5 sm:px-25">
      <div className="flex flex-col gap-28.25 mb-28.5 items-center">
        {/* Текстовый блок */}
        <div className="sm:w-217.5 text-left sm:text-center">
          <h1 className="text-[26px] font-medium leading-7.5 -tracking-[0.52px]">
            <span className="text-black">Привет! Я Юстина, UX/UI дизайнер.</span>
            <br />
            <span className="text-grey-txt-secondary text-[24px]">Решаю комплексные задачи через пользовательские исследования, аналитику и системный подход в проектировании</span>
          </h1>
          <AccentButton text="Написать в Telegram" className="sm:hidden w-full mt-4" />
        </div>

        {/* Works блок */}
        <div id="projects" className="flex flex-col sm:flex-row gap-8 items-center">
          <Card
            image="/image/main_LiftUp.png"
            title="LiftUp"
            description="Фитнес-приложение с умным помощником"
            href="/liftup"
          />
          <Card
            image="/image/main_LiftUp.png"
            title="LiftUp"
            description="Фитнес-приложение с умным помощником"
            href="/liftup"
          />
        </div>
      </div>
    </div>
  );
}
