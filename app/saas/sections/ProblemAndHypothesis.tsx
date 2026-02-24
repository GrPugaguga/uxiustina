import Image from "next/image";

function Hypothesis({ number, text, className }: { number: number; text: string; className?: string }) {
  return (
    <div className={`flex flex-col w-118.5 p-8 rounded-[16px] gap-5 bg-linear-to-l from-grey-bg-primary to-[#F5F5F500] ${className ?? ""}`}>
      <span className="text-[20px] font-medium text-center">Гипотеза {number}</span>
      <div className="text-[16px] font-medium text-center">
        {text}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <div className="relative col-start-1 col-span-4 row-start-3 w-112 h-[319px]">
      <Image src="/svg/problem_border.svg" alt="" width={255} height={319} className="absolute top-0 right-0 h-full w-auto pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col rounded-[16px] p-8 gap-5" style={{ background: "linear-gradient(90deg, rgba(0, 126, 255, 0.3) 0%, rgba(245, 245, 245, 0) 60.58%)" }}>
        <div className="relative flex items-center justify-center">
          <Image src="/svg/question.svg" alt="" width={42} height={42} className="absolute left-0" />
          <span className="text-[20px] font-medium">Проблема</span>
        </div>
        <span className="text-[16px] text-grey-text-dark font-medium">Текущая модель обработки входящих сообщений не масштабируется при росте нагрузки и приводит к задержкам в пиковые периоды.</span>
        <span className="text-[16px] text-grey-text-dark font-medium">При этом автоматизация воспринимается как риск из-за отсутствия прозрачного контроля.</span>
      </div>
    </div>
  );
}

export default function ProblemAndHypothesis() {
  return (
    <div className="grid grid-cols-8 gap-5 w-full">
      <span className="col-start-1 col-span-4 font-semibold text-[24px] leading-6.5 text-black">Проблема и гипотезы</span>
      <Hypothesis className="col-start-5 col-span-5 row-start-2" number={1} text="Если обеспечить прозрачность действий системы и возможность контроля со стороны пользователя, то снизится барьер доверия к автоматизации." />
      <Problem />
      <Hypothesis className="col-start-6 col-span-4 row-start-3 self-center" number={2} text="Если сократить количество ручных операций в повторяющихся сценариях обработки входящих, то снизится операционная нагрузка на менеджеров при сохранении воспринимаемого качества коммуникации." />
      <Hypothesis className="col-start-4 col-span-6 row-start-4" number={3} text="Если обработка типовых обращений будет масштабироваться при росте входящих, то сократится доля задержек и необработанных диалогов в пиковые периоды." />
    </div>
  );
}
