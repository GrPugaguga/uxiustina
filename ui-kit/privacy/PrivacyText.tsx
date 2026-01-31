export default function PrivacyText(props: {
    title: string
    children?: React.ReactNode
    className?: string
}) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-7 w-full ${props.className || ''}`}>
            <div className="sm:col-span-2">
                <h2 className="text-[24px] font-semibold leading-6.5 text-black">
                    {props.title}
                </h2>
            </div>
            {props.children && (
                <div className="sm:col-span-3 text-[16px] font-medium leading-5.5 text-black">
                    {props.children}
                </div>
            )}
        </div>
    )
}
