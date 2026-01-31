'use client'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CookiesPopup from "./CookiesPopup";
import Link from "next/link";

export default function PrivacyAndCookies() {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <>
        <div className="flex gap-5">
            <Link href="/privacy" className="text-[10px] sm:text-[12px] font-semibold leading-6.5 text-grey-txt-primary active:text-grey-txt-secondary cursor-pointer">
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ & COOKIES
            </Link>
            <button className="text-[10px] sm:text-[12px] font-semibold leading-6.5 text-grey-txt-primary active:text-grey-txt-secondary cursor-pointer" onClick={() => setIsOpen(true)}>
                О COOKIES
            </button>
        </div>
        <AnimatePresence>
            {isOpen && <CookiesPopup onAccept={() => setIsOpen(false)}/>}
        </AnimatePresence>
    </>

    )
}
