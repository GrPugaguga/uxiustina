import {
  ArrowButton,
  ActionButton,
  AcceptButton,
  AccentButton,
  HeaderLink,
  Card
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
      />
    </div>
  );
}
