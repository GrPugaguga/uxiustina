import { HeaderLink } from "@/ui-kit";

export default function Header() {
    return (
        <header className="bg-grey-bg-light py-3 px-10 rounded-[20px] border border-grey-bg-primary backdrop-blur-[20px] flex items-center gap-21.5 w-max">
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
    )
}
