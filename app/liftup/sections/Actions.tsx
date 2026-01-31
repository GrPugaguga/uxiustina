'use client';

import { ActionButton, AccentButton } from "@/ui-kit";
import { useRouter } from 'next/navigation';


export default function Actions() {
    const router = useRouter()
    return (
      <>
        {/* Mobile */}
        <div className="flex flex-col gap-5 pr-17.5 -mt-5 items-start w-full sm:hidden">
            <AccentButton text="Написать в Telegram" />
            <ActionButton text="Посмотреть кейс на Behance" />
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-5 gap-7 w-full">
            <div className="col-span-2">
                <ActionButton text="Вернуться" icon={true} onClick={() => router.back()} />
            </div>
            <div className="col-span-3 flex gap-5.5 justify-start">
                <AccentButton text="Написать в Telegram" />
                <ActionButton text="Написать на Email" />
                <ActionButton text="Посмотреть кейс на Behance" />
            </div>
        </div>
      </>
    );
}
