import { BlockTitle } from "@/ui-kit";
import Image from "next/image";


function Stage({ stage, icon_path }: { stage:string, icon_path:string }){
    return (
        <div className=" flex flex-row bg-grey-menu-dark px-8 py-5 gap-3 rounded-2xl border border-grey-bg-primary w-full">
        <Image src={icon_path} alt="" width={24} height={24} /> 
        <span className="text-background-white text-[16px] font-medium tracking-[-0.17px]">{stage}</span>
        </div>
    )
}

function Task({ task }: {task: { text: string; className: string }}){
    return (
        <div className={"inline-flex flex-row bg-grey-bg-primary px-6 py-4 gap-3 rounded-2xl border border-grey-bg-primary " + task.className}>
            <Image src='/svg/dat.svg' alt="" width={8} height={8} className="self-start mt-1.5 shrink-0"/>
            <span className="text-[16px] font-medium leading-5.25 text-black">{task.text}</span>
        </div>
    )
}

function StageOfWork({ stage, icon_path, tasks, className }: {   stage: string, icon_path:string, tasks: { text: string; className: string }[] , className: string}){
    return (
        <div className={'flex flex-col gap-6 items-start ' + className}>
            <Stage stage={stage} icon_path={icon_path} /> 
            {tasks.map(( task, index) => (
                <Task task={task} key={index}/>
            ))
            }
        </div>
    )
}




export default function StagesOfWork() {
    const taskMap = [
        [
            { text: 'Сбор контекста', className: '' },
            { text: 'Исследование рынка', className: '' },
            { text: 'Глубинные интервью', className: '' },
            { text: 'Количественные исследования', className: '' },
            { text: 'Анализ данных доп. контекста', className: '' },
            { text: 'Формирование гипотез', className: '' },
        ],
        [
            { text: 'Проектирование user flow', className: '' },
            { text: 'Создание прототипов', className: '' },
            { text: 'Юзабилити-тесты и\u00A0проверка гипотез', className: '' },
            { text: 'Доработка решений', className: '' },
        ],
        [
            { text: 'UI-проработка и\u00A0подготовка интерфейса', className: '' },
            { text: 'Передача в\u00A0разработку и\u00A0сопровождение', className: '' },
            { text: 'Пост-релизный анализ пользовательского\u00A0опыта', className: 'max-w-[276px]' },
            { text: 'Формирование новых гипотез и\u00A0итерационная доработка продукта', className: 'max-w-[364px]' },
        ],
    ]

    return (
     <div className="grid grid-cols-12 gap-x-5 w-full">
      <BlockTitle text={'Этапы работы'} className="col-start-1 col-span-12"/>

        <div className="col-start-1 col-span-12 bg-[url('/svg/setka.svg')] bg-no-repeat bg-size-[100%_100%] mt-15">
            <div className="grid grid-cols-12 gap-x-5 py-5 font-sf">
              <StageOfWork 
                  stage={'Исследования и\u00A0гипотезы'}
                  icon_path="/svg/Bulb.svg"
                  className="col-start-1 col-span-4"
                  tasks={taskMap[0]}
              />
              <StageOfWork 
                  stage={'Проектирование и\u00A0проверка решений' }
                  icon_path="/svg/Cone.svg"
                  className="col-start-5 col-span-4 mt-30"
                  tasks={taskMap[1]}
              />
              <StageOfWork 
                  stage={'UI-реализация и\u00A0развитие решения'} 
                  icon_path="/svg/Retry.svg"
                  className="col-start-9 col-span-4 mt-60"
                  tasks={taskMap[2]}
              />
            </div>
        </div>
    </div>
    );
}
