'use client';

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HeaderLink } from "@/ui-kit";
import MenuIcon from "@/public/svg/mobile/menu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isHomePage = pathname === '/';

    const handleHomeClick = () => {
        router.push('/');
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden sm:flex bg-grey-bg-light py-3 px-10 rounded-[20px] border border-grey-bg-primary backdrop-blur-[20px] items-center gap-21.5 w-max">
                <div>
                    <HeaderLink text="Юстина Дзюба" />
                </div>

                <div className="flex items-center gap-5">
                    <HeaderLink text="Проекты" />
                    <HeaderLink text="Behance" />
                    <HeaderLink text="CV" icon={true} />
                </div>

                <div className="flex items-center">
                    <HeaderLink text="Telegram" />
                    <HeaderLink text="Email" />
                </div>
            </header>

            {/* Mobile Header */}
            <header className="sm:hidden w-full bg-background-white border border-grey-bg-light pt-10 pr-5 pb-2.5 pl-5 z-50">
                <div className="flex items-center justify-between">
                    <div>
                        {!isHomePage && (
                            <span onClick={handleHomeClick} className="text-4 font-medium text-black leading-5.5 cursor-pointer">
                                На главную страницу
                            </span>
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
                    <div className="mt-50 gap-4 flex flex-col items-center">
                        <HeaderLink text="CV" icon={true} />
                        <HeaderLink text="Behance" />
                        <HeaderLink text="Telegram" />
                        <HeaderLink text="Email" />
                    </div>
                </div>
            )}
        </>
    )
}
