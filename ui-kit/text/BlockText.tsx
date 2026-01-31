export default function BlockText(props: {
    title: string
    children?: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-4 ">
            <div className="sm:w-2/5">
                <h2 className="text-[24px] font-semibold leading-6.5 text-black">
                    {props.title}
                </h2>
            </div>
            {props.children && (
                <div className="text-4 font-medium leading-5.5 text-black">
                    {props.children}
                </div>
            )}
        </div>
    )
}
