'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderLink } from "@/ui-kit";
import MenuIcon from "@/public/svg/mobile/menu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const handleProjectsClick = () => {
        if (isHomePage) {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden sm:flex bg-grey-bg-light py-3 px-10 rounded-[20px] border border-grey-bg-primary backdrop-blur-[20px] items-center gap-21.5 w-max">
                <div>
                    <HeaderLink text={isHomePage ? "Юстина Д." : "На главную"} href="/" animate />
                </div>

                <div className="flex items-center gap-5">
                    <HeaderLink text="Проекты" href="/#projects" onClick={isHomePage ? handleProjectsClick : undefined} animate />
                    <HeaderLink text="Behance" href="https://www.behance.net/4582f7ec" external animate />
                    <HeaderLink text="CV" href="/cv.pdf" icon={true} external download animate />
                </div>

                <div className="flex items-center">
                    <HeaderLink text="Telegram" href="https://t.me/uxiustina" external animate />
                    <HeaderLink text="Email" href="mailto:utairrr@yandex.ru" external animate />
                </div>
            </header>

            {/* Mobile Header */}
            <header className="sm:hidden w-full bg-background-white border-b border-grey-bg-light pt-10 px-5 pb-2.5 z-50 mt-0">
                <div className="flex items-center justify-between">
                    <div>
                        {!isHomePage && (
                            <Link href="/" className="text-4 font-medium text-black leading-5.5 cursor-pointer">
                                На главную
                            </Link>
                        )}
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
                        <MenuIcon isOpen={isMenuOpen} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="sm:hidden fixed inset-0 bg-background-white z-40 pt-24">
                    <div className="mt-30 gap-4 flex flex-col items-center">
                        <HeaderLink text="CV" href="/cv.pdf" icon={true} external download />
                        <HeaderLink text="Behance" href="https://www.behance.net/4582f7ec" external />
                        <HeaderLink text="Telegram" href="https://t.me/uxiustina" external />
                        <HeaderLink text="Email" href="mailto:utairrr@yandex.ru" external />
                    </div>
                </div>
            )}
        </>
    )
}
