import { Card } from '@/ui-kit';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-white pt-54.25 px-25">
      <div className="flex flex-col gap-28.25 mb-28.5 items-center">
        {/* Текстовый блок */}
        <div className="w-217.5 text-center">
          <h1 className="text-[26px] font-medium leading-7.5 -tracking-[0.52px]">
            <span className="text-black">Привет! Я Юстина, UX/UI дизайнер.</span>
            <br />
            <span className="text-grey-txt-secondary">Решаю комплексные задачи через пользовательские исследования, аналитику и системный подход в проектировании</span>
          </h1>
        </div>

        {/* Works блок */}
        <div className="flex gap-8">
          <Card
            image="/image/main_LiftUp.png"
            title="LiftUp"
            description="Фитнес-приложение с умным помощником"
          />
          <Card
            image="/image/main_LiftUp.png"
            title="LiftUp"
            description="Фитнес-приложение с умным помощником"
          />
        </div>
      </div>
    </div>
  );
}
