function RoleCard({ label, text, isTitle }: { label: string; text: string; isTitle?: boolean }) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <span className="uppercase font-normal text-[16px] leading-6.5 text-grey-txt-primary">{label}</span>
      {isTitle ? (
        <span className="font-semibold text-[24px] leading-6.5 text-black">{text}</span>
      ) : (
        <span className="font-normal text-[16px] leading-5.25 tracking-[-0.17px] text-black">{text}</span>
      )}
    </div>
  );
}

export default function Role() {
  return (
    <div className="grid grid-cols-8 gap-x-5 gap-y-15 rounded-[40px] bg-linear-to-b from-grey-bg-primary to-[#F5F5F500] py-15">
      <div className="col-start-2 col-span-3">
        <RoleCard label="Роль" text="Product Designer" isTitle />
      </div>
      <div className="col-start-5 col-span-3">
        <RoleCard label="Зона ответственности" text="Проводила исследования и интервью, анализировала сценарии входящих сообщений, формулировала UX-гипотезы, проектировала флоу и разрабатывала финальные макеты дашборда." />
      </div>
      <div className="col-start-2 col-span-3">
        <RoleCard label="Контекст" text="Разработка AI-ассистента для обработки входящих сообщений с интеграцией в CRM." />
      </div>
      <div className="col-start-5 col-span-3">
        <RoleCard label="Цель" text="Сократить ручную рутину менеджеров, ускорить ответы и сохранить управляемость процесса." />
      </div>
    </div>
  );
}
