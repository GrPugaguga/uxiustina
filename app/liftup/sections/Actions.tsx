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
        <div className="hidden sm:flex w-full justify-between">
            <ActionButton text="Вернуться" icon={true} onClick={() => router.back()} />
            <div className="flex gap-5.5 pr-17.5">
                <AccentButton text="Написать в Telegram" />
                <ActionButton text="Написать на Email" />
                <ActionButton text="Посмотреть кейс на Behance" />
            </div>
        </div>
      </>
    );
}
