export default function PrivacyText(props: {
    title: string
    children?: React.ReactNode
}) {
    return (
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-0">
            <div className="sm:w-2/5">
                <h2 className="text-6 font-semibold leading-6.5 text-black">
                    {props.title}
                </h2>
            </div>
            {props.children && (
                <div className="sm:w-3/5 text-4 font-medium leading-5.5 text-black">
                    {props.children}
                </div>
            )}
        </div>
    )
}
