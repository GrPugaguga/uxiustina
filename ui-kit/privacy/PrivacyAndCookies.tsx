import Link from "next/link";

export default function PrivacyAndCookies() {
    return (
        <div className="flex gap-5">
            <Link href="/privacy" className="text-[10px] sm:text-[12px] font-semibold leading-6.5 text-grey-txt-primary active:text-grey-txt-secondary cursor-pointer">
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ & COOKIES
            </Link>
            <Link href="/privacy" className="text-[10px] sm:text-[12px] font-semibold leading-6.5 text-grey-txt-primary active:text-grey-txt-secondary cursor-pointer">
                О COOKIES
            </Link>
        </div>
    )
}
