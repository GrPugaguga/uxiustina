"use client";
import { useState } from "react";

function HypothesisTab({ number, active, onClick }: { number: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-13.75 h-13.75 rounded-xl hover:text-[#B5D5FC]  flex items-center justify-center cursor-pointer ${active ? "bg-accent-primary text-background-white" : "bg-accent-light text-background-white"}`}
    >
      <span className="text-[20px]  leading-none font-regular text-center  ">{number}</span>
    </button>
  );
}

interface IHypothese {
  aspect: string,
  observation: string,
  conclusion: string,
  solution:string
}

function Title({title, className = ''} : {title: string, className?: string}){
  return(
    <div className={"rounded-2xl px-8 py-5 gap-5 justify-center" + className}>
      <span className="text-xl font-medium text-grey-menu-dark">{title}</span>
    </div>
  )
}

function HypotheseText({text, className = ''}: {text: string, className?: string}){
  return (
    <div className={"rounded-2xl px-8 py-5 gap-5 justify-self-start" + className}>
      <span className="text-[16px] font-medium tracking-[-0.17px] text-black">{text}</span>
    </div>
  )
}

function Table({ hypothesis }: { hypothesis: IHypothese[] }){
  return (
    <div className="col-start-1 col-span-12 bg-white rounded-2xl flex flex-col ">
      <div className="w-full grid grid-cols-12 gap-x-5 border-b-3 border-grey-bg-primary">
        <Title title="Аспект" className="col-start-1 col-span-3"/>
        <Title title="Наблюдение" className="col-start-4 col-span-3"/>
        <Title title="Вывод" className="col-start-7 col-span-3"/>
        <Title title="UX-решение" className="col-start-10 col-span-3"/>
      </div>
      <div className="w-full grid grid-cols-12 gap-x-5 border-b-3 border-grey-bg-primary">
        <HypotheseText text={hypothesis[0]?.aspect} className="col-start-1 col-span-3"/>
        <HypotheseText text={hypothesis[0]?.observation} className="col-start-4 col-span-3"/>
        <HypotheseText text={hypothesis[0]?.conclusion} className="col-start-7 col-span-3"/>
        <HypotheseText text={hypothesis[0]?.solution} className="col-start-10 col-span-3"/>
      </div>
      <div className="w-full grid grid-cols-12 gap-x-5">
        <HypotheseText text={hypothesis[1]?.aspect} className="col-start-1 col-span-3"/>
        <HypotheseText text={hypothesis[1]?.observation} className="col-start-4 col-span-3"/>
        <HypotheseText text={hypothesis[1]?.conclusion} className="col-start-7 col-span-3"/>
        <HypotheseText text={hypothesis[1]?.solution} className="col-start-10 col-span-3"/>
      </div>
     
    </div>
  )
}

export default function HypothesisCheck() {
  const [activeTab, setActiveTab] = useState(0);
  const hypothesis = [
    [
      {
        aspect: 'Понимание действий системы',
        observation: 'При\u00A0отсутствии явных статусов участники не\u00A0могли понять, что\u00A0происходит в\u00A0процессе обработки. Возникало ощущение потери контроля.',
        conclusion: 'Требуется чёткая визуализация состояний',
        solution:'Добавлены чёткие статусы обработки диалогов.'
      },
      {
        aspect: 'Чувство управляемости',
        observation: 'Возможность ручного вмешательства снижала тревожность и\u00A0повышала готовность делегировать.',
        conclusion: 'Точка контроля обязательна в структуре решения',
        solution:'В\u00A0структуру решения добавлена точка ручного контроля.'
      }
    ],
    [
      {
        aspect: 'Повторяемость сценариев и\u00A0операционная нагрузка',
        observation: 'Типовые обращения повторяли один сценарий, перегрузка возникала из-за\u00A0переключений между диалогами.',
        conclusion: 'Повторяющиеся сценарии можно стандартизировать, а\u00A0количество ручных шагов сократить.',
        solution:'Спроектирована единая логика обработки типовых обращений и\u00A0сокращены ручные операции в\u00A0сценариях.'
      },
      {
        aspect: 'Восприятие качества коммуникации',
        observation: 'Автоматизация не снижала ощущение качества коммуникации\u00A0при сохранении контроля.',
        conclusion: 'Делегирование повторяющихся сценариев системе допустимо\u00A0при сохранении контроля со\u00A0стороны менеджера.',
        solution:'В\u00A0структуру обработки добавлена возможность подключения менеджера к\u00A0диалогу\u00A0при необходимости.'
      }
    ],
    [
      {
        aspect: 'Рост входящих',
        observation: 'При\u00A0увеличении нагрузки время реакции в\u00A0ручной модели возрастало,\u00A0что приводило к\u00A0задержкам в\u00A0обработке обращений и\u00A0потере части прибыли.',
        conclusion: 'Текущая модель обработки неустойчива в\u00A0пиковые периоды.',
        solution:'Спроектирована логика автоматической обработки типовых обращений для\u00A0снижения задержек.'
      },
      {
        aspect: 'Параллельная обработка',
        observation: 'Типовые обращения могут обрабатываться\u00A0без последовательного участия менеджера.',
        conclusion: 'Есть потенциал масштабирования\u00A0без потери\u00A0качества.',
        solution:'Реализована модель параллельной обработки типовых диалогов.'
      }
    ]
  ]

  return (
    <div className="relative w-full font-sf">
      <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full rounded-[40px] bg-grey-bg-primary" />
        <div className="relative grid grid-cols-12 gap-x-5 gap-y-15 py-20 bg-grey-bg-primary">
          <span className="col-start-1 col-span-3 font-semibold text-[24px] leading-6.5 text-black">Проверка гипотез</span>
          <span className="col-start-6 col-span-7 font-normal text-[16px] leading-5.25 text-black">{"На\u00A0прототипах проведены модерируемые юзабилити-тестирования, чтобы\u00A0проверить, как\u00A0пользователи проходят ключевые сценарии и\u00A0соответствует\u00A0ли\u00A0логика их\u00A0ожиданиям."}</span>

          <Table hypothesis={hypothesis[activeTab]}/>
          <div className="col-start-11 col-span-2 flex flex-col gap-5">
            <div className="flex flex-row gap-1">
              <HypothesisTab number={1} active={activeTab === 0} onClick={() => setActiveTab(0)} />
              <HypothesisTab number={2} active={activeTab === 1} onClick={() => setActiveTab(1)} />
              <HypothesisTab number={3} active={activeTab === 2} onClick={() => setActiveTab(2)} />
            </div>
          </div>
        </div>
    </div>
  );
}
