import {
  ArrowButton,
  ActionButton,
  AcceptButton,
  AccentButton,
  HeaderLink
 } from '@/ui-kit'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-white font-sans dark:bg-black gap-2.5">
      <AcceptButton text='Хорошо'/>
      <ActionButton text="Вернуться" icon={true}/>
      <AccentButton text="Написать в телеграмм"/>
      <ArrowButton type="left"/>
      <HeaderLink text="CV" icon={true}/>
    </div>
  );
}
