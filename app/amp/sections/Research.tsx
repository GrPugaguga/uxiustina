import Image from "next/image";

function ResearchCard({ label, text, className='' }: { label: string; text: string; className?: string }) {
    return (
        <div className={"flex flex-col h-60 justify-between px-8 py-7 rounded-[20px] bg-linear-to-b from-[#0076FF] to-[#007EFF] " + className}>
            <div className="flex flex-col gap-2.5 items-start">
                <span className="font-medium text-[20px] text-background-white">{label}</span>
                <span className="font-medium text-[16px] tracking-[-0.17px] leading-5.25 text-accent-light">{text}</span>
            </div>
            <div className="flex flex-row justify-end"><Image src="/svg/research.svg" alt="" width={32} height={32} /></div>
        </div>
    )
}

function InfoCard({ label, text, className='' }: { label: string; text: string; className?: string }) {
    return (
        <div className={"flex flex-col h-27.5 justify-between px-8 py-7 rounded-[20px] bg-linear-to-b from-[#0076FF] to-[#007EFF] " + className}>
            <div className="flex flex-col gap-2.5 items-start">
                <span className="font-medium text-[20px] text-background-white">{label}</span>
                <span className="font-medium text-[16px] tracking-[-0.17px] leading-5.25 text-accent-light">{text}</span>
            </div>
        </div>
    )
}


export default function Research() {
  return (
    <div className="flex flex-col gap-15 w-full ">
        <span className="font-semibold text-[24px] leading-6.5 text-black">Первичные исследования</span>
        <div className="grid grid-cols-12 gap-x-5 ">
            <ResearchCard label="Глубинное интервью" text="10 респондентов" className="col-start-1 col-span-4"/>
            <ResearchCard label="Количественный опрос" text="140 респондентов" className="col-start-5 col-span-4" />
            <div className="flex flex-col gap-5 col-start-9 col-span-4">
                <InfoCard label="Анализ доп. контекста" text="Более 120 сообщений"/>
                <InfoCard label="Исследование рынка" text="6 конкурентов"/>
            </div>
        </div>
    </div>
  );
}
