import Image from "next/image";

function ResearchCard({ label, text, isResearch }: { label: string; text: string; isResearch?: boolean }) {
    return (
        <div className="flex flex-col w-100 h-50 justify-between px-8 py-7 rounded-[20px] bg-linear-to-b from-[#0076FF] to-[#007EFF]">
            <div className="flex flex-col gap-2.5 items-start">
                <span className="font-medium text-[20px] text-background-white">{label}</span>
                <span className="font-medium text-[16px] tracking-[-0.17px] leading-5.25 text-accent-light">{text}</span>
            </div>
            {isResearch && <div className="flex flex-row justify-end"><Image src="/svg/research.svg" alt="" width={32} height={32} /></div>}
        </div>
    )
}

export default function Research() {
  return (
    <div className="flex flex-col gap-15 ">
        <span className="font-semibold text-[24px] leading-6.5 text-black">Исследования</span>
        <div className="flex flex-row gap-4">
            <ResearchCard label="Количественный опрос" text="47 респондентов" isResearch={true} />
            <ResearchCard label="Интервью" text="10 респондентов" isResearch={true} />
            <ResearchCard label="Анализ входящих сообщений" text="Более 120 сообщений" />
        </div>
    </div>
  );
}
