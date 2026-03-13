import { SolutionSpan } from "@/ui-kit";
import Image from "next/image";

interface ICard {
    title: string, 
    svg:string, 
    diff:number, 
    isPositive:boolean, 
    result:string
}

function Card({card}: {card:ICard}){
    return (
        <div className="flex flex-col rounded-xl bg-white shadow-[0px_0px_100px_0px_#0000001A] w-74 h-36 justify-between px-4 py-3">
            <div className="flex flex-row justify-between">
                <span className="text-black text-[14px] font-semibold">{card.title}</span>
                <Image src={card.svg} width={20} height={20} alt=""/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <span className="font-medium text-[28px] text-grey-dark">{card.result}</span>
                    <div className={'w-10 h-5 flex items-center justify-center rounded-xl ' + (card.isPositive 
                        ? 'bg-state-success-bg text-state-success-txt'
                        : 'bg-state-error-bg text-state-error-txt'
                    )}>
                        <span className="font-semibold text-[12px] leading-none">{(card.isPositive ? '-' : '+') + card.diff}%</span>
                    </div>
                </div>
                <span className="text-[10px] text-grey-txt-primary">к предыдущему дню</span>
            </div>
        </div>
    )
}

export default function DashBoardExample(){
    const cards: ICard[] = [
        {
            title: "Среднее время ответа",
            svg: '/svg/time.svg',
            diff: 7,
            isPositive: true,
            result: '2:10'
        },
        {
            title: "Закрыто без вмешательств",
            svg: '/svg/chat.svg',
            diff: 2,
            isPositive: false,
            result: '93%'
        },
        {
            title: "Ср. время передачи менеджеру",
            svg: '/svg/user.svg',
            diff: 2,
            isPositive: false,
            result: '4:22'
        }
    ]
    return (
        <div className="grid grid-cols-12 gap-x-5 gap-y-15 w-full ">
            <SolutionSpan text="Устойчивость при росте входящих" className="col-start-6 col-span-7 w-fit "/>
            <div className="flex flex-row gap-5 col-start-1 col-span-12 w-full " >
                <div className="flex flex-col gap-4">
                    {cards.map((card, i) => (
                        <Card card={card} key={i}/>
                    ))}
                </div>
                <Image src="/image/saas/dashBoard.png" width={1240} height={640} alt="" className="rounded-2xl shadow-[0px_0px_100px_0px_#00000026]"/>
            </div>
        </div>
    )
}