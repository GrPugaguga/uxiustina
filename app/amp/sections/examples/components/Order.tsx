import Image from "next/image";
import { IOrder } from "./interface";

function Status({type, status}: Pick<IOrder, 'type' | 'status'>){
 return (
    <div className={
        (type == 'success' 
            ? 'bg-state-success-bg text-state-success-txt'
            : 'bg-state-error-bg text-state-error-txt')
            + ' px-4 py-3 rounded-2xl w-full text-[12px]'}>
                Статус: {status}
    </div>
 )
}

function DataSpan ({title, data}: {title:string, data: string | number}){
    return (
        <div className="flex flex-row text-[13px] font-medium"> 
            <span className="text-grey-main-tabbar">{title}</span>
            <span className="text-black">{data}</span>
        </div>
    )
}

function OrderData({ order, className = '' }: {order: IOrder, className?: string}){
    return (
        <div className={"flex flex-col gap-3 " + className}>
            <DataSpan title={'Тип:\u00A0'} data={order.type == 'success' ? 'Заказ' : 'Жалоба' } />
            <DataSpan title={"Источник:\u00A0"} data={order.source}/>
            <DataSpan title={"Номер:\u00A0"} data={order.orderId}/>
            <DataSpan title={"Дата и время:\u00A0"} data={order.date}/>
        </div>
    )
}

function PrevOrderData({ order, className = '' }: {order: IOrder, className?: string}){
    return (
        <div className={"flex flex-col gap-3 " + className}>
            <DataSpan title={'Тип:\u00A0'} data={order.type == 'success' ? 'Заказ' : 'Жалоба' } />
            <DataSpan title={"Номер:\u00A0"} data={order.orderId}/>
            <DataSpan title={"Дата и время:\u00A0"} data={order.date}/>
            <DataSpan title={"Статус:\u00A0"} data={order.status}/>          
        </div>
    )
}

export default function Order({order, className = '', prevOrder }: { order: IOrder, className?: string, prevOrder?: IOrder} ){
    return (
        <div className={"flex flex-col w-82.5 px-5 py-6 gap-8 font-sf bg-[#ffffff] shadow-[0px_0px_100px_0px_#0000001A] rounded-2xl " + className} >
            <Status type={order.type} status={order.status}/>
            <div className="flex flex-col px-4 gap-8">
                <OrderData order={order}/>
                <div className="flex flex-row justify-between text-[12px] font-medium text-grey-main-tabbar">
                    <span>Предыдущие статусы</span>
                    <Image src="/svg/chat_sort.svg" alt="" width={16} height={16} className={' ' +(prevOrder ? ' rotate-90' : ' rotate-270')}/>
                </div>    
                { prevOrder &&   <PrevOrderData order={prevOrder} className="-mt-5"/>}
            </div>
        </div>
    )
}