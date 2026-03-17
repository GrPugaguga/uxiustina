import { SolutionSpan } from "@/ui-kit";
import Chat from "./components/Chat";
import Order from "./components/Order";
import { IChatMessage, IOrder } from "./components/interface";
import Image from "next/image";


export default function First(){

    const messages: IChatMessage[] = [
        {
            role: 'client',
            message: 'Здравствуйте. Я получила букет, и цветы завяли через несколько часов. Это вообще нормально?',
            time: '19:22',
            className:' w-70'
        },
        {
            role: 'admin',
            message: `Нам очень жаль, что так произошло 🌿Пожалуйста,\u00A0пришлите\u00A0фото\u00A0букета,\u00A0чтобы мы могли разобраться.`,
            time: '19:23',
            className:' w-74'

        },
        {
            role: 'client',
            message: 'фото',
            url: '/image/saas/flower.png',
            time: '19:28'
        },
        {
            role: 'admin',
            message: 'Спасибо за фото.\nЯ передаю обращение менеджеру —\nон свяжется с вами в ближайшее\nвремя.',
            time: '19:29',
            className:' w-65'
        }
    ]

    const order: IOrder = {
          status: 'Требует внимания с 19:28',
          type: 'complaint',
          source: '***',
          orderId: 106,
          date: '12/12/24 20:03'
    }
    const prevOrder: IOrder = {
        status: 'Закрыт',
        type: 'success',
        source: '***',
        orderId: 23955,
        date: '12/12/24 16:03'
    }

    return (
        <div className="flex flex-row w-full gap-0">
            <div className="flex flex-col-reverse w-full mb-8 pl-2">
                <Image src="/svg/vector_arrow.svg" alt="" width={316} height={84} className="self-end z-10 -mr-2" />
                <SolutionSpan text="Точка ручного контроля" className=" self-start"/>
            </div>
            <div className="flex flex-row gap-5 ml-auto">
                <Chat messages={messages} />
                <Order order={order} prevOrder={prevOrder} className="self-start"/>
            </div>
        </div>
    )
}