import Image from "next/image";

function RoleCard({ label, text, isTitle }: { label: string; text: string; isTitle?: boolean }) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <span className="uppercase font-normal text-[16px] leading-6.5 text-grey-txt-primary">{label}</span>
      {isTitle ? (
        <span className="font-semibold text-[24px] leading-6.5 text-black">{text}</span>
      ) : (
        <span className="font-normal font-sf text-[16px] leading-5.25 tracking-[-0.17px] text-black">{text}</span>
      )}
    </div>
  );
}

function Result({text}: {text: string}) {
 return (    
    <div className="flex flex-row gap-3 items-start">
        <Image src="/svg/result.svg" alt="" width={24} height={24} /> 
        <span className="font-normal text-[16px] text-black leading-5.25 ">{text}</span>
    </div>
  );
}

function ResultCard({ label, results }: { label: string; results: string[] }) {
     return (
    <div className="flex flex-col gap-4 items-start">
      <span className="uppercase font-semibold text-[16px] leading-6.5 text-grey-txt-secondary">{label}</span>     
        <div className="flex flex-col gap-3 font-sf">
          {results.map((result, index) => (
            <Result key={index} text={result} />
          ))}
        </div>
    </div>
  );
}

export default function Role() {

    const results = [
        'Спроектированы и\u00A0стандартизированы UX-сценарии обработки обращений, что\u00A0позволило автоматизировать до\u00A090% типовых сообщений.', 
        'Оптимизирована логика обработки диалогов, благодаря чему\u00A0сократилось среднее время ответа пользователям.',
        'Создан удобный дашборд мониторинга входящих сообщений, упростивший контроль нагрузки и состояния диалогов.'
    ]

  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-15 rounded-[40px] bg-linear-to-b from-grey-bg-primary to-[#F5F5F500] py-15">
      <div className="col-start-2 col-span-5">
        <RoleCard label="Роль" text="UX/UI Designer" isTitle />
      </div>
      <div className="col-start-7 col-span-4">
        <RoleCard label="Контекст" text={"Разработка AI-ассистента для\u00A0обработки входящих\u00A0сообщений с\u00A0интеграцией в\u00A0CRM."} />
      </div>
      <div className="col-start-2 col-span-4">
        <RoleCard label="Зона ответственности" text={"Вела UX-процесс проекта: от\u00A0исследования пользовательских потребностей и\u00A0анализа сценариев до\u00A0формулирования гипотез, проектирования флоу, логики и\u00A0UI интерфейса, а\u00A0также сопровождения решений."} />
      </div>
      <div className="col-start-7 col-span-5">
        <ResultCard label="Результаты" results={results}/> 
      </div>
    </div>
  );
}
