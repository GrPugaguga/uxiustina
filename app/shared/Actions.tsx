'use client';

import { ActionButton, AccentButton } from "@/ui-kit";
import { useRouter } from 'next/navigation';


export default function Actions() {
    const router = useRouter()
    return (
      <>
        {/* Mobile */}
        <div className="flex flex-col gap-5 pr-17.5 -mt-5 items-start w-full sm:hidden">
            <AccentButton text={"Написать\u00A0в\u00A0Telegram"} onClick={() => window.open('https://t.me/uxiustina', '_blank')} />
            <ActionButton text={"Посмотреть\u00A0кейс\u00A0на\u00A0Behance"} onClick={() => window.open('https://www.behance.net/gallery/241636771/UXUI-Mobile-App-LIFT-UP', '_blank')} />
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-5 w-full gap-7">
            <div className="col-span-2">
                <ActionButton text="Вернуться" icon={true} onClick={() => router.back()} hideTextBelow={1100} />
            </div>
            <div className="col-span-3 flex justify-start" style={{ gap: 'clamp(4px, 1.5vw, 22px)' }}>
                <AccentButton text={"Написать\u00A0в\u00A0Telegram"} onClick={() => window.open('https://t.me/uxiustina', '_blank')} />
                <ActionButton text={"Написать\u00A0на\u00A0Email"} onClick={() => window.open('mailto:utairrr@yandex.ru')} />
                <ActionButton text={"Посмотреть\u00A0кейс\u00A0на\u00A0Behance"} shortText={"Кейс\u00A0на\u00A0Behance"} shortTextBelow={1316} onClick={() => window.open('https://www.behance.net/gallery/241636771/UXUI-Mobile-App-LIFT-UP', '_blank')} />
            </div>
        </div>
      </>
    );
}
