import { SolutionSpan } from "@/ui-kit";
import Chat from "./components/Chat";
import { IChatMessage, IOrder } from "./components/interface";
import Order from "./components/Order";
import Image from "next/image";

export default function First(){
    const messages: IChatMessage[] = [
        {
            role: 'client',
            message: 'Здравствуйте, есть ли в наличии\n букет “Розовое облако”?',
            time: '11:26'
        },
        {
            role: 'admin',
            message: `Добрый день ❤️\n Букет\u00A0“Розовое\u00A0облако”\u00A0есть\u00A0в\u00A0наличии.\nСтоимость\u00A012\u00A0300\u00A0рублей. Можем\u00A0оформить\u00A0заказ\u00A0с\u00A0доставкой\u00A0или\nсамовывозом. Как вам удобнее?`,
            time: '11:27',
        },
        {
            role: 'client',
            message: 'Заберу самовывозом сегодня\nвечером, около 20:00. А сможете\nупаковку поменять на голубую?',
            time: '11:38'
        },
        {
            role: 'admin',
            message: 'Конечно поменяем  🌸\nВаш букет будет готов к 20:00 ❤️',
            time: '11:39'
        },
        {
            role: 'client',
            message: 'Спасибо огромное.',
            time: '11:39'
        },
    ]

    const order: IOrder = {
        status: 'Завершено автоматически',
        type: 'success',
        source: '***',
        orderId: 23526,
        date: '16/12/24 11:39'
    }

    return (
        <div className="flex flex-row gap-5 self-start ">
            <Chat messages={messages} messageClassName="max-w-65"/>
            <div className="flex flex-col">
                <Order order={order} className="self-start"/>
                <div className="flex flex-row flex-1 items-center mb-14">
                    <div className="w-82.5">
                        <Image src="/svg/solution_vector.svg" alt="" width={272} height={12} className="-ml-7" /> 
                    </div>
                    <SolutionSpan text="Стандартизация типовых запросов" className=""/>
                </div>
            </div>
        </div>
    )
}