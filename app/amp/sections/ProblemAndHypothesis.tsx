import Image from "next/image";

function Hypothesis({ number, text, className }: { number: number; text: string; className?: string }) {
  return (
    <div className={`flex flex-col  p-8 rounded-2xl gap-5 bg-linear-to-l from-grey-bg-primary to-[#F5F5F500] ${className ?? ""}`}>
      <span className="text-[20px] font-medium text-grey-menu-dark">Гипотеза {number}</span>
      <div className="text-[16px] font-medium ">
        {text}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <div className="relative col-start-1 col-span-5 row-start-3  h-80">
      <Image src="/svg/problem_border.svg" alt="" width={255} height={320} className="absolute top-0 right-0 h-full w-auto pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col rounded-2xl p-8 gap-5" style={{ background: "linear-gradient(90deg, rgba(0, 126, 255, 0.3) 0%, rgba(245, 245, 245, 0) 60.58%)" }}>
        <div className="relative flex text-grey-menu-dark">
          <span className="text-[20px] font-medium">Проблема</span>
        </div>
        <span className="text-[16px] text-grey-text-dark font-medium">{"Текущая модель обработки входящих сообщений\u00A0не\u00A0масштабируется при росте нагрузки\u00A0и\u00A0приводит\u00A0к\u00A0задержкам\u00A0в\u00A0пиковые"} <br /> {"периоды."}</span>
        <span className="text-[16px] text-grey-text-dark font-medium">{"При этом автоматизация воспринимается как"}<br/> {"риск\u00A0из-за\u00A0отсутствия\u00A0прозрачного контроля."}</span>
      </div>
    </div>
  );
}

export default function ProblemAndHypothesis() {
  return (
    <div className="grid grid-cols-12 gap-5 w-full">
      <span className="col-start-1 col-span-4 font-semibold text-[24px] leading-6.5 text-black">Проблема и стартовые гипотезы</span>
      <Hypothesis className="col-start-7 col-span-5 row-start-2" number={1} text={"Если обеспечить прозрачность действий системы и\u00A0возможность контроля со стороны пользователя, то\u00A0снизится барьер доверия к автоматизации."} />
      <Problem />
      <Hypothesis className="col-start-8 col-span-5 row-start-3 self-center" number={2} text={"Если сократить количество ручных операций в\u00A0повторяющихся сценариях обработки входящих, то\u00A0снизится операционная нагрузка на\u00A0менеджеров\u00A0при\u00A0сохранении воспринимаемого качества коммуникации."} />
      <Hypothesis className="col-start-6 col-span-5 row-start-4" number={3} text={"Если обработка типовых обращений будет масштабироваться при росте входящих, то\u00A0сократится\u00A0доля задержек и необработанных диалогов в пиковые периоды."} />
    </div>
  );
}
