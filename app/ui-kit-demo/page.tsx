import {
  ArrowButton,
  ActionButton,
  AcceptButton,
  AccentButton,
  HeaderLink,
  Card,
  ImageCarousel
} from '@/ui-kit'

export default function UIKitDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-white gap-2.5 flex-wrap p-10">
      <AcceptButton text='Хорошо'/>
      <ActionButton text="Вернуться" icon={true}/>
      <AccentButton text="Написать в телеграмм"/>
      <ArrowButton type="left"/>
      <HeaderLink text="CV" icon={true}/>
      <Card
        image="/image/main_LiftUp.png"
        title="LiftUp"
        description="Фитнес-приложение с умным помощником"
        href="/liftup"
      />
      <div className="w-full max-w-4xl">
        <ImageCarousel
          images={[
            "/image/LiftUp/sections/context/12.png",
            "/image/LiftUp/sections/context/25.png",
            "/image/LiftUp/sections/context/32.png",
            "/image/LiftUp/sections/context/42.png"
          ]}
          height={500}
        />
      </div>
    </div>
  );
}
