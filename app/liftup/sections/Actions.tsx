'use client';

import { ActionButton, AccentButton } from "@/ui-kit";
import { useRouter } from 'next/navigation';


export default function Actions() {
    const router = useRouter()
    return (
      <>
        {/* Mobile */}
        <div className="flex flex-col gap-5 pr-17.5 -mt-5 items-start w-full sm:hidden">
            <AccentButton text="Написать в Telegram" onClick={() => window.open('https://t.me/uxiustina', '_blank')} />
            <ActionButton text="Посмотреть кейс на Behance" onClick={() => window.open('https://www.behance.net/gallery/241636771/UXUI-Mobile-App-LIFT-UP', '_blank')} />
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-5 w-full">
            <div className="col-span-2">
                <ActionButton text="Вернуться" icon={true} onClick={() => router.back()} hideTextBelow={1100} />
            </div>
            <div className="col-span-3 flex gap-1 justify-between">
                <AccentButton text="Написать в Telegram" onClick={() => window.open('https://t.me/uxiustina', '_blank')} />
                <ActionButton text="Написать на Email" onClick={() => window.open('mailto:kllmvrd@gmail.com')} />
                <ActionButton text="Посмотреть кейс на Behance" shortText="Кейс на Behance" shortTextBelow={1316} onClick={() => window.open('https://www.behance.net/gallery/241636771/UXUI-Mobile-App-LIFT-UP', '_blank')} />
            </div>
        </div>
      </>
    );
}
