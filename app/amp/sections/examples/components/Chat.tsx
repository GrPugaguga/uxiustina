import Image from "next/image";
import { IChatMessage } from "./interface";

function ChatMessage({ message, className }: { message: IChatMessage, className: string} ){
    return (
        <div 
        className={
            (message.role == 'client' ? 'flex flex-row self-start ' : 'flex flex-row-reverse self-end ') 
            + 'gap-2'}>
                <div className={"gap-2.5 rounded-2xl whitespace-pre-line  leading-none "
                     + (message.role =='client' ? 'bg-[#F3F4F7] border border-[#F3F4F7] text-black ': 'bg-[linear-gradient(180deg,#465AFF_0%,#3762FF_100%)] border border-[#E5E5E5] text-white ' ) 
                     + (message.url ? '' : 'px-4 py-3 pr-5 ')
                     + className + ' ' + message.className
                     }>
                        {message.url 
                        ? <Image src={message.url} alt="" width={172} height={172}/>
                        :<span className="text-[12px] font-normal">{message.message}</span>}
                </div>
                <span className="text-[8px] text-grey-main-tabbar font-normal self-end">{message.time}</span>
        </div>
    )
}


export default function Chat({messages, className='', messageClassName = ''}: {messages: IChatMessage[], className?: string, messageClassName?: string}){
    return (
        <div className={"flex flex-col font-sf bg-[#ffffff] shadow-[0px_0px_100px_0px_#0000001A] rounded-2xl w-107 px-5 py-6 gap-6 "+ className}>
            <div className="flex flex-row gap-25">
                <div className="flex flex-row gap-2 items-center">
                    <Image src="/svg/chat_sort.svg" alt="" width={16} height={16} />
                    <span className="font-medium text-[12px] text-grey-main-tabbar">Назад</span> 
                </div>
                <span className="text-[14px] tracking-[-0.02px] font-semibold text-black">AminaNa</span>
            </div>
            <div className="flex flex-col gap-4">
                {messages.map((m, index) => 
                (<ChatMessage message={m} key={index} className={messageClassName}/>))
                }
            </div>
            <div className="flex items-center justify-center text-center text-[12px] font-medium text-white rounded-xl w-full bg-[#666666] px-4 py-2 ">
               Взять в работу 
            </div>
        </div>
    )
}