'use client'
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function ResearchCard({ label, text, className='', onClick }: { label: string; text: string; className?: string, onClick: () => void }) {
    return (
        <div className={"flex flex-col h-60 justify-between px-8 py-7 rounded-[20px] bg-linear-to-b from-[#0076FF] to-[#007EFF] cursor-pointer " + className} onClick={onClick}>
            <div className="flex flex-col gap-2.5 items-start">
                <span className="font-medium text-[20px] text-background-white">{label}</span>
                <span className="font-medium text-[16px] font-sf tracking-[-0.17px] leading-5.25 text-accent-light">{text}</span>
            </div>
            <div className="flex flex-row justify-end"><Image src="/svg/research.svg" alt="" width={24} height={24} /></div>
        </div>
    )
}

function InfoCard({ label, text, className='' }: { label: string; text: string; className?: string }) {
    return (
        <div className={"flex flex-col h-27.5 justify-between px-8 py-7 rounded-[20px] bg-linear-to-b from-[#0076FF] to-[#007EFF] " + className}>
            <div className="flex flex-col gap-2.5 items-start">
                <span className="font-medium text-[20px] text-background-white">{label}</span>
                <span className="font-medium text-[16px] font-sf tracking-[-0.17px] leading-5.25 text-accent-light">{text}</span>
            </div>
        </div>
    )
}

function PopUp({ url, onClose }: { url: string; onClose: () => void }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
    }, [])

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose()
        }
        document.addEventListener('keydown', handleEsc)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = ''
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = useCallback(() => {
        setVisible(false)
        setTimeout(() => onClose(), 300)
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center transition-opacity duration-300"
            style={{
                background: '#48484880',
                backdropFilter: 'blur(10px)',
                opacity: visible ? 1 : 0,
            }}
            onClick={handleClose}
        >
            <div className="relative w-full max-w-300 px-25 pt-30 items-start" onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute top-15 right-0 cursor-pointer"
                    onClick={handleClose}
                >
                    <Image src="/svg/close.svg" alt="Close" width={24} height={24} />
                </button>
                <Image
                    src={url}
                    alt=""
                    width={1440}
                    height={0}
                    style={{ height: 'auto', width: '100%' }}
                    priority
                    quality={90}
                />
            </div>
        </div>
    )
}


export default function Research() {
    const [popupUrl, setPopupUrl] = useState('')

    const openPopup = (url: string) => {
        setPopupUrl(url)
    }

    const closePopup = () => {
        setPopupUrl('')
    }

  return (
    <div className="flex flex-col gap-15 w-full ">
        <span className="font-semibold text-[24px] leading-6.5 text-black">Первичные исследования</span>
        <div className="grid grid-cols-12 gap-x-5 ">
            <ResearchCard label="Глубинные интервью" text="10 респондентов" className="col-start-1 col-span-4" onClick={() => openPopup('/image/saas/research/1.png')}/>
            <ResearchCard label="Количественный опрос" text="140 респондентов" className="col-start-5 col-span-4" onClick={() => openPopup('/image/saas/research/2.png')}/>
            <div className="flex flex-col gap-5 col-start-9 col-span-4">
                <InfoCard label="Анализ доп. контекста" text="Более 120 сообщений"/>
                <InfoCard label="Исследование рынка" text="6 конкурентов"/>
            </div>
        </div>
        {popupUrl && <PopUp url={popupUrl} onClose={closePopup} />}
    </div>
  );
}
