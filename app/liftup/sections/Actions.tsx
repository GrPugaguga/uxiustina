'use client';

import { ActionButton, AccentButton } from "@/ui-kit";
import { useRouter } from 'next/navigation';


export default function Actions() {
    const router = useRouter()
    return (
      <div className="flex w-full justify-between">
            <ActionButton text="Вернуться" icon={true} onClick={() => router.back()} />
            <div className="flex gap-5.5 pr-17.5">
                <AccentButton text="Написать в Telegram" />
                <ActionButton text="Написать на Email" />
                <ActionButton text="Посмотреть кейс на Behance" />
            </div>
      </div>
    );
}
